from django.http import HttpResponse, JsonResponse
from .apps import FirestoreDB
from .utilities import get_uid
import json

""" handle get and post requests concerning food recipes on homepage """

def create_menu(request):
    """
    create new menu using data from form submit
    """
    uid = get_uid()
    if not uid:
        return HttpResponse(status=404, content="You must be logged in to create a menu")

    # decode HTTP request using utf-8
    data = json.loads(request.body.decode('utf-8'))
    menu_name = data["menu-name"]
    url_menu_name = menu_name.lower()  # convert menu name to lowercase
    url_menu_name = url_menu_name.replace(' ', '-')  # replace spaces with dashes

    # remove special characters
    special_chars = ['"', "'", ":", "#", ",", "!", "?", "@", "."]
    for char in special_chars:
        url_menu_name = url_menu_name.replace(char, "")
    data['url_name'] = url_menu_name

    # check if menu name taken
    menu_doc = FirestoreDB.get_menu(url_menu_name)
    if menu_doc:
        return HttpResponse(status=409, content="Menu name is taken")

    # write menu data "menus" collection
    FirestoreDB.save_menu(url_menu_name, data)

    # give ownership of the menu_name to the user
    user_owned_menus = FirestoreDB.get_user_menus(uid)
    FirestoreDB.add_menu_to_user(user_owned_menus, url_menu_name, uid)

    return JsonResponse(data)


def view_menu(name):
    """ view a menu using its name from url """

    menu_name = name.lower()  # remove lower cases
    # retrieve menu data using menu name
    result = FirestoreDB.get_menu(menu_name).get()

    if result.exists:  # return menu data (to the front end)
        menu_data = result.to_dict()
        return JsonResponse(menu_data)
    return HttpResponse(status=404, content="Menu does not exist")


def edit_menu(request, name):
    """ edit the data on an existing menu """

    # decode HTTP request using utf-8 format
    data = json.loads(request.body.decode('utf-8'))
    uid = get_uid()

    # check if user owns any menus
    user_owned_menus = FirestoreDB.get_user_menus(uid)
    if not user_owned_menus.exists:
        return HttpResponse(status=401, content="You do not have access to this menu")

    # check if user owns the menu
    menu_names_list = user_owned_menus.to_dict()['menu_names']
    if name not in menu_names_list:
        return HttpResponse(status=401, content="You do not have access to this menu")

    menu_name = data["url-name"]  # extract current menu name

    # Availability Swap
    # if the user changes their open status:
    #     data["is-open"] = not data["is-open"]

    # check if menu name was changed
    if menu_name == name:
        # update menu data in Firestore
        FirestoreDB.get_menu(name).set(data)
    else:
        # update user menu names list with new name
        menu_names_list.remove(name)
        menu_names_list.append(menu_name)
        user_owned_menus.update({'menu_names': menu_names_list})

        # delete menu with old name
        FirestoreDB.delete_menu(name)
        # create menu with new name and data
        FirestoreDB.save_menu(menu_name, data)

    return JsonResponse(data)


def delete_menu(name):
    """ delete an existing menu by name """

    uid = get_uid()
    user_owned_menus = FirestoreDB.get_user_menus(uid)

    # check if user owns any menus
    if not user_owned_menus.exists:
        return HttpResponse(status=401, content="You do not have access to this menu")

    # check if user owns the menu
    menu_names_list = user_owned_menus.to_dict()['menu_names']
    if name not in menu_names_list:
        return HttpResponse(status=401, content="You do not have access to this menu")

    # remove menu from menus collection
    FirestoreDB.delete_menu(name)

    # remove menu name from user's menu name list
    FirestoreDB.remove_menu_from_user(user_owned_menus, name, uid)
    return HttpResponse(status=200, content="Successfully deleted menu")

def get_menus():
    uid = get_uid()
    user_owned_menus = FirestoreDB.get_user_menus(uid)

    # check if user owns any menus
    if not user_owned_menus.exists:
        return HttpResponse(status=401, content="You do not own any menus")

    menu_names_list = user_owned_menus.to_dict()['menu_names']
    return JsonResponse(menu_names_list, safe=False)


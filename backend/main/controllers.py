from django.http import HttpResponse, JsonResponse
from .apps import FirestoreDB
from oauth.utilities import get_uid
import json


class MenuController:
    """ handle get and post requests concerning food recipes on homepage """

    @staticmethod
    def home(request):
        # print(request.session['token'])
        """ return OKAY status code """
        return HttpResponse(status=200)

    @staticmethod
    def create(request):
        """
        create new menu using data from form submit
        """
        if request.method == "POST":
            # decode HTTP request using utf-8
            data = json.loads(request.body.decode('utf-8'))
            menu_name = data["menu-name"]
            formatted_data = ''
            # Lower Case Menu Name
            menu_lower = menu_name.lower()
            # check for blank space in menu name
            for i in range(len(menu_lower)):
                if menu_lower[i] == '':
                    formatted_data = menu_lower.replace()
                else:
                    formatted_data = menu_lower
            data['formatted-menu-name'] = formatted_data
            menu_name_v2 = data['formatted-menu-name']

            # check if menu name taken
            menu_doc = FirestoreDB.get_menu(url_menu_name)
            if menu_doc:
                return HttpResponse(status=409)

            # Initialize Availability Times
            data['is-open'] = False
            hours = data['is-open']

            # write menu data "menus" collection
            FirestoreDB.add_menu(menu_name_v2, hours, data)

            # give ownership of the menu_name to the user
            uid = get_uid()
            user_owned_menus = FirestoreDB.get_user_menus(uid)
            FirestoreDB.add_menu_to_user(user_owned_menus, menu_name_v2, hours, uid)

            return JsonResponse(data)

        # on initial page load
        return HttpResponse(status=200)

    @staticmethod
    def view(request, name):
        """ view a menu using its name """

        if request.method == "GET":
            # retrieve menu data using menu name
            result = FirestoreDB.get_menu(name).get()

            if result.exists:  # return menu data (to the front end)
                menu_data = result.to_dict()
                return JsonResponse(menu_data)

        return HttpResponse(status=404)

    @staticmethod
    def edit(request, name):

        if request.method == "PATCH":
            # decode HTTP request using utf-8 format
            data = json.loads(request.body.decode('utf-8'))

            uid = get_uid()
            user_owned_menus = FirestoreDB.get_user_menus(uid)

            # check if user owns the menu
            if not user_owned_menus.exists:
                return HttpResponse(status=401)

            menu_names_list = user_owned_menus.to_dict()['menu_names']

            if name not in menu_names_list:
                return HttpResponse(status=401)

            # Availability Swap
            # if the user changes their open status:
            #     data["is-open"] = not data["is-open"]

            menu_name = data["menu-name"]  # extract current menu name

            # check if menu name was changed
            if menu_name == name:
                # update menu data in Firestore
                FirestoreDB.save_menu(name, data)
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

        return HttpResponse(status=200)

    @staticmethod
    def delete(request, name):
        if request.method == "DELETE":
            userUID = request.session['uid']
            FirestoreDB.collection(userUID).document(name).delete()
        return HttpResponse(status=200)

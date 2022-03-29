from django.http import HttpResponse, JsonResponse
from .apps import FirestoreDB
# from oauth.models import CustomSession
from oauth.utilities import get_uid
import jwt
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

            # check if menu name taken
            menu_doc = FirestoreDB.get_menu(menu_name)
            if menu_doc:
                return HttpResponse(status=409)

            # write menu data "menus" collection
            FirestoreDB.add_menu(menu_name, data)

            # give ownership of the menu_name to the user
            uid = get_uid()
            menu_names = FirestoreDB.get_user_menus(uid)
            FirestoreDB.add_menu_to_user(menu_names, menu_name, uid)

            return JsonResponse(data)

        # on initial page load
        return HttpResponse(status=200)

    @staticmethod
    def view(request, name):
        """ view a menu using its name """

        if request.method == "GET":
            # retrieve menu data using menu name
            result = FirestoreDB.get_menu(name)

            if result.exists:  # return menu data (to the front end)
                menu_data = result.to_dict()
                return JsonResponse(menu_data)

        return HttpResponse(status=404)

    @staticmethod
    def edit(request, name):

        if request.method == "PATCH":
            # decode HTTP request using utf-8 format
            data = json.loads(request.body.decode('utf-8'))

            token = CustomSession.objects.order_by('-id')[0].uid  # get jwt token from session
            userID = jwt.decode(token, key="my_secret_key", algorithms=["HS256"])  # decode the jwt token

            user_menu_doc = FirestoreDB.collection(userID).document("menus")
            user_menus = user_menu_doc.get()

            # check if user is authorized to edit menu
            if user_menus.exists:
                menu_names_list = user_menus.to_dict()['menu_names']

                if name in menu_names_list:
                    menu_name = data["menu-name"]  # extract current menu name

                    # check if menu name was changed
                    if menu_name == name:

                        # update menu data in Firestore
                        FirestoreDB.collection('menus').document(name).set(data)
                    else:
                        # update user menu names list with new name
                        menu_names_list.remove(name)
                        menu_names_list.append(menu_name)
                        user_menu_doc.update({'menu_names': menu_names_list})

                        # delete menu with old name
                        FirestoreDB.collection('menus').document(name).delete()
                        # create menu with new name and key
                        FirestoreDB.collection('menus').document(menu_name).set(data)

                    return JsonResponse(data)


                else:
                    return HttpResponse(status=401)

            #  menu not owned by user
            else:
                return HttpResponse(status=401)

        return HttpResponse(status=200)

    @staticmethod
    def delete(request, name):
        if request.method == "DELETE":
            userUID = request.session['uid']
            FirestoreDB.collection(userUID).document(name).delete()
        return HttpResponse(status=200)

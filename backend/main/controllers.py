from django.http import HttpResponse, JsonResponse
from .apps import FirestoreDB
from oauth.models import CustomSession
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

            menu_name = data["menu-name"]  # extract menu name

            # write menu data to Firestore
            collection = FirestoreDB.collection("menus")
            doc = collection.document(menu_name)

            if doc.get().exists:
                # menu name taken
                return HttpResponse(status=409)
            else:
                collection.document(menu_name).set(data)

                # add menu name to user collection
                token = CustomSession.objects.order_by('-id')[0].uid  # get jwt token from session
                token = jwt.decode(token, key="my_secret_key", algorithms=["HS256"])  # decode the jwt token

                user_menu_doc = FirestoreDB.collection(token).document("menus")
                menu_names = user_menu_doc.get()

                if menu_names.exists:
                    menu_names_dict = menu_names.to_dict()
                    menu_names_dict['menu_names'].append(menu_name)
                    user_menu_doc.update({'menu_names': menu_names_dict['menu_names']})
                else:
                    user_menu_doc.set({'menu_names': [menu_name]})

                return JsonResponse(data)

        # on initial page load
        return HttpResponse(status=200)

    @staticmethod
    def view(request, name):
        """ view a menu using its name """

        if request.method == "GET":
            # retrieve menu data using menu name
            result = FirestoreDB.collection("menus").document(name).get()

            if result.exists:  # return menu data (to the front end)
                menu_data = result.to_dict()
                return JsonResponse(menu_data)

        return HttpResponse(status=404)

    @staticmethod
    def edit(request, name):

        if request.method == "PATCH":
            # decode HTTP request using utf-8 format
            data = json.loads(request.body.decode('utf-8'))

            menu_name = data["menu-name"]  # extract current menu name

            userUID = request.session['uid']

            # check if menu name was changed
            if menu_name == name:
                # update menu data in Firestore
                FirestoreDB.collection(userUID).document(name).set(data)
            else:
                # delete menu with old name
                FirestoreDB.collection(userUID).document(name).delete()
                # create menu with new name and key
                FirestoreDB.collection(userUID).document(menu_name).set(data)

            return JsonResponse(data)


        return HttpResponse(status=200)

    @staticmethod
    def delete(request, name):
        if request.method == "DELETE":
            userUID = request.session['uid']
            FirestoreDB.collection(userUID).document(name).delete()
        return HttpResponse(status=200)

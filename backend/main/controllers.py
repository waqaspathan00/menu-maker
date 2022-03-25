from django.http import HttpResponse, JsonResponse
from .apps import FirestoreDB
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
            collection = FirestoreDB.collection(menu_name)
            collection.document(menu_name).set(data)

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

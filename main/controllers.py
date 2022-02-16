from django.http import HttpResponse, JsonResponse
from .apps import FirestoreDB
import json

class MenuController:
    """ handle get and post requests concerning food recipes on homepage """

    @staticmethod
    def home(response):
        """ return OKAY status code """
        return HttpResponse(status=200)

    @staticmethod
    def create(response):
        """
        create new menu using data from form submit
        """
        if response.method == "POST":
            # decode JSON response using utf-8 format
            data = json.loads(response.body.decode('utf-8'))

            menu_name = data["restaurant-name"]  # extract menu name

            FirestoreDB.menu_collection.document(menu_name).set(data)

            return JsonResponse(data)
        return HttpResponse(status=200)

    @staticmethod
    def view(response, name):
        """ view a menu using its name """
        if response.method == "GET":
            # retrieve menu data using menu names
            result = FirestoreDB.menu_collection.document(name).get()
            if result.exists:
                menu_data = result.to_dict()
                return JsonResponse(menu_data)

        return HttpResponse(status=404)

    @staticmethod
    def edit(response, name):
        return HttpResponse(status=200)

    @staticmethod
    def delete(response, name):
        return HttpResponse(status=200)

"""
{
    "restaurant-name": "Narus Place",
    "menu-data": [
        {
            "category-title": "dinner",
            "items": [
                {
                    "item-name": "chicken",
                    "item-price": "19",
                    "item-description": "oven roasted chicken"
                },
                {
                    "item-name": "steak",
                    "item-price": "79",
                    "item-description": "wagyu steak and fries"
                }
            ]
        },
        {
            "category-title": "dessert",
            "items": [
                {
                    "item-name": "cookies",
                    "item-price": "2.99",
                    "item-description": "chocolate chip cookies"
                }
            ]
        }
    ]
}
"""
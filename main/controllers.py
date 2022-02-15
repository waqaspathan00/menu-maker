from django.http import HttpResponse, JsonResponse
from .models import Menu
from .apps import FirestoreDB
from helpers import get_categories

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
        NOTE: currently doesnt work due to missing CSRF token
        """
        if response.method == "POST":
            print(response.POST)

            # FirestoreDB.menu_collection.document(menu_name).set(menu)

            # return JsonResponse(menu)
        return HttpResponse(status=200)

    @staticmethod
    def view(response, name):
        """ view a menu using its name """
        if response.method == "GET":
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
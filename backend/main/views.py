from .controllers import MenuController, HttpResponse, JsonResponse
from django.views.decorators.csrf import csrf_exempt
import json
import jwt


# Create your views here.

def home(response):
    """ landing page """
    print(response.COOKIES.get("token"))
    return HttpResponse(status=200)
    # return JsonResponse(json.dumps(response.body))
    # return MenuController.home(response)


@csrf_exempt
def create(response):
    """ handle create menu POST """
    return MenuController.create(response)


def view(response, name):
    """ handle view menu GET """
    return MenuController.view(response, name)


@csrf_exempt
def edit(response, name):
    """ handle edit menu PUT """
    return MenuController.edit(response, name)


@csrf_exempt
def delete(response, name):
    """ handle delete menu DELETE """
    return MenuController.delete(response, name)


@csrf_exempt
def login(response):
    data = json.loads(response.body)
    token = jwt.encode(payload=data, key="my_secret_key")
    cookie = HttpResponse(status=200)
    cookie.set_cookie("token", token)
    return cookie

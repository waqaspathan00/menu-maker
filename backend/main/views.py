from .menu_controller import create_menu, view_menu, edit_menu, delete_menu, get_menus
from .auth_controller import login_user, logout_user
from django.http import HttpResponse
from django.views.decorators.csrf import csrf_exempt
from .models import CustomSession
import jwt


# Create your views here.

def test(request):
    """ landing page """
    token = CustomSession.objects.order_by('-id')[0].uid  # get jwt token from session
    print("home token:", token)
    token = jwt.decode(token, key="my_secret_key", algorithms=["HS256"])  # decode the jwt token
    print("home uid:", token)

    return HttpResponse(status=200)


@csrf_exempt
def create(request):
    """ handle create menu POST """
    if request.method == "POST":
        return create_menu(request)
    return HttpResponse(status=400, content="Incorrect HTTP request, use POST")


@csrf_exempt
def view(request, name):
    """ handle view menu GET """
    if request.method == "GET":
        return view_menu(name)
    return HttpResponse(status=400, content="Incorrect HTTP request, use GET")


@csrf_exempt
def edit(request, name):
    """ handle edit menu PATCH """
    if request.method == "PATCH":
        return edit_menu(request, name)
    return HttpResponse(status=400, content="Incorrect HTTP request, use PATCH")


@csrf_exempt
def delete(request, name):
    """ handle delete menu DELETE """
    if request.method == "DELETE":
        return delete_menu(name)
    return HttpResponse(status=400, content="Incorrect HTTP request, use DELETE")


@csrf_exempt
def login(request):
    """ when the user logs in, save their uid to session as a jwt token """
    if request.method == "POST":
        return login_user(request)
    return HttpResponse(status=400, content="Incorrect HTTP request, use POST")


@csrf_exempt
def logout(request):
    """ when the user logs out, remove their uid from session """
    if request.method == "POST":
        return logout_user()
    return HttpResponse(status=400, content="Incorrect HTTP request, use POST")


@csrf_exempt
def menus(request):
    """ get a list of menus that the user owns """
    if request.method == "GET":
        return get_menus()
    return HttpResponse(status=400, content="Incorrect HTTP request, use GET")

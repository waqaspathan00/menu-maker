from .menu_controller import create_menu, view_menu, edit_menu, delete_menu
from .login_controller import login_user, logout_user
from django.http import HttpResponse
from django.views.decorators.csrf import csrf_exempt
from .models import CustomSession
import jwt


# Create your views here.

def test(response):
    """ landing page """
    token = CustomSession.objects.order_by('-id')[0].uid  # get jwt token from session
    print("home token:", token)
    token = jwt.decode(token, key="my_secret_key", algorithms=["HS256"])  # decode the jwt token
    print("home uid:", token)

    return HttpResponse(status=200)


@csrf_exempt
def create(response):
    """ handle create menu POST """
    return create_menu(response)

@csrf_exempt
def view(response, name):
    """ handle view menu GET """
    return view_menu(response, name)


@csrf_exempt
def edit(response, name):
    """ handle edit menu PUT """
    return edit_menu(response, name)


@csrf_exempt
def delete(response, name):
    """ handle delete menu DELETE """
    return delete_menu(response, name)


@csrf_exempt
def login(response):
    """ when the user logs in, save their uid to session as a jwt token """
    return login_user(response)


@csrf_exempt
def logout(response):
    """ when the user logs out, remove their uid from session """
    return logout_user()

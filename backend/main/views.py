from .controllers import MenuController, HttpResponse, JsonResponse
from django.views.decorators.csrf import csrf_exempt
from oauth.models import CustomSession
import jwt


# Create your views here.

def home(response):
    """ landing page """
    jwt_token = CustomSession.objects.order_by('-id')[0].uid  # get jwt token from session
    print("home token:", jwt_token)
    jwt_token = jwt.decode(jwt_token, key="my_secret_key", algorithms=["HS256"])  # decode the jwt token
    print("home uid:", jwt_token)

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

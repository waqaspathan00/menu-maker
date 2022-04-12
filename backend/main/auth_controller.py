import json
import jwt
from django.http import HttpResponse, JsonResponse
from django.views.decorators.csrf import csrf_exempt
from .models import CustomSession
from .apps import FirestoreDB


# Create your views here.

@csrf_exempt
def register_user(request):
    """ when a new user registers an account, save their business name """
    login_user(request)

    data = json.loads(request.body)
    uid = data["uid"]
    business_name = data["business-name"]
    if not FirestoreDB.register_business(uid, business_name):
        return HttpResponse(status=403, content="You have already registered a business name")
    return HttpResponse(status=200, content="Successfully registered your business")


@csrf_exempt
def login_user(request):
    """ when the user logs in, save their uid to session as a jwt token """
    data = json.loads(request.body)
    user = {"uid": data["uid"]}  # extract uid from data
    token = jwt.encode(payload=user, key="my_secret_key", algorithm="HS256")

    new_user = CustomSession(uid=token)
    new_user.save()
    return JsonResponse(data)


@csrf_exempt
def logout_user():
    """ when the user logs out, remove their uid from session """
    CustomSession.objects.all().delete()
    return HttpResponse(status=200, content="Successfully logged out")

import json
import jwt
from django.http import HttpResponse
from django.views.decorators.csrf import csrf_exempt
from .models import CustomSession

# Create your views here.


@csrf_exempt
def login(response):
    data = json.loads(response.body)
    print("login uid:",data)
    token = jwt.encode(payload=data, key="my_secret_key", algorithm="HS256")
    print("login token:",token)
    new_user = CustomSession(uid=token)  # save user id (login)
    new_user.save()
    return HttpResponse(status=200)

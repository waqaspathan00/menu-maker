import json
import jwt
from django.http import HttpResponse, JsonResponse, request
from django.shortcuts import render
from django.views.decorators.csrf import csrf_exempt

# Create your views here.


@csrf_exempt
def login(response):
    data = json.loads(response.body)
    token = jwt.encode(payload=data, key="my_secret_key")
    print(token)
    # response.session['token'] = token
    return HttpResponse(status=200)

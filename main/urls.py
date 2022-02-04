# in main app, urls.py
from django.urls import path
from . import views

urlpatterns = [
    # path arguments:
    # 1. the specific website address, leaving it blank could imply home page
    # 2. the function you want to call when this page is reached
    # 3. a name for the url
    path("", views.home, name="home"),
]
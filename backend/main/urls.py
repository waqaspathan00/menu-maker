from django.urls import path
from . import views

urlpatterns = [
    path("", views.home, name="home"),
    path("create", views.create, name="create"),
    path("view/<str:name>", views.view, name="view"),
    path("edit/<str:name>", views.edit, name="edit"),
    path("delete/<str:name>", views.delete, name="delete"),

    path("login/", views.login, name="login"),
    path("logout/", views.logout, name="logout"),
]

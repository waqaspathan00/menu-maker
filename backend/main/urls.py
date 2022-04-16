from django.urls import path
from . import views

urlpatterns = [
    # --- uncomment this route for testing purposes ---
    path("", views.test, name="test"),

    path("create", views.create, name="create"),
    path("view/<str:name>", views.view, name="view"),
    path("edit/<str:name>", views.edit, name="edit"),
    path("delete/<str:name>", views.delete, name="delete"),

    path("get-menus", views.menus, name="get-menu"),
  
    path("register/", views.register, name="register"),
    path("login/", views.login, name="login"),
    path("logout/", views.logout, name="logout"),
]

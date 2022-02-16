from django.urls import path
from . import views

urlpatterns = [
    path("", views.home, name="create"),
    path("create", views.create, name="create"),
    path("view/<str:name>", views.view, name="view"),
    path("edit/<str:name>", views.edit, name="edit"),
    path("delete/<str:name>", views.delete, name="delete"),
]

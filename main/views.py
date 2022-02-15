from .controllers import MenuController

# Create your views here.

def home(response):
    return MenuController.home(response)

def create(response):
    return MenuController.create(response)

def view(response, name):
    return MenuController.view(response, name)

def edit(response, name):
    return MenuController.edit(response, name)

def delete(response, name):
    return MenuController.delete(response, name)


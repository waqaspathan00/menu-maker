from .controllers import MenuController

# Create your views here.

def home(response):
    """ landing page """
    return MenuController.home(response)

def create(response):
    """ handle create menu POST """
    return MenuController.create(response)

def view(response, name):
    """ handle view menu GET """
    return MenuController.view(response, name)

def edit(response, name):
    """ handle edit menu PUT """
    return MenuController.edit(response, name)

def delete(response, name):
    """ handle delete menu DELETE """
    return MenuController.delete(response, name)

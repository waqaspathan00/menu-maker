from .models import CustomSession
import jwt
from .apps import FirestoreDB


def get_uid():
    """ decode jwt token into uid """
    try:
        token = CustomSession.objects.order_by('-id')[0].uid  # get jwt token from session
        token = jwt.decode(token, key="my_secret_key", algorithms=["HS256"])  # decode the jwt token
        uid = token["uid"]  # extract uid from jwt token
        return uid
    except IndexError:
        return None
"""
attempt to refactor logic in edit and delete crud functions

def valid_user_to_menu_relationship(name):
     # validate ownership between users and menus (when performing requests) 
    uid = get_uid()
    user_owned_menus = FirestoreDB.get_user_menus(uid)

    # check if user owns the menu
    if not user_owned_menus.exists:
        return HttpResponse(status=401, content="You do not have access to this menu")

    menu_names_list = user_owned_menus.to_dict()['menu_names']
    if name not in menu_names_list:
        return HttpResponse(status=401, content="You do not have access to this menu")
"""
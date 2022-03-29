from django.apps import AppConfig
import firebase_admin
from firebase_admin import credentials
from firebase_admin import firestore

class MainConfig(AppConfig):
    default_auto_field = 'django.db.models.BigAutoField'
    name = 'main'

class FirestoreDB:
    """ initialize FirestoreDB using credentials stored in serviceAccountKey """
    cred = credentials.Certificate("../serviceAccountKey.json")
    firebase_admin.initialize_app(cred)
    db = firestore.client()

    @staticmethod
    def collection(coll_id):
        """ return a Firestore collection using provided collection id """
        return FirestoreDB.db.collection(coll_id)

    @staticmethod
    def get_menu(menu_name):
        menu_collection = FirestoreDB.db.collection("menus")
        document = menu_collection.document(menu_name)

        # if menu_name has been taken, negate creation
        if document.get().exists:
            return document
        return None

    @staticmethod
    def add_menu(menu_name, data):
        """ add menu to Firestore """
        menu_collection = FirestoreDB.db.collection("menus")
        menu_collection.document(menu_name).set(data)

    @staticmethod
    def get_user_menus(uid):
        user_collection = FirestoreDB.collection(uid)
        user_menus = user_collection.document("menus")

        menu_names = user_menus.get()
        return menu_names

    @staticmethod
    def add_menu_to_user(menu_names, menu_name, uid):
        """ give ownership for a menu name to a user """
        user_collection = FirestoreDB.collection(uid)
        user_menus = user_collection.document("menus")

        if menu_names.exists:
            menu_names_dict = menu_names.to_dict()
            menu_names_dict['menu_names'].append(menu_name)
            user_menus.update({'menu_names': menu_names_dict['menu_names']})
        else:
            user_menus.set({'menu_names': [menu_name]})

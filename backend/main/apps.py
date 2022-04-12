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
    def get_collection(coll_id):
        """ return a Firestore collection using provided collection id """
        return FirestoreDB.db.collection(coll_id)

    @staticmethod
    def register_business(uid, name):
        """ register a new users business name to be used as their menu name """
        user_collection = FirestoreDB.get_collection(uid)
        business_doc = user_collection.document("business")

        if business_doc.get().exists:
            return False

        business_doc.set({'business-name': [name]})
        return True

    @staticmethod
    def get_menu(menu_name):
        """ return a menu data document using provided menu_name """
        menu_collection = FirestoreDB.get_collection("menus")
        document = menu_collection.document(menu_name)

        # if menu_name has been taken, negate creation
        if document.get().exists:
            return document
        return None

    @staticmethod
    def save_menu(menu_name, data):
        """ save menu data to Firestore, can be used for create and edit"""
        menu_collection = FirestoreDB.get_collection("menus")
        menu_collection.document(menu_name).set(data)

    @staticmethod
    def delete_menu(menu_name):
        """ delete menu document from "menus" collection using menu name """
        FirestoreDB.get_menu(menu_name).delete()

    @staticmethod
    def get_user_menus(uid):
        """ get a list of menus that the user owns """
        user_collection = FirestoreDB.get_collection(uid)
        user_menus = user_collection.document("menus")

        menu_names = user_menus.get()
        return menu_names

    @staticmethod
    def update_user_menus(uid, menu_names_list):
        """ update list of menus that the user owns """
        user_collection = FirestoreDB.get_collection(uid)
        user_menus = user_collection.document("menus")
        user_menus.update({'menu_names': menu_names_list})
        return

    @staticmethod
    def add_menu_to_user(user_owned_menus, menu_name, uid):
        """ give ownership for a menu name to a user """
        user_collection = FirestoreDB.get_collection(uid)
        user_menus = user_collection.document("menus")

        if user_owned_menus.exists:
            menu_names_dict = user_owned_menus.to_dict()
            menu_names_dict['menu_names'].append(menu_name)
            user_menus.update({'menu_names': menu_names_dict['menu_names']})
        else:
            user_menus.set({'menu_names': [menu_name]})

    @staticmethod
    def remove_menu_from_user(user_owned_menus, menu_name, uid):
        """ remove ownership for a menu name fram a user """
        user_collection = FirestoreDB.get_collection(uid)
        user_menus = user_collection.document("menus")

        if user_owned_menus.exists:
            menu_names_dict = user_owned_menus.to_dict()
            menu_names_dict['menu_names'].remove(menu_name)
            user_menus.update({'menu_names': menu_names_dict['menu_names']})

    @staticmethod
    def cleanMenuData(data):
        menu_name = data["menu-name"]
        url_menu_name = menu_name.lower()  # convert menu name to lowercase
        url_menu_name = url_menu_name.replace(' ', '-')  # replace spaces with dashes

        # remove special characters
        special_chars = ['"', "'", ":", "#", ",", "!", "?", "@", "."]
        for char in special_chars:
            url_menu_name = url_menu_name.replace(char, "")
        data['url_name'] = url_menu_name
        return data

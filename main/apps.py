from django.apps import AppConfig
import firebase_admin
from firebase_admin import credentials
from firebase_admin import firestore

class MainConfig(AppConfig):
    default_auto_field = 'django.db.models.BigAutoField'
    name = 'main'

class FirestoreDB:
    """ initialize FirestoreDB using credentials stored in serviceAccount """
    cred = credentials.Certificate("serviceAccountKey.json")
    firebase_admin.initialize_app(cred)
    db = firestore.client()
    menu_collection = db.collection("menus")

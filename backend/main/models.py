# Create your models here

from django.db import models

# Create your models here.

class CustomSession(models.Model):
    """
    Custom-made session since the one provided by django wasn't working
    It is as secure as the Django session

    A session is a database with { key: value } pairs
    This CustomSession can currently only store one { key: value } pair

    # How to work with CustomSession

    from .models import CustomSession
    session = CustomSession.objects      # get a list of session objects
    new_user = CustomSession(uid=<UID>)  # save a user to the session (by uid)
    session.get(id=<ID>).uid                 # get user id
    session.get(id=<ID>).delete()           # delete user from session (logout)
    session.all().delete()               # delete all user data in session

    """
    uid = models.CharField(max_length=256)

    def __str__(self):
        return self.uid


# add a row to this table
# then delete it
# manually both times

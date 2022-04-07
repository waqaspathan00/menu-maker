from .models import CustomSession
import jwt


def get_uid():
    """ decode jwt token into uid """
    token = CustomSession.objects.order_by('-id')[0].uid  # get jwt token from session
    token = jwt.decode(token, key="my_secret_key", algorithms=["HS256"])  # decode the jwt token
    uid = token["uid"]  # extract uid from jwt token
    return uid

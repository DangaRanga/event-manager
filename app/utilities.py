from datetime import datetime
from datetime import date
from tokenize import Special
import random
import hashlib
import app
import os
import bcrypt
from .extensions import app_bcrypt

def getTimeNow():
    now = datetime.now()
    current_time = now.strftime("%H:%M")
    return current_time

def getDateNow():
    today = date.today()
    dateformat= today.strftime("%Y-%m-%d")
    return dateformat


def generateSalt():
    salt = bcrypt.gensalt()
    return salt





# def allowed_file(filename):
#     return '.' in filename and \
#            filename.rsplit('.', 1)[1].lower() in ALLOWED_EXTENSIONS
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


def securePassword(password,salt):
    salted_password = f"{salt}{password}{salt}"
    hashed_password = app_bcrypt.generate_password_hash(salted_password)
    return hashed_password

def checkPassword(password,actual_password,salt):
    salted_password = f"{salt}{password}{salt}"
    h = hashlib.new('sha256')
    h.update(bytes(salted_password, 'utf-8'))
    return h.hexdigest()==actual_password
    

# def allowed_file(filename):
#     return '.' in filename and \
#            filename.rsplit('.', 1)[1].lower() in ALLOWED_EXTENSIONS
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


def formatEvents(events):
    data=[]
    for event in events:
        data.append({
            "created_at": event.created_at,
            "description": event.description,
            "end_date": event.end_date.strftime("%Y-%m-%d"),
            "end_time": event.end_time,
            "photo": "http://localhost:8080/uploads/"+event.image_url,
            "start_date": event.start_date.strftime("%Y-%m-%d"),
            "start_time": event.start_time,
            "status": event.status,
            "title": event.title,
            "user_id": event.userid,
            "venue": event.venue,
            "website_url": event.website_url,
            "eventid": event.eventid
        })
    return data

def formatEventsUpdate(events):
    data=[]
    for event in events:
        data.append({
            "created_at": event.created_at,
            "description": event.description,
            "end_date": event.end_date,
            "end_time": event.end_time,
            "photo": "http://localhost:8080/uploads/"+event.image_url,
            "start_date": event.start_date,
            "start_time": event.start_time,
            "status": event.status,
            "title": event.title,
            "user_id": event.userid,
            "venue": event.venue,
            "website_url": event.website_url,
            "eventid": event.eventid
        })
    return data


# def allowed_file(filename):
#     return '.' in filename and \
#            filename.rsplit('.', 1)[1].lower() in ALLOWED_EXTENSIONS
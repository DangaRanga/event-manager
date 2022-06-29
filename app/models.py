from collections import UserList
from .extensions import db
from .utilities import generateSalt, securePassword, getDateNow


class Users(db.Model):
    __tablename__ = 'users'
    userid = db.Column(db.Integer, primary_key=True)
    full_name = db.Column(db.String(50), nullable=False)
    email = db.Column(db.String(100), nullable=False, unique = True)
    password = db.Column(db.String(64), nullable=False)
    profile_photo_url = db.Column(db.String(100))
    role = db.Column(db.String(12), nullable=False) #  ADMIN or USER
    created_at = db.Column(db.DateTime)
    salt = db.Column(db.String(30), nullable=False)
    
    eventref = db.relationship('Events', backref='users',uselist=True) 

    def __init__(self, full_name, email, password, profile_photo_url, role, created_at):
        generated_salt = generateSalt()
        self.full_name = full_name
        self.email = email
        self.password = securePassword(password,generated_salt)
        self.profile_photo_url = profile_photo_url
        self.role = role
        self.salt = generated_salt
        self.created_at = created_at


         

class Events(db.Model):
    __tablename__ = 'events'
    eventid = db.Column(db.Integer, primary_key= True, nullable=False)
    userid =  db.Column(db.Integer, db.ForeignKey('users.userid', ondelete="CASCADE"), autoincrement= False , nullable=False)
    title = db.Column(db.String(30))
    start_date = db.Column(db.DateTime)
    end_date = db.Column(db.DateTime)
    start_time = db.Column(db.DateTime)
    end_time = db.Column(db.DateTime)
    description = db.Column(db.String(500))
    venue = db.Column(db.String(50))
    image_url = db.Column(db.String(100))
    website_url = db.Column(db.String(2048))
    status = db.Column(db.String(10))
    created_at= db.Column(db.DateTime)

    def __init__(self, userid, title, start_date, end_date, start_time, end_time, description, venue, image_url, website_url, status, created_at):
        self.userid = userid
        self.title = title
        self.start_date = start_date
        self.end_date = end_date
        self.start_time = start_time
        self.end_time = end_time
        self.description = description
        self.venue = venue
        self.image_url = image_url
        self.website_url = website_url
        self.status = status
        self.created_at = created_at




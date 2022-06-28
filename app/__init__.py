from flask import Flask
from .config import Config
from extensions import db, migrate, app_session, app_bcrypt


app = Flask(__name__)
app.config.from_object(Config)

db.init_app(app)
migrate.init_app(app, db)
app_session.init_app(app)
app_bcrypt.init_app(app)

from app import views
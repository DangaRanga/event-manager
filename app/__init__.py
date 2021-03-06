from flask import Flask
from .config import Config
from .extensions import db, migrate, app_session, app_bcrypt, login_manager, app_cors



app = Flask(__name__)
app.config.from_object(Config)

app_cors.init_app(app, resources={r"/*" : {"orgins": "*"}})

#app.config['SESSION_TYPE'] = 'filesystem'
db.init_app(app)
migrate.init_app(app, db)
app_session.init_app(app)
app_bcrypt.init_app(app)
login_manager.init_app(app)
login_manager.login_view = 'login'

from app import views
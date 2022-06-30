from flask_sqlalchemy import SQLAlchemy
from flask_migrate import Migrate
from flask_session import Session
from flask_bcrypt import Bcrypt
from flask_login import LoginManager
from flask_cors import CORS


app_bcrypt = Bcrypt()
db = SQLAlchemy()
migrate = Migrate()
app_session = Session()
login_manager = LoginManager()
app_cors= CORS()






from flask_sqlalchemy import SQLAlchemy
from flask_migrate import Migrate
from flask_session import Session
from flask_bcrypt import Bcrypt


app_bcrypt = Bcrypt()
db = SQLAlchemy()
migrate = Migrate()
app_session = Session()





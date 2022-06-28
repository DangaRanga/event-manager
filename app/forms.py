from flask_wtf import FlaskForm
from wtforms import StringField,TextAreaField,validators,PasswordField,SelectField
from wtforms.validators import DataRequired, InputRequired
from flask_wtf.file import FileField, FileRequired, FileAllowed

class RegisterForm(FlaskForm):
    fullname = StringField('fullname', validators=[DataRequired()])
    email = StringField('email', validators=[DataRequired()])
    password = PasswordField('password', validators=[DataRequired()])
    photo = FileField('Upload Photo', validators=[FileRequired(), FileAllowed(['jpg', 'png', 'Images only!'])])


class LoginForm(FlaskForm):
    email = StringField('email', validators=[DataRequired()])
    password = PasswordField('password', validators=[DataRequired()])


class AddEventsForm(FlaskForm):
    title = StringField('title', validators=[DataRequired()])
    start_date = StringField('start_date', validators=[DataRequired()])
    start_time = StringField('start_time', validators=[DataRequired()])
    end_date = StringField('end_date', validators=[DataRequired()])
    end_time = StringField('end_time', validators=[DataRequired()])
    description = TextAreaField('description', validators=[DataRequired()])
    venue = StringField('venue', validators=[DataRequired()])
    photo = FileField('Upload Photo', validators=[FileRequired(), FileAllowed(['jpg', 'png', 'Images only!'])])
    url = StringField('url', validators=[DataRequired()])

#class UpdateEventsForm(FlaskForm):

#class SearchForm(FlaskForm):

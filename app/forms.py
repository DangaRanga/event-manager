from flask_wtf import FlaskForm
from wtforms import StringField,TextAreaField,validators,PasswordField,SelectField
from wtforms.validators import DataRequired, InputRequired
from flask_wtf.file import FileField, FileRequired, FileAllowed

class RegisterForm(FlaskForm):
    fullname = StringField('Full Name', validators=[DataRequired()])
    email = StringField('Email', validators=[DataRequired()])
    password = PasswordField('Password', validators=[DataRequired()])
    photo = FileField('Upload Photo', validators=[FileRequired(), FileAllowed(['jpg', 'png','jpeg', 'Images only!'])])


class LoginForm(FlaskForm):
    email = StringField('Email', validators=[DataRequired()])
    password = PasswordField('Password', validators=[DataRequired()])


class AddEventsForm(FlaskForm):
    title = StringField('Title', validators=[DataRequired()])
    startdate= StringField('Start Date', validators=[DataRequired()])
    starttime = StringField('Start Time', validators=[DataRequired()])
    enddate = StringField('End Date', validators=[DataRequired()])
    endtime = StringField('End Time', validators=[DataRequired()])
    description = TextAreaField('Description', validators=[DataRequired()])
    venue = StringField('Venue', validators=[DataRequired()])
    photo = FileField('Upload Photo', validators=[FileRequired(), FileAllowed(['jpg', 'png', 'Images only!'])])
    website_url = StringField('Website Url', validators=[DataRequired()])

class UpdateEventsForm(FlaskForm):
    title = StringField('Title', validators=[DataRequired()])
    startdate = StringField('Start Date', validators=[DataRequired()])
    starttime = StringField('Start Time', validators=[DataRequired()])
    enddate = StringField('End Date', validators=[DataRequired()])
    endtime = StringField('End Time', validators=[DataRequired()])
    description = TextAreaField('Description', validators=[DataRequired()])
    venue = StringField('Venue', validators=[DataRequired()])
    photo = FileField('Upload Photo', validators=[FileAllowed(['jpg', 'png', 'Images only!','jpeg'])])
    website_url = StringField('Website Url', validators=[DataRequired()])

class SearchForm(FlaskForm):
    title = StringField('Title', validators=[DataRequired()])
    startdate = StringField('Start Date', validators=[DataRequired()])

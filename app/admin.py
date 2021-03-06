"""
Flask Documentation:     https://flask.palletsprojects.com/
Jinja2 Documentation:    https://jinja.palletsprojects.com/
Werkzeug Documentation:  https://werkzeug.palletsprojects.com/
This file creates your application.
"""

# from app import app,db,login_manager,app_bcrypt
# from flask import request, jsonify,g, make_response,send_file, flash, redirect, render_template, url_for
# import os
# from app.models import *
# from flask_wtf.csrf import generate_csrf
# from werkzeug.security import check_password_hash
# from sqlalchemy import null, or_
# from app.forms import *
# from werkzeug.utils import secure_filename
# from flask_login import login_user, logout_user, current_user, login_required

# from .utilities import formatEvents


# # Using JWT
# import jwt
# from functools import wraps
# import datetime

# ###
# # Routing for your application.
# ###

# @app.route('/')
# def home():
#     """Render website's home page."""
#     return render_template('home.html')


# @app.route('/about/')
# def about():
#     """Render the website's about page."""
#     return render_template('about.html', name="Mary Jane")

# def admin_required(func):
#     @wraps(func)
#     def decorated_view(*args, **kwargs):
#         if current_user.role != 'admin':       
#             flash("You don't have permission to access this resource.", "warning")
#             return redirect(url_for("home"))
#         return func(*args, **kwargs)
#     return decorated_view

# def regular_required(func):
#     @wraps(func)
#     def decorated_view(*args, **kwargs):
#         if current_user.role != 'regular':       
#             flash("You don't have permission to access this resource.", "warning")
#             return redirect(url_for("home"))
#         return func(*args, **kwargs)
#     return decorated_view

# def requires_auth(f):
#   @wraps(f)
#   def decorated(*args, **kwargs):
#     #auth = "Bearer "+ request.cookies.get('token', None) 
#     auth = "Bearer "+ request.headers['x-access-tokens']
#     #auth = request.headers['Authorization']

#     print(auth)

#     if not auth:
#       return jsonify({'code': 'authorization_header_missing', 'description': 'Authorization header is expected'}), 401

#     parts = auth.split()

#     if parts[0].lower() != 'bearer':
#       return jsonify({'code': 'invalid_header', 'description': 'Authorization header must start with Bearer','token':parts[0]}), 401
#     elif len(parts) == 1:
#       return jsonify({'code': 'invalid_header', 'description': 'Token not found'}), 401
#     elif len(parts) > 2:
#       return jsonify({'code': 'invalid_header', 'description': 'Authorization header must be Bearer + \s + token'}), 401

#     token = parts[1]
#     try:
#         payload = jwt.decode(token, app.config['SECRET_KEY'], algorithms=["HS256"])

#     except jwt.ExpiredSignatureError:
#         return jsonify({'code': 'token_expired', 'description': 'token is expired'}), 401
#     except jwt.DecodeError:
#         return jsonify({'code': 'token_invalid_signature', 'description': 'Token signature is invalid'}), 401

#     g.current_user = user = payload
#     return f(*args, **kwargs)

#   return decorated


# def generate_token(id,name,role):
#     payload = {
#         'sub': id, # subject, usually a unique identifier
#         'name': name,
#         'role': role
#     }
#     token = jwt.encode(payload, app.config['SECRET_KEY'], algorithm='HS256')

#     return token

# @app.route('/register', methods=['POST'])
# def register(): 
#     """
#     Adds a new regular user. 
#     """
#     form = RegisterForm()
#     if request.method == 'POST' and form.validate_on_submit():
#         current_dt = datetime.datetime.now()
#         image = form.photo.data
#         filename = secure_filename(image.filename)
    
#         password = form.password.data 
#         full_name = form.fullname.data
#         email = form.email.data 
        
#         role = "regular"
#         profile_photo = filename
#         created_at = current_dt.strftime("%Y-%m-%d " + "%X")

#         user_info = Users(full_name,email,password,profile_photo,role,created_at)
#         db.session.add(user_info)
#         db.session.commit()
        
#         image.save(os.path.join(app.config['UPLOAD_FOLDER'], filename))
#         return jsonify(full_name = full_name, profile_photo = filename,
#         email = email,role=role, created_at = created_at),201

#     return jsonify(form.errors), 400

# @app.route('/auth/login', methods=['POST'])
# def login():
#     form = LoginForm()
   
#     if form.validate_on_submit() and request.method == 'POST':
#         email= form.email.data
#         password = form.password.data
#         user = Users.query.filter_by(email=email).first()

#         if user is not None and app_bcrypt.check_password_hash(user.password, password):
#                 #login_user(user)    
#                 token=generate_token(user.userid,user.full_name,user.role)
#                 resp = make_response(jsonify(error=None, data={'token': "Bearer " +token}, message="Token Generated"))
#                 resp.set_cookie('token', token, httponly=True, secure=True)
#                 resp.set_cookie('user', user.userid, httponly=False, secure=True)
#                 return resp
#         return jsonify(error="Not Authorized"),401   
#     return jsonify(form.errors), 400     

# @app.route('/auth/logout', methods=['POST','GET'])
# @requires_auth
# def logout():
#     logout_user()
#     resp= make_response('', 204) 
#     resp.delete_cookie('token')
#     resp.delete_cookie('user')
#     return resp

# @app.route('/api/csrf-token', methods=['GET'])
# def get_csrf():
#     return jsonify({'csrf_token': generate_csrf()})


# @login_manager.user_loader
# def load_user(id):
#     #return Users.query.get(int(id))
#     return Users.query.get(id) #removed it as id is email


# @app.route('/api/events', methods=['POST','GET'])
# #@login_required
# @requires_auth
# #@regular_required
# def events():
#     # Form data
#     #if current_user.is_authenticated:
#             form = AddEventsForm()

#             # Validate file upload on submit
#             if request.method == 'POST' and form.validate_on_submit():
#                 # Get file data and save to your uploads folder
#                 current_dt = datetime.datetime.now()
    
#                 image = form.photo.data
#                 filename = secure_filename(image.filename)

#                 title= form.title.data
#                 start_date = form.startdate.data
#                 start_time = form.starttime.data
                
#                 end_date= form.enddate.data
#                 end_time= form.endtime.data
#                 description= form.description.data
#                 venue= form.venue.data
#                 website_url= request.form['website_url']
            
#                 status="pending"
            
#                 photo = filename
#                 uid=current_user.get_id() or 6
#                 created_at = current_dt.strftime("%Y-%m-%d " + "%X")
#                 event = Events(uid, title, start_date, end_date, start_time,end_time,description,venue,photo,website_url,status)
#                 db.session.add(event) 
#                 db.session.commit()
#                 image.save(os.path.join(app.config['UPLOAD_FOLDER'], filename))
                
#                 return jsonify(title= title, start_date = start_date, start_time=start_time,end_date=end_date,end_time=end_time, description=description,
#                 venue= venue,photo = filename, website_url= website_url, status=status, user_id=uid,created_at= created_at),201

#             elif request.method == 'GET': 
#                 event_query_data = db.session.query(Events).order_by(Events.start_date.desc()).filter_by(status='published').all()
#                 response_data = formatEvents(event_query_data)
    
#                 return jsonify(response_data),200

#             return jsonify(form.errors), 400



# #@app.route('/api/events/<user_id>', methods=['GET'])
# @app.route('/api/user/<user_id>/events', methods=['GET'])
# @login_required
# @requires_auth
# @regular_required
# def reg_user_event(user_id):
#     user_id=user_id
#     if current_user.is_authenticated:
#         if request.method == 'GET':
#             return jsonify(event=[i.serialize() for i in  db.session.query(Events).filter(Events.userid==user_id)]),200

# #Admin Endpoint
# @app.route('/api/admin/events', methods=['POST','GET'])
# #@login_required
# @requires_auth
# #@admin_required
# def admin_events():
#     #if current_user.is_authenticated:
#         form = AddEventsForm() 
#         if request.method == 'GET':
#             return jsonify(events=[i.serialize() for i in  db.session.query(Events).order_by(Events.status.desc())])
        
#         elif request.method == 'POST'and form.validate_on_submit():
#             # Get file data and save to your uploads folder
#             current_dt = datetime.datetime.now()
            
#             image = form.photo.data
#             filename = secure_filename(image.filename)

#             title= form.title.data
#             start_date = form.start.data
#             start_time = form.starttime.data
            
#             end_date= form.end.data
#             end_time= form.endtime.data
#             description= form.description.data
#             venue= form.venue.data
#             website_url= request.form['url']
        
#             status="pending"
        
#             photo = filename
#             uid=current_user.get_id()
#             created_at = current_dt.strftime("%Y-%m-%d " + "%X")
#             event = Events(title,start_date,start_time,end_date,end_time,description,venue,photo,website_url,status,uid,created_at)
#             db.session.add(event)
#             db.session.commit()
#             image.save(os.path.join(app.config['UPLOAD_FOLDER'], filename))
            
#             return jsonify(title= title, start_date = start_date, start_time=start_time,end_date=end_date,end_time=end_time, description=description,
#             venue= venue,photo = filename, website_url= website_url, status=status, user_id=uid,created_at= created_at),201


# @app.route('/api/admin/events/<user_id>', methods=['GET'])
# @login_required
# @requires_auth
# @admin_required
# def admin_user_events(user_id):
#     user_id=user_id
#     if current_user.is_authenticated:
#         if request.method == 'GET':
#             return jsonify(event=[i.serialize() for i in  db.session.query(Events).filter(Events.userid==user_id)]),200
    

# #Admin Endpoint
# @app.route('/api/admin/events/<event_id>', methods=['GET','DELETE'])
# @login_required
# @requires_auth
# @admin_required
# def admin_event_detail(event_id):
#     event_id=event_id
#     if current_user.is_authenticated:
#         if request.method == 'GET':
#             return jsonify(event=[i.serialize() for i in  db.session.query(Events).filter(Events.id==event_id)]),200

#         elif request.method == 'DELETE':  
#             event = db.session.query(Events).get(event_id)
#             db.session.delete(event)
#             db.session.commit()         
#             return jsonify(message="Event Succesfully Deleted"),200


# #Admin Endpoint
# @app.route('/api/admin/events/<int:event_id>/status:<string:status>', methods=['PATCH'])
# @login_required
# @requires_auth
# @admin_required
# def updateEventStatus(event_id, status):
#     event = db.session.query(Events).get(event_id)
#     if request.method == 'PATCH':
#         if (event != null and status != ''):
#             event.status = status
#             db.session.commit()
#             return jsonify(message = "Status Successfully Updated"),200
#         return jsonify(message = "Event by id " + event_id + "not found"),404








# @app.route('/api/events/<event_id>', methods=['GET','POST','DELETE'])
# @login_required
# @requires_auth
# @regular_required
# def event_detail(event_id):
#     event_id=event_id
#     if current_user.is_authenticated:
#         if request.method == 'GET':
            
#             return jsonify(event=[i.serialize() for i in  db.session.query(Events).filter(Events.id==event_id)]),200
    
#         elif request.method == 'POST':
#             event = db.session.query(Events).get(event_id)
            
#             form = UpdateEventsForm()

#             # Validate file upload on submit
#             if form.validate_on_submit():
#                 # Get file data and save to your uploads folder
                
#                 image = form.photo.data
#                 filename = secure_filename(image.filename)

#                 event.title= form.title.data
#                 event.start_date = form.start.data
#                 event.start_time = form.starttime.data
                
#                 event.end_date= form.end.data
#                 event.end_time= form.endtime.data
#                 event.description= form.description.data
#                 event.venue= form.venue.data
#                 event.website_url= request.form['url']
            
#                 status=event.status
            
#                 event.photo = filename
#                 uid=current_user.get_id()
#                 created_at = event.created_at
#                 db.session.commit()
#                 image.save(os.path.join(app.config['UPLOAD_FOLDER'], filename))
                
#                 return jsonify(title= form.title.data, start_date = form.start.data, start_time=form.starttime.data,end_date=form.end.data,end_time=form.endtime.data, description=form.description.data,
#                 venue= form.venue.data,photo = filename, website_url=  request.form['url'], status=status, user_id=uid,created_at= created_at),200

#         elif request.method == 'DELETE':  
#                 event = db.session.query(Events).get(event_id)
#                 db.session.delete(event)
#                 db.session.commit()         
#                 return jsonify(message="Event Succesfully Deleted"),200


# @app.route('/api/search', methods=['GET'])
# @login_required
# @requires_auth
# def search():
#     if current_user.is_authenticated:
#         args = request.args
#         date=args.get("date")
#         title=args.get("title")

#         if (title=="" or date==""):
#             return jsonify(event=[i.serialize() for i in  db.session.query(Events).filter(or_(Events.start_date==date,Events.title==title))]),200
#         return jsonify(event=[i.serialize() for i in  db.session.query(Events).filter(Events.start_date==date,Events.title==title)]),200


# ###
# # The functions below should be applicable to all Flask apps.
# ###

# # Display Flask WTF errors as Flash messages
# def flash_errors(form):
#     for field, errors in form.errors.items():
#         for error in errors:
#             flash(u"Error in the %s field - %s" % (
#                 getattr(form, field).label.text,
#                 error
#             ), 'danger')

# @app.route('/<file_name>.txt')
# def send_text_file(file_name):
#     """Send your static text file."""
#     file_dot_text = file_name + '.txt'
#     return app.send_static_file(file_dot_text)


# @app.after_request
# def add_header(response):
#     """
#     Add headers to both force latest IE rendering engine or Chrome Frame,
#     and also tell the browser not to cache the rendered page. If we wanted
#     to we could change max-age to 600 seconds which would be 10 minutes.
#     """
#     response.headers['X-UA-Compatible'] = 'IE=Edge,chrome=1'
#     response.headers['Cache-Control'] = 'public, max-age=0'
#     return response


# @app.errorhandler(404)
# def page_not_found(error):
#     """Custom 404 page."""
#     return render_template('404.html'), 404


# if __name__ == '__main__':
#     app.run(debug=True,host="0.0.0.0",port="8080")

from flask import Flask, render_template, redirect, session
from flask_socketio import SocketIO, emit
from replit import db
import google.oauth2.credentials
import google_auth_oauthlib.flow
from flask_session import Session
import os, flask, requests, json

app = Flask(__name__)
app.config['SECRET_KEY'] = 'ehhehahhehadheahdahjhjdfsk'
app.config["SESSION_PERMANENT"] = False
app.config["SESSION_TYPE"] = "filesystem"
Session(app)

socketio = SocketIO(app)

CLIENT_CONFIG = {'web': {
    'client_id': "484507443872-p7n3q5pve014usv002khvdogffon6svq.apps.googleusercontent.com",
    'project_id': "vocal-raceway-337813",
    'auth_uri': 'https://accounts.google.com/o/oauth2/auth',
    'token_uri': 'https://www.googleapis.com/oauth2/v4/token',
    'auth_provider_x509_cert_url': 'https://www.googleapis.com/oauth2/v1/certs',
    'client_secret': os.environ["CLIENT_SECRET"],
    'redirect_uris': ["https://counter.coolcodersj.repl.co/google"],
}}

@app.route("/")
def index():
    #return "we're sorry for the inconvenience, the website is getting updated right now. Please come back in a few hours."
    if not "googletoken" in session.keys():
        flow = google_auth_oauthlib.flow.Flow.from_client_config(
        CLIENT_CONFIG,
        scopes=['https://www.googleapis.com/auth/userinfo.email', 'https://www.googleapis.com/auth/userinfo.profile', "openid"])
        flow.redirect_uri = "https://counter.coolcodersj.repl.co/google"
        authorization_url, state = flow.authorization_url()
        session["state"] = state
        return redirect(authorization_url)

    token = session["googletoken"]["token"]
    r = requests.get(f"https://www.googleapis.com/userinfo/v2/me?oauth_token={token}", headers = {
        "Authorization": "Bearer " + token
    })
    print(r.json())
    try:
        email = r.json()["email"]
    except:
        flow = google_auth_oauthlib.flow.Flow.from_client_config(
        CLIENT_CONFIG,
        scopes=['https://www.googleapis.com/auth/userinfo.email', 'https://www.googleapis.com/auth/userinfo.profile', "openid"])
        flow.redirect_uri = "https://counter.coolcodersj.repl.co/google"
        authorization_url, state = flow.authorization_url()
        session["state"] = state
        return redirect(authorization_url)
        
    if email not in db.keys():
        db[email] = False
    
    return render_template("index.html", hasClicked=db[email])

@app.route("/google")
def google():
    state = session["state"]
    flow = google_auth_oauthlib.flow.Flow.from_client_config(
    CLIENT_CONFIG,
    scopes=['https://www.googleapis.com/auth/userinfo.email', 'https://www.googleapis.com/auth/userinfo.profile', "openid"],
    state=state)
    flow.redirect_uri = "https://counter.coolcodersj.repl.co/google"
    req_url = flask.request.url.replace("http://", "https://")
    flow.fetch_token(authorization_response=req_url)
    credentials = flow.credentials
    session['googletoken'] = {
    'token': credentials.token,
    'refresh_token': credentials.refresh_token,
    'token_uri': credentials.token_uri,
    'client_id': credentials.client_id,
    'client_secret': credentials.client_secret,
    'scopes': credentials.scopes}
    return redirect("/")
    

@socketio.on('value')
def handle_value(value):
    db['value'] = value
    token = session["googletoken"]["token"]
    r = requests.get(f"https://www.googleapis.com/userinfo/v2/me?oauth_token={token}", headers = {
        "Authorization": "Bearer " + token
    })
    email = r.json()["email"]
    db[email] = True
    socketio.emit("set", value, broadcast=True)

@socketio.on('request_for_value')
def handle_join():
    socketio.emit("set", db['value'], broadcast=True)


socketio.run(app, host="0.0.0.0", port=8080)
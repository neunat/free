from flask import Flask, render_template
from flask_socketio import SocketIO, emit
from replit import db

app = Flask(__name__)
app.config['SECRET_KEY'] = 'ehhehahhehadheahdahjhjdfsk'
socketio = SocketIO(app)

@app.route("/")
def index():
    return render_template("index.html")

@app.route("/test")
def test():
    socketio.emit("hi", "ok", broadcast=True)
    return

@socketio.on('value')
def handle_value(value):
    db['value'] = value
    socketio.emit("set", value, broadcast=True)

@socketio.on('request_for_value')
def handle_join():
    socketio.emit("set", db['value'], broadcast=True)


socketio.run(app, host="0.0.0.0", port=8080)
from flask import Flask
app = Flask(__name__)

import logging
log = logging.getLogger('werkzeug')
log.setLevel(logging.ERROR)

@app.route("/")
def home():
  return open("index.html", "r").read()

print("Server is online")
app.run("0.0.0.0")
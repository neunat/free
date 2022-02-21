from flask import render_template, redirect, Response, request, abort

import flask, secrets, os, time, sys

from flask_talisman import Talisman

app = flask.Flask(__name__, template_folder='', static_folder='/assets/')

CUSTOM_CSP_POLICY = {
    # Fonts from fonts.google.com
    'font-src': '\'self\' themes.googleusercontent.com *.gstatic.com',

    # <iframe> based embedding.
    'frame-src': '\'self\'',

    # Assorted Google-hosted Libraries/APIs.
    'script-src': '\'self\'',

    # Used by generated code from http://www.google.com/fonts
    'style-src': '\'self\' ajax.googleapis.com fonts.googleapis.com '
    '*.gstatic.com',
    'object-src': '\'none\'',
    'default-src': '\'self\' *.gstatic.com',
    'img-src': '*',
    'media-src': '*'
}

talisman = Talisman(
  app,
  force_https_permanent=True,
  frame_options="ALLOW-FROM",
  frame_options_allow_from="https://replit.com",
  content_security_policy=CUSTOM_CSP_POLICY
)

#content_security_policy_report_uri

import flask_error, flask_assets

@app.route("/")
def index():
    return render_template("index.html")

@app.route("/api.html", methods=["POST"])
def api():
  try:
    code = request.form['code']

    username = None

    passw0rd_db = {
      "princess": "Lauren",
      "admin15": "Felix",
      "junior": "kyle",
      "gas gas": "Harry"
    }

    for item in passw0rd_db:
      if passw0rd_db.key() == code:
        username = passw0rd_db[item]
        break
      if username == None:
        return "incorrect"
      else:
        global secret_code
        secret_code = secrets.token_hex(24)
        return "uhhhh i didn't code this part yet"
  except:
    return abort(500)

@app.route("/chat.html", methods=["POST"])
def chat():
    print(request.form['secret_code'])
    if request.form['secret_code'] == secret_code:
        return f"Username: {request.form['username']}, Code: {request.form['secret_code']}"
    else:
        return abort(401)

def main():
  os.system("clear")
  app.run(host='0.0.0.0', port=8080)

if __name__ == '__main__':
  main()
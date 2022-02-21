from __main__ import app

from flask import redirect, send_from_directory

@app.route('/assets/css/<path:path>')
def send_css(path):
    return send_from_directory('assets/css', path)

@app.route('/assets/js/<path:path>')
def send_js(path):
    return send_from_directory('assets/js', path)

@app.route('/assets/favicon.ico')
def favicon():
  return send_from_directory('assets', 'favicon.ico')
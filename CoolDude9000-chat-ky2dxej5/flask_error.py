from __main__ import app

from flask import render_template

@app.errorhandler(404)
def page_not_found(e):
  return "page not found"

@app.errorhandler(403)
def access_denied(e):
  return "Access denied"

@app.errorhandler(405)
def method_denied(e):
  return "Method denied"

@app.errorhandler(500)
def internal_server_error(e):
  return "Internal server error"
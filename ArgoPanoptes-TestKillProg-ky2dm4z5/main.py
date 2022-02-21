from flask import Flask
from waitress import serve
import os


app = Flask('')
print('started')

@app.route('/')
def home():
    return 'test'

@app.route('/e')
def error_exp():
    raise Exception

@app.errorhandler(500)
def _500(e):
    print('killing the app')
    os.system('kill 1')

serve(app, host='0.0.0.0', port='8080', url_scheme='https')
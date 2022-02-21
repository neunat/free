from flask import Flask, render_template, request

app = Flask('app')

@app.route('/')
def home():
  return render_template('home.html')

@app.route('/', methods=['GET','POST'])
def selector():
  if request.method == 'POST':
    print(request.form.get('selector'))
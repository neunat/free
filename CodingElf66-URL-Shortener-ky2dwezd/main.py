from flask import Flask, render_template, request, redirect
from replit import db
import random

def get_random_code():
  letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
  caps = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
  numbers = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0']

  all_chars = letters + caps + numbers

  code = ""

  for char in range(6):
    random_char = random.choice(all_chars)

    code += random_char

  while code in db.keys():
    code = ""

    for char in range(6):
      random_char = random.choice(all_chars)

      code += random_char

  return code

# db['code'] = url

app = Flask('app')

@app.route('/')
def home():
  return render_template('home.html')

@app.route('/', methods=['GET','POST'])
def shorten_url():
  if request.method == "POST":
    url = request.form.get('url')

    code = get_random_code()

    db[code] = url

    new_url = 'https://url-shortener.codingelf66.repl.co/' + code

    return render_template('home.html', done='true', url=new_url)

@app.route('/<code>')
def shortener_url(code):
  if code not in db.keys():
    return redirect('/404')

  else:
    url = db[code]

    return redirect(url)

@app.errorhandler(404)
def error(page):
  return render_template('404.html'), 404

app.run(host='0.0.0.0', port=8080)
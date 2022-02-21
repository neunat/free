from flask import Flask, redirect
from replit import db
import os

app = Flask('app')

@app.route('/')
def index():
  db['rickrolls'] += 1

  os.system('clear')

  print("You got rickrolled!\n")

  print(f"Overall, {db['rickrolls']} people have been rickrolled!")

  return redirect('https://www.youtube.com/watch?v=dQw4w9WgXcQ')

app.run(host='0.0.0.0', port=8080)
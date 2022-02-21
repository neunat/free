from flask import Flask, render_template

app = Flask('app')

@app.route('/')
def card():
  return render_template('card.html')

app.run(host='0.0.0.0', port=8080)
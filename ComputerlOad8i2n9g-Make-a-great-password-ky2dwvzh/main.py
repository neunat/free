from flask import Flask
app = Flask('app')

@app.route('/')
def hello():
  return 'Hello and welcome to password creator! Give me one second to create your password... ' + 'die'  + password + 'haha i pranked you now remember dont trust things you think are a scam'
@app.route('/')

def lol():
  return ("lol") + password + ("haha")
  print("die" + password + "lol")
  print("haha" + password)
app.run(host='0.0.0.0', port=8080)
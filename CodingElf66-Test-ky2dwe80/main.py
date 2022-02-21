from flask import Flask, render_template, request

app = Flask('app')

@app.route('/', methods=['GET','POST'])
def main():
  print('Hello' + str(request.form.get('hello')))

  return render_template('main.html')

app.run(host="0.0.0.0", port=8080)
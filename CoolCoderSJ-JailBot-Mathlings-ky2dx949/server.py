import flask, threading
app = flask.Flask(__name__)

@app.route('/')
def main():
	return 'hi'

def run():
	app.run('0.0.0.0')

def s():
  server = threading.Thread(target=run)
  server.start()
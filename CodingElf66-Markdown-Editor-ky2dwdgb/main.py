from flask import Flask, render_template, request
import markdown

app = Flask('app')

@app.route('/')
def index():
    return render_template('form.html')

@app.route('/submit', methods=['POST'])
def submit():
	md1 = request.form['text']
	md = markdown.markdown(md1, extensions=['fenced_code'])
	print(md)
	return render_template(
		"form.html", 
		final_md= md 
		)	

app.run(host='0.0.0.0', port=8080)


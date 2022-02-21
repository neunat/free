from flask import Flask, render_template, request, redirect, make_response
from replit import db
from datetime import date, datetime
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart
import markdown
import difflib
import smtplib
import random
import ssl
import os

def search(query,results):
  result = difflib.get_close_matches(query,results)

  if result == []:
    result = ['/']

  return result[0]

def generate_code(length):
  letters = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
  caps = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z']
  numbers = ['1','2','3','4','5','6','7','8','9','0']

  total = letters + caps + numbers

  code = ""

  for i in range(length):
    char = random.choice(total)

    code += char

  return code

def send_mail(username,email):  
  context = ssl.create_default_context()

  password = os.getenv("MAIL_PASSWORD")

  code = db[username]['code']

  html = f"""
  <h2>Hello, {username}!</h2>
  <p>You have recently signed up for an account on <a href="webviber.codingelf66.repl.co">WebViber</a>.</p>
  <p>Click <a href='https://webviber.codingelf66.repl.co/verify/@{username}/{code}'>here</a> to verify your account</p>
  <strong>Important: If you didn't create this account, please do not click on the verification link.</strong>
  """

  message = MIMEMultipart("alternative")

  message["Subject"] = "WebViber Verification Email"

  part = MIMEText(html, "html")
  message.attach(part)

  from_email = "ultimatecoder40@gmail.com"

  gmail_server = smtplib.SMTP('smtp.gmail.com', 587)

  gmail_server.starttls(context=context)
  gmail_server.login(from_email, password)

  message["From"] = from_email
  message["To"] = email

  gmail_server.sendmail(from_email, email, message.as_string())

app = Flask('app')

@app.route('/')
def home():
  logged_in = request.cookies.get("logged_in")
  username = request.cookies.get("username")

  if logged_in == "true":
    if username != None and username in db.keys():
      own_pfp = db[username]['pfp']
      verified = db[username]['verified']

      now = datetime.now()

      last_seen = now.strftime("%m/%d/%Y %H:%M")

      db[username]['last_seen'] = last_seen

      return render_template('trending.html', own_pfp=own_pfp, verified=verified)

    return render_template('home.html')

  return render_template('home.html')

@app.route('/', methods=['GET','POST'])
def searchpage():
  if request.method == "POST":
    query = request.form.get('query')

    results = ['help','signup','login']

    for user in db.keys():
      user_profile = f'@{user}'

      results.append(user_profile)

    result = search(query,results)

    return redirect(f'/{result}')

@app.errorhandler(404)
def not_found(page):
  return redirect('/')

@app.route('/signup')
def signup():
  logged_in = request.cookies.get("logged_in")
  username = request.cookies.get("username")

  if logged_in == "true":
    if username != None and username in db.keys():
      return redirect('/')

    return render_template('signup.html')

  return render_template('signup.html')

@app.route('/signup', methods=['GET','POST'])
def create_account():
  if request.method == "POST":
    username = request.form.get('username')
    password = request.form.get('password')

    email = request.form.get('email')

    check = request.form.get('checkbox')

    letters = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
    caps = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z']
    numbers = ['1','2','3','4','5','6','7','8','9','0']
    special = ['_']

    chars = letters + caps + numbers + special

    for char in username:
      if char not in chars:
        return render_template('signup.html', problem="username", prompt="Username can only contain alphanumeric characters and underscore")

    if username in db:
      return render_template('signup.html', problem="username", prompt="Username already exists, please pick a new one")

    elif len(username) < 3 or len(username) > 12:
      return render_template('signup.html', problem="username", prompt="Your username needs to be between 3-12 characters")

    elif check == None:
      return render_template('signup.html', problem="checkbox", prompt="Make sure you agree with our policy about how we use cookies to store your data")

    today = date.today()
    joined = today.strftime('%B %d, %Y')

    code = generate_code(6)

    db[username] = {'password':password, 'email':email, 'joined':joined, 'verified':'false', 'code':code, 'roles':['user'], 'bio':'', 'pfp':'static/img/user.png', 'last_seen':'', 'followers':[], 'friends':[], 'posts':[], 'receive_emails':'true'}

    # send_mail(username,email)

    resp = make_response(render_template('readcookie.html'))
    resp.set_cookie('logged_in','true')
    resp.set_cookie('username',username)

    return resp

@app.route('/verify/@<user>/<code>')
def verify(user,code):
  if user in db:
    if db[user]['code'] == code:
      db[user]['verified'] = 'true'

  return redirect('/')

@app.route('/login')
def login():
  logged_in = request.cookies.get("logged_in")
  username = request.cookies.get("username")

  if logged_in == "true":
    if username != None and username in db.keys():
      return redirect('/')

    return render_template('login.html')

  return render_template('login.html')

@app.route('/login', methods=['GET','POST'])
def login_submit():
  if request.method == "POST":
    username = request.form.get('username')
    password = request.form.get('password')

    if username in db.keys():
      if db[username]['password'] == password:
        resp = make_response(render_template('readcookie.html'))
        resp.set_cookie('logged_in','true')
        resp.set_cookie('username',username)

        return resp

      return render_template('login.html', problem="password", prompt="Invalid password")

    return render_template('login.html', problem="username", prompt="Username doesn't exist")

@app.route('/logout')
def logout():
  resp = make_response(render_template('readcookie.html'))
  resp.set_cookie('logged_in','false')

  return resp

@app.route('/create')
def create():
  logged_in = request.cookies.get('logged_in')
  username = request.cookies.get('username')

  verified = db[username]['verified']

  if logged_in == 'false' or verified == 'false':
    return redirect('/')

  own_pfp = db[username]['pfp']

  return render_template('create.html', own_pfp=own_pfp)

@app.route('/create', methods=['GET','POST'])
def post():
  if request.method == "POST":
    username = request.cookies.get('username')

    title = request.form.get('title')
    description = request.form.get('description')

    likes = 0

    code = generate_code(8)

    allow_comments = request.form.get('switch') # None for no, on for yes.

    if allow_comments == None:
      allow_comments = 'off'

    description = markdown.markdown(description)

    post = [title,description,allow_comments,likes,code]

    db[username]['posts'].append(post)

    return redirect('/')

@app.route('/account')
def account():
  logged_in = request.cookies.get('logged_in')
  username = request.cookies.get('username')

  if logged_in == 'false':
    return redirect('/')

  own_pfp = db[username]['pfp']

  return render_template('account.html', own_pfp=own_pfp)
  
  return redirect('/')

@app.route('/account', methods=['GET','POST'])
def update_profile():
  if request.method == "POST":
    username = request.cookies.get('username')

    bio = request.form.get('bio')
    pfp = request.form.get('pfp')

    receive_email = request.form.get('switch')

    old_password = request.form.get('old_password')
    new_password = request.form.get('new_password')

    password = db[username]['password']

    if bio != "":
      db[username]['bio'] = bio
    
    if pfp != "":
      db[username]['pfp'] = pfp
    
    if receive_email == 'on':
      db[username]['receive_emails'] = 'true'

    if receive_email == None:
      db[username]['receive_emails'] = 'false'

    if old_password == password:
      if new_password != "":
        db[username]['password'] = new_password

    else:
      return render_template('account.html', problem='password', prompt="Invalid password")

    return redirect(f'/@{username}')

@app.route('/profile')
def redirect_profile():
  username = request.cookies.get('username')

  return redirect(f'/@{username}')

@app.route('/@<user>')
def profile(user):
  if user in db:
    logged_in = request.cookies.get('logged_in')
    username = request.cookies.get('username')

    own_pfp = db[username]['pfp']

    bio = db[user]['bio']
    pfp = db[user]['pfp']
    roles = db[user]['roles']
    last_seen = db[user]['last_seen']

    verified = db[user]['verified']

    followers = db[user]['followers']
    friends = db[user]['friends']

    followers_length = len(followers)
    friends_length = len(friends)

    if username in db[user]['followers']:
      is_following = 'true'

    else:
      is_following = 'false'

    if user in db[username]['friends']:
      is_friends = 'true'

    else:
      is_friends = 'false'

    return render_template('profile.html', logged_in=logged_in, user=user, bio=bio, pfp=pfp, own_pfp=own_pfp, roles=roles, last_seen=last_seen, verified=verified, followers_length=followers_length, friends_length=friends_length, is_following=is_following, is_friends=is_friends)

  return redirect('/')

@app.route('/follow/@<user>')
def follow(user):
  logged_in = request.cookies.get('logged_in')
  username = request.cookies.get('username')

  if logged_in == 'true':
    if user in db.keys() and user != username:
      if db[username]['verified'] == 'true':
        db[user]['followers'].append(username)

      else:
        return redirect('/error')
    
    else:
      return redirect('/error')

  return redirect(f'/@{user}')

@app.route('/unfollow/@<user>')
def unfollow(user):
  logged_in = request.cookies.get('logged_in')
  username = request.cookies.get('username')

  if logged_in == 'true':
    if user in db.keys() and user != username:
      if db[username]['verified'] == 'true':
        db[user]['followers'].remove(username)

      else:
        return redirect('/error')

    else:
      return redirect('/error')

  return redirect(f'/@{user}')

@app.route('/friend/@<user>')
def friend(user):
  logged_in = request.cookies.get('logged_in')
  username = request.cookies.get('username')

  if logged_in == 'true':
    if user in db.keys() and user != username:
      db[user]['friends'].append(username)
      db[username]['friends'].append(user)

    else:
      return redirect('/error')

  return redirect(f'/@{user}')

@app.route('/unfriend/@<user>')
def unfriend(user):
  logged_in = request.cookies.get('logged_in')
  username = request.cookies.get('username')

  if logged_in == 'true':
    if user in db.keys() and user != username:
      db[user]['friends'].remove(username)
      db[username]['friends'].remove(user)

    else:
      return redirect('/error')

  return redirect(f'/@{user}')

@app.route('/markdown')
def markdown_guide():
  logged_in = request.cookies.get('logged_in')
  username = request.cookies.get('username')

  if logged_in == 'false':
    return redirect('/')

  own_pfp = db[username]['pfp']

  return render_template('markdown.html', own_pfp=own_pfp)

@app.route('/feedback')
def feedback():
  logged_in = request.cookies.get('logged_in')
  username = request.cookies.get('username')

  if logged_in == 'false':
    return redirect('/')

  own_pfp = db[username]['pfp']

  return render_template('feedback.html', own_pfp=own_pfp)

@app.route('/error')
def error():
  logged_in = request.cookies.get('logged_in')
  username = request.cookies.get('username')
  
  if logged_in == 'false':
    return redirect('/')

  own_pfp = db[username]['pfp']
  
  return render_template('error.html', own_pfp=own_pfp)

app.run(host='0.0.0.0', port=8080)
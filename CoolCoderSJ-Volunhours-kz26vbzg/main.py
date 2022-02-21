from flask import Flask, render_template, session, redirect, request, send_file, abort
from flask_session import Session
import datetime, os
from supabase import create_client
from replit import db

app = Flask(__name__)
app.secret_key = "qwertyuikmbgfdcvbjkiuygtfdsfghjiuytgfdfgtrfd"
app.config["SESSION_PERMANENT"] = False
app.config["SESSION_TYPE"] = "filesystem"
Session(app)

url = os.environ.get("SUPABASE_URL")
key = os.environ.get("SUPABASE_KEY")
supabase = create_client(url, key)

def strtodt(string):
    month, day, year = string.split(" ")[0].split("/")
    hour, minute = string.split(" ")[1].split(":")
    amvspm = string.split(" ")[2]

    month = int(month)
    day = int(day)
    year = int(year)
    hour = int(hour)
    minute = int(minute)

    if amvspm == "PM":
        hour += 12

    hour -= 1
    
    return datetime.datetime(year, month, day, hour, minute)

def strtodate(string):
    month, day, year = string.split(" ")[0].split("/")
    month = int(month)
    day = int(day)
    year = int(year)
    
    return datetime.date(year, month, day)
    
    
@app.route("/")
def index():
    if not "user" in session.keys():
        return redirect("/signup")

    hours = db[session['user']]

    today = 0
    week = 0
    
    for hour in hours:
        dt = strtodate(hour['start'])
        if dt == datetime.date.today():
            today += 1

        if dt.isocalendar()[1] == datetime.date.today().isocalendar()[1]:
            week += 1

    org = 0

    for user in db.keys():
        hours = db[user]
        for hour in hours:
            dt = strtodate(hour['start'])
            if dt == datetime.date.today():
                org += 1

    
    return render_template("index.html", today=today, week=week, org=org)

@app.route("/login", methods=['GET', 'POST'])
def login():
    if request.method == "GET":
        error = request.args.get("error")
        return render_template("login.html", error=error)
    else:
        try:
            user = supabase.auth.sign_in(email=request.form['email'], password=request.form['password'])
        except:
            return redirect("https://hours.mathlings.org/login?error=The%20username%20or%20password%20is%20incorrect,%20or%20you%20may%20not%20have%20verified%20your%20email")
        session['user'] = request.form['email'].split("@")[0]
        if session['user'] not in db.keys():
            db[session['user']] = []    
        return redirect("https://hours.mathlings.org/")


@app.route("/signup", methods=['GET', 'POST'])
def signup():
    if request.method == "GET":
        error = request.args.get("error")
        return render_template("signup.html", error=error)
    else:
        try:
            user = supabase.auth.sign_up(email=request.form['email'], password=request.form['password'])
        except:
            return redirect("https://hours.mathlings.org/signup?error=User%20already%20exists")
        return render_template("email.html")

        
@app.route("/log", methods=['GET', 'POST'])
def log():
    if request.method == "GET":
        if not "user" in session.keys(): return redirect("https://hours.mathlings.org/signup")
        return render_template("log.html")
    else:
        hours = db[session['user']]
        hours.append({
            "start": request.form['start'],
            "end": request.form['end'],
            "activity": request.form['activity']
        })
        db[session['user']] = hours
        return redirect("https://hours.mathlings.org/hours")

@app.route("/edit/<id>", methods=['GET', 'POST'])
def edit(id):
    if request.method == "GET":
        if not "user" in session.keys(): return redirect("https://hours.mathlings.org/signup")

        card = db[session['user']][int(id)]
        return render_template("edit.html", card=card, id=id)
    else:
        id = int(id)
        hours = db[session['user']]
        hours[id] = {
            "start": request.form['start'],
            "end": request.form['end'],
            "activity": request.form['activity']
        }
        db[session['user']] = hours
        return redirect("https://hours.mathlings.org/hours")
    
@app.route("/delete/<id>", methods=['POST'])
def delete(id):
    if request.method == "GET":
        if not "user" in session.keys(): return redirect("https://hours.mathlings.org/signup")
        return redirect("https://hours.mathlings.org/hours")
    else:
        id = int(id)
        hours = db[session['user']]
        hours.pop(id)
        db[session['user']] = hours
        return redirect("https://hours.mathlings.org/hours")


@app.route("/hours", methods = ['GET','POST'])
def hours():
    if request.method == 'GET':
        if not "user" in session.keys(): return redirect("https://hours.mathlings.org/signup")
    
        hours = db[session['user']]
        res = []
        counter = 0
        for hour in hours:
            diff = strtodt(hour['end']) - strtodt(hour['start'])
            try:    day = diff.days
            except: day = 0
            minutes = diff.seconds/60
            hours = 0
            if minutes > 60:
                hours = minutes // 60
                minutes -= hours * 60
    
            minutes = int(minutes)
            hours = int(hours)
            day = int(day)

            if minutes == 60: 
                minutes = 0
                hours += 1

            if day < 10    : day = "0"+str(day)
            else           : day = str(day)
            if hours < 10  : hours = "0"+str(hours)
            else           : hours = str(hours)
            if minutes < 10: minutes = "0"+str(minutes)
            else           : minutes = str(minutes)
        
            res.append({
                "activity": hour['activity'],
                "time":     hour['start'] + " - " + f"{day}d:{hours}h:{minutes}m",
                "id":       counter
            })
    
            counter += 1
            
        return render_template("hours.html", res=res)
    else:
        if session['user'].lower() not in ['helenmao2006', 'sjain3', 'coolcodersj', 'maodavid1012'] : abort(403)
        
        user = request.form['user']

        hours = db[user]
        res = []
        counter = 0
        for hour in hours:
            diff = strtodt(hour['end']) - strtodt(hour['start'])
            try:    day = diff.days
            except: day = 0
            minutes = diff.seconds/60
            hours = 0
            if minutes > 60:
                hours = minutes // 60
                minutes -= hours * 60
    
            minutes = int(minutes)
            hours = int(hours)
            day = int(day)

            if minutes == 60: 
                minutes = 0
                hours+= 1

            if day < 10   : day = "0"+str(day)
            else           : day = str(day)
            if hours < 10  : hours = "0"+str(hours)
            else           : hours = str(hours)
            if minutes < 10: minutes = "0"+str(minutes)
            else           : minutes = str(minutes)
    
            res.append({
                "activity": hour['activity'],
                "time":     hour['start'] + " - " + f"{day}d:{hours}h:{minutes}m",
                "id":       counter
            })
    
            counter += 1
            
        return render_template("hours.html", res=res)

@app.route("/admin")
def admin():
    if not "user" in session.keys(): return redirect("https://hours.mathlings.org/signup")
    if session['user'].lower() not in ['helenmao2006', 'sjain3', 'coolcodersj', 'maodavid1012']: abort(403)
    users = []
    for key in db.keys():
        users.append(key)

    return render_template("admin.html", users=users)

@app.route("/summary", methods=['GET', 'POST'])
def summary():
    if request.method == "GET":
        if not "user" in session.keys(): return redirect("https://hours.mathlings.org/signup")
        hoursdb = db[session['user']]
    
    else:
        if session['user'].lower() not in ['helenmao2006', 'sjain3', 'coolcodersj', 'maodavid1012'] : abort(403)
        hoursdb = db[request.form['user']]
        
    days = 0
    hours = 0
    minutes = 0

    today = 0
    week = 0

    differences = []
    
    for hour in hoursdb:
        dt = strtodate(hour['start'])
        if dt == datetime.date.today():
            today += 1

        if dt.isocalendar()[1] == datetime.date.today().isocalendar()[1]:
            week += 1

        dt = strtodt(hour['start'])
        dt2 = strtodt(hour['end'])
        differences.append(dt2-dt)

    org = 0

    for user in db.keys():
        hoursdb = db[user]
        for hour in hoursdb:
            dt = strtodate(hour['start'])
            if dt == datetime.date.today():
                org += 1

    for diff in differences:
        try:    days += diff.days
        except: pass
        mins = diff.seconds/60
        horas = 0
        if mins > 60:
            horas = mins // 60
            mins -= horas * 60
        
        hours += horas
        minutes += mins

    minutes = int(minutes)
    hours = int(hours)

    if minutes > 60:
        hours = minutes // 60
        minutes -= hours * 60
    
    if days < 10   : days = "0"+str(days)
    else           : days = str(days)
    if hours < 10  : hours = "0"+str(hours)
    else           : hours = str(hours)
    if minutes < 10: minutes = "0"+str(minutes)
    else           : minutes = str(minutes)
        
    strtime = f"{days}d:{hours}h:{minutes}m"
    return render_template("summary.html", today=today, week=week, org=org,time=strtime)

@app.route("/download/logs")
def downlogs():
    if not "user" in session.keys(): return redirect("https://hours.mathlings.org/signup")

    user = session['user']
    
    try: os.remove(f"{user}logs.csv")
    except: pass

    file = open(f"{user}logs.csv", "a")
    print("Email,Activity,Time Started (EST),Time Ended (EST),Time Spent", file=file)

    hours = db[user]
    for hour in hours:
        diff = strtodt(hour['end']) - strtodt(hour['start'])
        try:    day = diff.days
        except: day = 0
        minutes = diff.seconds/60
        hours = 0
        if minutes > 60:
            hours = minutes // 60
            minutes -= hours * 60

        minutes = int(minutes)
        hours = int(hours)
        day = int(day)

        if minutes > 60:
            hours = minutes // 60
            minutes -= hours * 60

        if day < 10   : day = "0"+str(day)
        else           : day = str(day)
        if hours < 10  : hours = "0"+str(hours)
        else           : hours = str(hours)
        if minutes < 10: minutes = "0"+str(minutes)
        else           : minutes = str(minutes)

        print(f"{user},{hour['activity']},{hour['start']},{hour['end']},{day}d:{hours}h:{minutes}m", file=file)
    file.close()
    return send_file(f"{user}logs.csv", mimetype="text/csv", as_attachment=True)

@app.route("/download/summaries")
def downsummary():
    if not "user" in session.keys(): return redirect("https://hours.mathlings.org/signup")

    user = session['user']
    
    try: os.remove(f"{user}summaries.csv")
    except: pass

    file = open(f"{user}summaries.csv", "a")
    
    print("Email,Total Time Logged", file=file)
    differences = []
    days = 0
    hours = 0
    minutes = 0
    hoursdb = db[user]
    for hour in hoursdb:
        dt = strtodt(hour['start'])
        dt2 = strtodt(hour['end'])
        differences.append(dt2-dt)
    
    
    for diff in differences:
        try:    days += diff.days
        except: pass
        mins = diff.seconds/60
        horas = 0
        if mins > 60:
            horas = mins // 60
            mins -= horas * 60
    
        hours += horas
        minutes += mins

    minutes = int(minutes)
    hours = int(hours)

    if minutes > 60:
        hours = minutes // 60
        minutes -= hours * 60

    if days < 10   : days = "0"+str(days)
    else           : days = str(days)
    if hours < 10  : hours = "0"+str(hours)
    else           : hours = str(hours)
    if minutes < 10: minutes = "0"+str(minutes)
    else           : minutes = str(minutes)

    print(f"{user},{days}d:{hours}h:{minutes}m", file=file)

    file.close()

    return send_file(f"{user}summaries.csv", mimetype="text/csv", as_attachment=True)

    
@app.route("/download/logs/all")
def downlogsall():
    if not "user" in session.keys(): return redirect("https://hours.mathlings.org/signup")
    if session['user'].lower() not in ['helenmao2006', 'sjain3', 'coolcodersj', 'maodavid1012']: abort(403)

    try: os.remove("logs.csv")
    except: pass

    file = open("logs.csv", "a")
    print("Email,Activity,Time Started (EST),Time Ended (EST),Time Spent", file=file)

    for user in db.keys():
        hours = db[user]
        for hour in hours:
            diff = strtodt(hour['end']) - strtodt(hour['start'])
            try:    day = diff.days
            except: day = 0
            minutes = diff.seconds/60
            hours = 0
            if minutes > 60:
                hours = minutes // 60
                minutes -= hours * 60
    
            minutes = int(minutes)
            hours = int(hours)
            day = int(day)

            if minutes > 60:
                hours = minutes // 60
                minutes -= hours * 60

            if day < 10   : day = "0"+str(day)
            else           : day = str(day)
            if hours < 10  : hours = "0"+str(hours)
            else           : hours = str(hours)
            if minutes < 10: minutes = "0"+str(minutes)
            else           : minutes = str(minutes)

            print(f"{user},{hour['activity']},{hour['start']},{hour['end']},{day}d:{hours}h:{minutes}m", file=file)
    file.close()
    return send_file("logs.csv", mimetype="text/csv", as_attachment=True)


@app.route("/download/summaries/all")
def downsummaryall():
    if not "user" in session.keys(): return redirect("https://hours.mathlings.org/signup")
    if session['user'].lower() not in ['helenmao2006', 'sjain3', 'coolcodersj', 'maodavid1012']: abort(403)

    try: os.remove("summaries.csv")
    except: pass

    file = open("summaries.csv", "a")
    
    print("Email,Total Time Logged", file=file)
    for user in db.keys():
        differences = []
        days = 0
        hours = 0
        minutes = 0
        hoursdb = db[user]
        for hour in hoursdb:
            dt = strtodt(hour['start'])
            dt2 = strtodt(hour['end'])
            differences.append(dt2-dt)
        
        
        for diff in differences:
            try:    days += diff.days
            except: pass
            mins = diff.seconds/60
            horas = 0
            if mins > 60:
                horas = mins // 60
                mins -= horas * 60
        
            hours += horas
            minutes += mins

        minutes = int(minutes)
        hours = int(hours)

        if minutes > 60:
            hours = minutes // 60
            minutes -= hours * 60
    
        if days < 10   : days = "0"+str(days)
        else           : days = str(days)
        if hours < 10  : hours = "0"+str(hours)
        else           : hours = str(hours)
        if minutes < 10: minutes = "0"+str(minutes)
        else           : minutes = str(minutes)

        print(f"{user},{days}d:{hours}h:{minutes}m", file=file)

    file.close()

    return send_file("summaries.csv", mimetype="text/csv", as_attachment=True)
        
    
app.run(host="0.0.0.0", port=8080)
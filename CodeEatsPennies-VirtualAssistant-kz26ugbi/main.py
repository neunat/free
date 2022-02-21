import random
import datetime

name = "Fake"


def hello():
  now = datetime.datetime.now()
  h = now.hour
  
  
  if h<12:
    greetings = ["Good Morning"]

  if h<14:
    greetings = ["Good Afternoon"]
  
  if h<24:
    greetings = ["Good Evening"]

  print(random.choice(greetings))

def whatTimeIsIt():
  now = datetime.datetime.now()
  h = (now.hour)
  m = (now.minute)

  if h <13:
    
    print("It is ", h, m, "in the morning")
  
  if h >13:
    h = h-12
    print("It is ", h, m, "in the afternoon")

def whatsTheDateToday():
  now = datetime.datetime.now()
  b = (str(now.day))
  bb = b[-1]
  if (bb == "1"):
    attatch = "st"
  if (bb == "2"):
    attatch = "nd"
  if (bb == "3"):
    attatch = "rd"
  else:
    attatch = "th"
  
  if (now.month == 1):
    month = "January"
  if (now.month == 2):
    month = "Febuary"
  if (now.month == 3):
    month = "March"
  if (now.month == 4):
    month = "April"
  if (now.month == 5):
    month = "May"
  if (now.month == 6):
    month = "June"
  if (now.month == 7):
    month = "July"  
  if (now.month == 8):
    month = "August"
  if (now.month == 9):
    month = "September"
  if (now.month == 10):
    month = "October"
  if (now.month == 11):
    month = "November"
  if (now.month == 12):
    month = "December"
  
  year = str(now.year)
  day = str(now.day)

  print("It is the "+day + attatch+ " of "+ month+", "+ year)

def calculate(fnum, operation, snum):
  if operation == "addition":
    answer = fnum+snum
    fnum = str(fnum)
    snum = str(snum)
    answer = str(answer)
    print(fnum+" plus "+snum+" equals "+answer)
  if operation == "multiplication":
    answer = fnum*snum
    fnum = str(fnum)
    snum = str(snum)
    answer = str(answer)
    print(fnum+" times "+snum+" equals "+answer)
  if operation == "subtraction":
    answer = fnum-snum
    fnum = str(fnum)
    snum = str(snum)
    answer = str(answer)
    print(fnum+" minus "+snum+" equals "+answer)
  if operation == "division":
    answer = fnum/snum
    fnum = str(fnum)
    snum = str(snum)
    answer = str(answer)
    print(fnum+" divided by "+snum+" equals "+answer)
    
def open(application):
  print("open app")

def weather(time):
  if time == "today":
    print("right now")
  if time == "tomorrow":
    print("tomorrow")

def isItUp(site):
  ping (site)
  #have it be able to tell a difference from home servers to websites

def runDiagnostics(level, system):
  level 5 = check if (all parts of) server are up

  level 4 = sign in with diagnostic test user and psycially use all parts of the system

  level 3 = shut down and restart system

  level 2 = restart server, ssh into and manually check all files exist and are reachable

  level 1 = restart server, ssh into and manually check all files exist and are reachable, log in with test user and test all parts of the system, check if the os or system is throwing any errors

def secureTheSystem(server):

  level none(not specified) = shut down system

  level 10 = check if any users have been added recently

  level 9 = monitor each system, any activity is reported immediately

  level 8 = eject all user currently signed in, shut down vpn

  level 7 = restart server, shut down vpn

  level 6 = delete all usernames and passwords except admin, shut down vpn

  level 5 = delete all usernames and passwords, shut down vpn

  level 4 = shut down server, shut down vpn

  level 3 = shut down system


  level 2 = delete all of the data in entire system, shut down vpn

  level 1 = delete all data in system, shutdown, (close ports and access to server)

  

  if any above commands fail (server rejects commands) immidiately alert user and attempt to shut down the entire system

def nukeIt(): 
  delete all data in every server

def cleanSlate():
  delete entire system

def shutdown(server):
  shutdown(server)
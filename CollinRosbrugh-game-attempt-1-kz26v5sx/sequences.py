import time
import random

def introSequence():
  introFinished = False
  print("You find yourself in a dark alleyway.")
  time.sleep(2)
  print("It's hard to make anything out.")
  from commands import inventory, check, search, north, south, east, west
  time.sleep(3)
  print('Maybe you can \033[93mlook around\033[00m to get your bearings?')
  
  lookReminder = 3
  toleranceForPlayersShit = 25

  while introFinished == False:
    lookReminder -= 1
    toleranceForPlayersShit -= 1

    introInput = input(">> ")
  
    if introInput.lower() == "look":
      time.sleep(0.2)
      introFinished = True
    elif toleranceForPlayersShit <= 0:
      sarcasticList = [
        "Seriously?",
        "Ha ha, very funny",
        "I tried",
        "Really?",
        "Why are you like this?",
        "Fr?",
        "Fuck you"]
      quit("\n"+sarcasticList[random.randint(0,6)])
    elif lookReminder <= 0:
      print('Try using \033[93m"look"\033[00m to get a better view of your surroundings.')
      lookReminder = random.randint(2,7)
    elif introInput.lower() == "":
      ellipsisList = [
        "..",
        "...",
        "...."
      ]
      print(ellipsisList[random.randint(0,2)])
    elif introInput.lower() == "help":
      print('Try using \033[93m"look"\033[00m to get a better view of your surroundings.')
      lookReminder = 6
    elif introInput.lower() in north:
      time.sleep(0.2)
      print("You're too disoriented to move.")
    elif introInput.lower() in south:
      time.sleep(0.2)
      print("You're too disoriented to move.")
    elif introInput.lower() in east:
      time.sleep(0.2)
      print("You're too disoriented to move.")
    elif introInput.lower() in west:
      time.sleep(0.2)
      print("You're too disoriented to move.")
    elif introInput.lower() in inventory:
      time.sleep(0.2)
      print("Nothing to look through.")
    elif introInput.lower() in check:
      time.sleep(0.2)
      print("You're too disoriented.")
    elif introInput.lower() in search:
      time.sleep(0.2)
      print("There's no secrets here.")
    elif introInput.lower() == "no":
      time.sleep(1)
      print("Ok smart guy")
      time.sleep(0.2)
      quit()
    else:
      time.sleep(0.3)
      print("...")

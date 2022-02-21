import time; import sys; import cursor

from locations import *
from commands import *
from map import *

offline = True
north=False;south=False;east=False;west=False

def Return(): sys.stdout.write("\033[F") #Cursor up one line 
def Clear(): sys.stdout.write("\033[K")  #Write out one line

def intro():
  cursor.hide()
  def loading():
    print("\033[91m Loading   \033[00m")
    Return(); time.sleep(0.5) #Red

    print("\033[93m Loading.  \033[00m")
    Return(); time.sleep(0.5) #Yellow

    print("\033[92m Loading.. \033[00m")
    Return(); time.sleep(0.5) #Green

    print("\033[96m Loading...\033[00m")
    Return(); time.sleep(0.5) #Cyan
  
  loading()#; loading(); loading()
  print("\033[93m Welcome to BetaRelms!\033[00m\n")

  time.sleep(1) #1

  print(" This is a work in progress, or a test, rather, of how much of 93 relms"); print(" I can replicate in python.\n") 

  time.sleep(1.5) #1.5
intro()

stupid = ["", "joe", "no u", "Noobmaster69"]
#add bad usernames here to change them to "BigShnitzel"

cursor.show()
username = input(" What would you like to be called?  ")

if len(username) > 32: #Checks if username is longer than 32
  print("\033[91m That username is too long!\033[00m\n")
  username = input(" What would you like to be called?  ")
  if len(username) > 32:
    print(" Invalid name entered too many times. Exiting...\n")
    exit()

cursor.hide()

if (username.lower() in stupid): #Checks if username is stupid
  username = "BigSchnitzel"
  prPurple("That's not a very good name!"); time.sleep(0.5)
  prPurple("Entering world...\n")
else:
  prPurple("Thank you! Entering world...\n"); time.sleep(0.5)

if offline == True: #Offline status-y type bar
  prRed("You are offline. Progress will not be saved.")
  time.sleep(0.5)

prGreen(str(username)+" enters the relm."); print()
playerX = 0; playerY = 0; player = True
location = townHall(); cursor.show() #"Starts you off right."

while player == True:
  playerInput = input(" ")
  
  northOptions = ["n", "north"]
  southOptions = ["s", "south"]
  eastOptions = ["e", "east"]
  westOptions = ["w", "west"]

  attack = ["a", "attack"]
  inventory = ["i", "inv", "inventory"]
  statistics = ["stats", "statistics"]
  training = ["t", "train", "get swole"]

  if (playerInput.lower() in northOptions):
   if north == True:
     playerY = playerY + 1
     Return(); Clear()
     prGreen("You walked NORTH.")
   else:
     Return(); Clear()
     prRed(username+" bumps into the wall to the NORTH!!!")
  
  elif (playerInput.lower() in southOptions):
    playerY = playerY - 1
    Return()
    prGreen("You walked SOUTH")
  
  elif (playerInput.lower() in eastOptions):
    playerX = playerX + 1
    Return()
    prGreen("You walked EAST")

  elif (playerInput.lower() in westOptions):
    playerX = playerX - 1
    Return()
    prGreen("You walk WEST")

  elif playerInput == "look":
    Return(); Clear()
    coordinates=str(playerX)+","+str(playerY)
    print("\033[93m Your position on the map is \033[00m("+str(coordinates)+")")
  
  elif playerInput == "help": Return(); Clear(); commandList()

  elif playerInput == "quit": 
    Return(); Clear()
    quitInput = input(" Are you sure you want to leave the relm? (y/n) ")
    if quitInput == "y":
      print(" Disconnecting...\n")
      time.sleep(0.5); exit()
    else: Return(); Clear()
  elif playerInput == "exit": 
    Return(); Clear()
    quitInput = input(" Are you sure you want to leave the relm? (y/n) ")
    if quitInput == "y":
      print(" Disconnecting...\n")
      time.sleep(0.5); exit()
    else: Return(); Clear()
  
  elif (playerInput.lower() in inventory):
    Return(); Clear()
    print(" Unimplemented Operation.")

  elif (playerInput.lower() in statistics):
    Return(); Clear()
    print(" Unimplemented Operation.")
  
  elif (playerInput.lower() in training):
    Return(); Clear()
    print(" Unimplemented Operation.")

  elif (playerInput.lower() in attack):
    Return(); Clear()
    prRed("You hit yourself for 827 damage!"); time.sleep(0.3)
    prRed("You have died!\n"); townHall()
    prPurple(username+" appeared out of nowhere!!!\n")
    time.sleep(0.3); playerX = 0; playerY = 0

  elif playerInput == "beans":
    Return(); Clear()
    planeTreeAlley()
    Return(); print(" Note: This effect is purley visual.\n")

  elif playerInput == "": Return(), Clear()

  else:
    Return(); Clear()
    print("\033[93m "+username+" says: "+"\033[00m"+str(playerInput))
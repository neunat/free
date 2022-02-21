from commands import *
def Global(): global north;global south;global east;global west

def townHall():
  print("Town Hall")
  prCyan("The Town Hall is the central meeting place for the relm.")
  prCyan("Four roads intersect here, and you notice shops to the north and east")
  prCyan("roads. The south road leads to the training room.")
  prGreen("Exits: North, South, East, West")
  prPurple("People: You\n"); Global()
  north=True;south=True;east=True;west=True  #directions?

def planeTreeAlley():
  print("Plane Tree Alley")
  prCyan("This place used to be infested with monkeys until the mayor decided to")
  prCyan("chase them away and make it safer.") 
  prCyan("You notice an unusual level of foot traffic leading south.")
  prGreen("Exits: South, East, West")
  prPurple("People: You\n"); Global()
  north=False;south=True;east=True;west=True

def trainingRoom():
  print("Training Room.\n Unfinished area. Please exit immediately")
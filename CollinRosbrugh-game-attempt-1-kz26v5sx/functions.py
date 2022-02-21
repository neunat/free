def roomUpdate(firstTimeEnteringRoom, playerCoords):
  from roomdata import roomName, roomDesc

  if firstTimeEnteringRoom == True:
    try:
      print(roomName[str(playerCoords)])
      print(roomDesc[str(playerCoords)])
      print(convertRoomExits(playerCoords, True))
    except:
      playerCoords = "(-2, 1)"
      try:
        print("Oh shit, the game thought it was possible for you to go that way. It wasn't. Uhhhhhhhhhhhhhhhhh I'll just take you back to the most stable room I have coded in at the moment.")
        print(roomName[str(playerCoords)])
        print(roomDesc[str(playerCoords)])
        print(convertRoomExits(playerCoords, True))
      except:
        print("\nSomething has gone horribly wrong\n")
        quit()

def convertRoomExits(playerCoords, text):
  from roomdata import roomExits
  try:
    roomExitData = roomExits[str(playerCoords)]
    #gives you string for room data like "0101"
    exitList = []
    exitList[:0] = roomExitData
    #breaks the string of 4 numbers into a list with 4 objects used for checking for room exits
  except:
    return "\033[92mNO ROOM EXIT DATA FOR PLAYER COORDINATES\033[00m"
  
  north = south = east = west = ""
  canMoveNorth = canMoveSouth = canMoveEast = canMoveWest = False

  if exitList[0] == "1":
    north = "NORTH, "
    canMoveNorth = True
  if exitList[1] == "1":
    south = "SOUTH, "
    canMoveSouth = True
  if exitList[2] == "1":
    east = "EAST, "
    canMoveEast = True
  if exitList[3] == "1":
    west = "WEST"
    canMoveWest = True
  
  canMove = {1:canMoveNorth, 2:canMoveSouth, 3:canMoveEast, 4:canMoveWest}

  if text == True:
    return "\033[92mExits: "+north+south+east+west+"\033[00m"
  
  return canMove

  #finds the data for the room using player coordinates, matches it to the data for room exits (ex. 1111 means all directions are open, whereas 0001 means only the WEST is open)

def saveProgress(playerX, playerY, introFinished):
  chosenSlot = input("Save to what slot? (1-3)\n>> ")
  
  if chosenSlot.startswith("1") == True:
    print("Saving to slot 1...")
    f = open("slot1.txt", "w")
  
  elif chosenSlot.startswith("2") == True:
    print("Saving to slot 2...")
    f = open("slot2.txt", "w")
  
  elif chosenSlot.startswith("3") == True:
    print("Saving to slot 3...")
    f = open("slot3.txt", "w")

  else:
    print("Invalid slot")
    return
  
  savedX = str(playerX)
  savedY = str(playerY)
  savedIntro = str(introFinished)

  f.write(savedX+","+savedY+","+savedIntro)
  f.close()

  print("Progress saved!")
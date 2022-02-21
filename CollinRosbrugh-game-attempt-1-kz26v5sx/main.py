import time

from commands import *
from functions import roomUpdate, convertRoomExits, saveProgress

defaultPlayerX = -2
defaultPlayerY = 1
playerX = defaultPlayerX
playerY = defaultPlayerY

introFinished = True #disables intro when set to True
firstTimeEnteringRoom = True #this variable controls the "you are in the [LOCATION NAME]" text, it resets when changing rooms

if introFinished == False:
  from sequences import introSequence
  introSequence()

while True:
  playerCoords = (playerX,playerY)
  roomUpdate(firstTimeEnteringRoom, playerCoords)
  #updates room/room data based on player coordinates
  firstTimeEnteringRoom = False
  
  canMoveNorth = canMoveSouth = canMoveEast = canMoveWest = False
  canMove = convertRoomExits(playerCoords, False)
  if canMove[1] == True:
    canMoveNorth = True
  if canMove[2] == True:
    canMoveSouth = True
  if canMove[3] == True:
    canMoveEast = True
  if canMove[4] == True:
    canMoveWest = False
  
  playerInput = input(">> ")
  #playerInput = input("🗿 ")
  
  if playerInput.lower() in look:
    from roomdata import roomName, roomDesc
    try:
      print(roomName[str(playerCoords)])
      print(roomDesc[str(playerCoords)])
      print(convertRoomExits(playerCoords,True))

    except:
      playerCoords = "(-0, -0)"
      roomUpdate(True, playerCoords)
  elif playerInput.lower() in inventory:
    print("player is accounting")
  elif playerInput.lower() in check:
    print("player is checking")
  elif playerInput.lower() in search:
    print("player is searching")
  elif playerInput.lower() in helpList:
    from commands import helpText
    print(helpText[1]), time.sleep(0.05)
    print(helpText[2]), time.sleep(0.05)
    print(helpText[3]), time.sleep(0.05)
    print(helpText[4]), time.sleep(0.05)
    print(helpText[5]), time.sleep(0.05)
    print(helpText[6]), time.sleep(0.05)
    print(helpText[7]), time.sleep(0.05)
    print(helpText[8]), time.sleep(0.05)
    print(helpText[9]), time.sleep(0.05)
  elif playerInput.lower() in attack:
    print("Nothing to attack!")
  
  #################DEBUG#################
  elif playerInput.lower() == "coords":
    print("playerX =",playerX)
    print("playerY =",playerY)
    print("playerCoords listed as",playerCoords)
  
  elif playerInput.lower() == "exits":
    print(convertRoomExits(playerCoords, True))

  elif playerInput.lower() == "save":
    saveProgress(playerX, playerY, introFinished)
  
  elif playerInput.lower() == "bruh":
    print(canMove)
  #################DEBUG#################

  elif playerInput.lower() in north:
    if canMoveNorth == True:
      playerY = playerY + 1
      print("Player has moved north")
      firstTimeEnteringRoom = True
    else:
      print("You can't move there!")
  elif playerInput.lower() in south:
    if canMoveSouth == True:
      playerY = playerY - 1
      print("Player has moved south")
      firstTimeEnteringRoom = True
    else:
      print("You can't move there!")
  elif playerInput.lower() in east:
    if canMoveEast == True:
      playerX = playerX + 1
      print("Player has moved east")
      firstTimeEnteringRoom = True
    else:
      print("You can't move there!")
  elif playerInput.lower() in west:
    if canMoveWest == True:
      playerX = playerX - 1
      print("Player has moved west")
      firstTimeEnteringRoom = True
    else:
      print("You can't move there!")
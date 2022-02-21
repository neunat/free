import sys, time
from functions import statusBar

spaces = "                              "
enemyName = "Enemy Name"
enemyHealth = 100
playerName = "Player Name"
playerHealth = 100

print('type "fight" to start')
while True:
  playerInput = input(">> ")

  if playerInput == "fight":
    sys.stdout.write("------------------------------ | ------------------------------\n")
    print(f"{playerName[0:30]+spaces[:-len(playerName)]} | {enemyName}")
    sys.stdout.write("\033[s") #saves cursor pos
    sys.stdout.write(statusBar(playerHealth, 30, "\033[92m","\033[90m"))
    sys.stdout.write(" | ")
    sys.stdout.write(statusBar(enemyHealth, 30, "\033[92m","\033[31m"))
    print("\n------------------------------ | ------------------------------")
    
    while True:
      #-----HEALTH BAR UPDATER-----#
      sys.stdout.write("\033[u")
      sys.stdout.write(statusBar(playerHealth, 30, "\033[92m","\033[2;90m"))
      sys.stdout.write(" | ")
      sys.stdout.write(statusBar(enemyHealth, 30, "\033[92m","\033[2;31m"))
      sys.stdout.write("\n\n")
      sys.stdout.flush()
      #-----HEALTH BAR UPDATER-----#

      playerInput = input("\033[2K>> ")
      sys.stdout.write("\033[0J") #erases from cursor until end of screen
      
      if playerInput.lower() == "attack" or playerInput.lower() == "a":
        enemyHealth -= 10
        print("took away 10% of enemy's health")
      
      elif playerInput.lower() == "s":
        playerHealth -= 10
        print("took away 10% of player's health")
      
      elif playerInput.lower() == "inv":
        print("--- Inv ---")
        print("Old shoe")
        print("Crowbar")
        print("Shoelaces")
        print("--- Inv ---")
      elif playerInput.lower() == "oiuhgb":
        print("aaaAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA")
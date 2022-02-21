import time, sys
from getkey import getkey, keys
from functions import statusBar, hideCursor, showCursor

showCursor()

spaces = "                              "
enemyName = "Enemy Name"
enemyHealth = 100
maxEnemyHealth = enemyHealth
playerName = "Player Name"
playerHealth = 284
maxPlayerHealth = playerHealth
playerColor = "\033[96m"
enemyColor = "\033[31m"
options = ["ATTACK","INVENTORY","EQUIP","CHECK"]
selectedOption = ["\033[48;2;255;0;255m","\033[0m"]

#box drawing characters:
# ╔---╗ ╣╠ ╦╩ ╬
# ║   ║ 
# ╚---╝

print("|------------------------------- | -------------------------------|")
print(f"| {playerColor}{playerName[0:30]+spaces[:-len(playerName)]}\033[0m | {enemyColor}{enemyName[0:30]+spaces[:-len(enemyName)]}\033[0m |")
sys.stdout.write("\033[s") #saves cursor pos
sys.stdout.write("| "+statusBar(playerHealth, 30, "\033[92m", "\033[2m"+str(playerColor))+" | "+statusBar(enemyHealth, 30, "\033[92m","\033[31m")+" |")
sys.stdout.write(f"\n| \033[92m{playerHealth}/{str(maxPlayerHealth)+spaces[0:-len(str(playerHealth)+str(maxPlayerHealth))]}\033[0m| \033[92m{enemyHealth}/{str(maxEnemyHealth)+spaces[0:-len(str(enemyHealth)+str(maxEnemyHealth))]}\033[0m|")
print("\n|------------------------------- | -------------------------------|")
    
while True:
  #-----HEALTH BAR UPDATER-----#
  sys.stdout.write("\033[u")
  sys.stdout.write("| "+statusBar(playerHealth, 30, "\033[92m","\033[2m"+str(playerColor))+" | "+statusBar(enemyHealth, 30, "\033[92m","\033[31m")+" |")
  sys.stdout.write(f"\n| \033[92m{playerHealth}/{str(maxPlayerHealth)+spaces[0:-len(str(playerHealth)+str(maxPlayerHealth))]}\033[0m| \033[92m{enemyHealth}/{str(maxEnemyHealth)+spaces[0:-len(str(enemyHealth)+str(maxEnemyHealth))]}\033[0m|")
  sys.stdout.write("\033[2B\r") #moves down 2 lines then back to the start of that line
  sys.stdout.flush()
  #-----HEALTH BAR UPDATER-----#
      
  currentItem = 0
  optionSelect = True
  while optionSelect == True:
    options = ["ATTACK","INVENTORY","EQUIP","CHECK"]
    options.insert(currentItem, selectedOption[0])
    options.insert(currentItem+2, selectedOption[1])
    string = ""
    for x in options:
      string += x + " "

    hideCursor()
    sys.stdout.write(f"| {string}|\n")
    sys.stdout.flush()
    sys.stdout.write("|------------------------------- |\033[1A\r") #move up one line
    sys.stdout.flush()
        
    actionSelect = getkey()
    #-----option selector-----#
    if actionSelect == keys.LEFT:
      currentItem -= 1
    elif actionSelect == keys.RIGHT:
      currentItem += 1
    elif actionSelect == keys.ENTER:
      print("AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA")
    if currentItem < 0: currentItem = 0
    elif currentItem > 3: currentItem = 3
    #-----option selector-----#
import time, sys

def inFight(player, playerInventory, e1):
  from objects import itemData, enemyData
  from functions import statusBar, clearConsole



  while True:
    e1HealthPersentage = int(e1.health/e1.maxHealth * 100)
    
    
    print(f"{e1.name}")
    print(statusBar(e1HealthPersentage, 30, f"\033[38;2;0;255;0m", "\033[31m"))
    if e1.health <= 0:
      print(f"\033[31m{e1.name} has died!\033[0m")


    ############################
    sys.stdout.write("\033[2K")
    playerInput = input(">> ") #
    ############################
    #      the sacred line      

    if playerInput.lower() == "run":
      print("got away")
      break
    
    if playerInput.lower() == "attack":
      if e1.health > 0:
        e1.health -= 1
        print(f"\033[31m{player.name} does 1 damage to {e1.name}!\033[0m")
    





    

    print("\033[2K") #erase line
    print("\033[H") #return "home"
  return
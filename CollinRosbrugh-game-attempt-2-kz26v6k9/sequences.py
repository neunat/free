import time, sys, math

def introSequence(gameVersion, debugMode):
  from functions import getSaveSlotData, printSaveSlotList, loadProgress, clearConsole, properNoun, fancyPrint, hideCursor, showCursor
  introSequence.playerName = "Mr. Gaming" #default
  introSequence.newGame = False
  hideCursor()

  print("game-attempt-2.py")
  print(f"v{gameVersion}")
  time.sleep(1)

  showCursor()
  getSaveSlotData()
  if getSaveSlotData.allEmpty != True:
    fancyPrint("\nExisting saves found.\nWould you like to load an existing save?\n")
    printSaveSlotList()
    fancyPrint('Choose the slot you want to load (ex. \033[93m"slot 1", "slot 2"\033[0m), or type \033[93m"new"\033[0m for a new game.\n')
    
    loadGate = False
    while True:
      playerInput = input(">> ")

      if playerInput.startswith(tuple(["slot","save"])) == True:
        if playerInput[4:5] == " ":
          playerInput = playerInput[0:4]+playerInput[5:6]
        playerInput = playerInput[4:5]
        loadGate = True
      
      elif playerInput.startswith(tuple(["1","2","3"])) == True:
        playerInput = playerInput[0:1]
        loadGate = True
      
      elif playerInput == "n" or playerInput == "new":
        clearConsole()
        break #this will move on to the next "while True:" in introSequence
      
      else:
        print('\033[31mType the slot you want to load, or type "n" or "new" to start a new game.\033[0m')
      
      if loadGate == True:
        loadProgress(playerInput, debugMode)


  fancyPrint("\nWhat would you like to be called? (max 20 chars)\n")
  
  while True:
    playerInput = input(">> ")

    if len(playerInput) <= 20 and len(playerInput) >= 2:
      hideCursor()
      playerName = str(properNoun(playerInput))
      print(f"\nWelcome to the realm, {playerName}.")
      
      introSequence.playerName = playerName
      introSequence.newGame = True
      
      time.sleep(2); clearConsole(); time.sleep(1); hideCursor()
      break
    elif len(playerInput) <= 2:
      print("\033[31mName is too short!")
    else:
      print("\033[31mName is too long!\033[0m")








def inFight(playerCoords, playerInventory, player, foe):
  from objects import itemData, enemyData
  from functions import statusBar, hideCursor, showCursor, clearConsole, space
  from getkey import getkey, keys
  
  foe.health = foe.maxHealth
  
  selectedOption = ["\033[48;2;255;0;255m","\033[0m"]
  margin = space(30)
  doubleMargin = space(63)
  #border = space(67)
  border = "|---------------------------------|---------------------------------|"
  hideCursor()
  clearConsole()
  
  sys.stdout.write(f"{space(69)}\n")
  sys.stdout.write(f"  {player.color}{player.name[0:30]+margin[:-len(player.name)]}\033[0m     {foe.color}{foe.name[0:30]+margin[:-len(foe.name)]}\033[0m  \n")
  sys.stdout.write("\033[s") #saves cursor pos
  sys.stdout.write(f"\n\n\n{border}\n")
  sys.stdout.flush() #prints the lines the health bars will sit at, but doesn't print the bars themselves yet because they are already printed there each frame in the updater so it would be redundant
    
  while True:  
    #-----HEALTH BAR UPDATER-----#
    playerHpPerc = player.health/player.maxHealth*100
    foeHpPerc = foe.health/foe.maxHealth*100

    playerHpColor = foeHpColor = "\033[92m" #default
    if playerHpPerc < 33:
      playerHpColor = "\033[31m"
    if playerHpPerc >= 33:
      playerHpColor = "\033[93m"
    if playerHpPerc >= 66:
      playerHpColor = "\033[92m"
    
    if foeHpPerc < 33:
      foeHpColor = "\033[31m"
    if foeHpPerc >= 33:
      foeHpColor = "\033[93m"
    if foeHpPerc >= 66:
      foeHpColor = "\033[92m"
    
    sys.stdout.write("\033[u") #returns to saved position
    sys.stdout.write("  "+statusBar(playerHpPerc, 30, playerHpColor, "\033[2m"+str(player.color))+"     "+statusBar(foeHpPerc, 30, foeHpColor,"\033[31;2m")+"  ")

    sys.stdout.write(f"\n  {playerHpColor}{player.health}/{str(player.maxHealth)+margin[0:-len(str(player.health)+str(player.maxHealth))]}\033[0m    {foeHpColor}{foe.health}/{str(foe.maxHealth)+margin[0:-len(str(foe.health)+str(foe.maxHealth))]}\033[0m ")
    sys.stdout.write("\033[2B\r") #moves down 2 lines then back to the start of that line
    sys.stdout.flush()
    #-----HEALTH BAR UPDATER-----#
    


    if player.health <= 0 or foe.health <= 0:
      sys.stdout.write(f"\033[3B") #go down 2 lines
      sys.stdout.write("\033[0J") #erases from cursor until end of screen
    if player.health <= 0 and foe.health <= 0:
      sys.stdout.write(f"| \033[31m{foe.name} has died!\033[0m\n")
      sys.stdout.write(f"| \033[31m{player.name} has died!\033]0m\n")
      sys.stdout.write(f"| You recieved no xp from this fight.")
      sys.stdout.flush()
      while True:
        playerInput = getkey()
        if playerInput != keys.ENTER:
          break #only proceeds if you press something other than enter
      clearConsole()
      showCursor()
      inFight.player = player
      return
    elif foe.health <= 0:
      sys.stdout.write(f"| \033[31m{foe.name} has died!\033[0m{doubleMargin[0:-len(foe.name)-8]} |\n")
      sys.stdout.write(f"| \033[93mYou found $3! (placeholder)\033[0m\n{border}")
      sys.stdout.flush()
      while True:
        playerInput = getkey()
        if playerInput != keys.ENTER:
          break #only proceeds if you press something other than enter
      clearConsole()
      showCursor()
      player.money += 3
      inFight.player = player
      return
    elif player.health <= 0:
      sys.stdout.write(f"| \033[93m{player.name} has died!\033[0m\n")
      sys.stdout.write(f"| Press any key to continue")
      sys.stdout.flush()
      while True:
        playerInput = getkey()
        if playerInput != keys.ENTER:
          break #only proceeds if you press something other than enter
      clearConsole()
      showCursor()
      inFight.player = player
      return




    currentItem = 0
    optionSelect = True
    while optionSelect == True:
      options = ["ATTACK","INVENTORY","EQUIP","CHECK","RUN","sadsadsa"]
      options.insert(currentItem, selectedOption[0])
      options.insert(currentItem+2, selectedOption[1])
      string = ""
      for x in options:
        string += x + "  "

      sys.stdout.write(f"{border}\n")
      sys.stdout.write(f"| {space(43)[0:-math.ceil((len(string)/2))]}{string}{space(43)[0:-math.floor((len(string)/2))]} |\n")
      sys.stdout.write(f"{border}\033[2A\r") #move up one line
      sys.stdout.flush()
        
      actionSelect = getkey()
      #-----option selector-----#
      if actionSelect == keys.LEFT:
        currentItem -= 1
      elif actionSelect == keys.RIGHT:
        currentItem += 1
      if currentItem < 0: currentItem = 0
      elif currentItem > 5: currentItem = 5

      elif actionSelect == keys.ENTER:
        if currentItem == 0: #attack
          sys.stdout.write(f"\033[3B") #go down 2 lines
          sys.stdout.write("\033[0J") #erases from cursor until end of screen
          sys.stdout.flush()
          sys.stdout.write(f"| \033[31m{player.name} does 1 damage to the {foe.name}!\033[0m{doubleMargin[0:-len(player.name)+len(foe.name)+20]} |\n{border}")

          foe.health -= 1

          sys.stdout.flush()
          sys.stdout.write(f"\033[4A\r")
          optionSelect = False
        
        
        
        elif currentItem == 1: #inventory
          sys.stdout.write(f"\033[3B") #go down 2 lines
          sys.stdout.write("\033[0J") #erases from cursor until end of screen
          if len(playerInventory) > 0:
            for x in playerInventory:
              sys.stdout.write(f"  {x.name}\n")
          else:
            sys.stdout.write(f"| \033[31mYour inventory is empty!\033[0m{doubleMargin[0:-22]} |\n{border}")
          sys.stdout.flush()
          
          sys.stdout.write(f"\033[{len(playerInventory)}A")
          sys.stdout.write(f"\033[3A\r") #go up 2 lines and then to the beginning of that line
          sys.stdout.flush()
        
        
        
        elif currentItem == 2: #equip
          pass
        
        
        
        elif currentItem == 3: #check
          sys.stdout.write(f"\033[2B\r") #go down 2 lines
          sys.stdout.write(f"{border}\n")
          sys.stdout.write("\033[0J") #erases from cursor until end of screen
          
          sys.stdout.write(f"| HEALTH: {str(foe.maxHealth)[0:3]}{margin[:-len(str(foe.maxHealth))-24]}")
          sys.stdout.write(f" DEFENSE: {str(foe.armor)[0:3]}{margin[:-len(str(foe.maxHealth))-23]}  \n")
          sys.stdout.write(f"| ATTACK: {str(foe.damage)[0:3]}{margin[:-len(str(foe.maxHealth))-24]}")
          sys.stdout.write(f" VALUE: \n{border}\n")
          
          descriptionLineCount = math.ceil(len(foe.description)/65) #rounds up
          for x in range(0,descriptionLineCount):
            if foe.description[0+65*x:65+65*x][0] == " ":
              sys.stdout.write(f"| {foe.description[1+65*x:65+65*x]} {doubleMargin[0:-len(foe.description[0+65*x:65+65*x])]} |\n")
              #removes a space if it is the first character of a line
            else:
              sys.stdout.write(f"| {foe.description[0+65*x:65+65*x]}{doubleMargin[0:-len(foe.description[0+65*x:65+65*x+2])]} |\n")
              #figures out how many lines of the description there are to print
          sys.stdout.write(border)

          sys.stdout.flush()
          sys.stdout.write(f"\033[{descriptionLineCount+6}A\r")
      
        elif currentItem == 4: #check
          clearConsole()
          showCursor()
          inFight.player = player
          return
      #-----option selector-----#
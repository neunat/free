import time
import random
from data import delay, Lversion, version

def Console():
  consoleOutput = True
  if consoleOutput == True:
    print('Enter a command:')
  while consoleOutput == True:
  
    consoleInput = input(">> ")

    if consoleInput == "/help":
      print('')
      time.sleep(delay)
      print('>> Command List and Function:')
      time.sleep(delay)
      print('')
      time.sleep(delay)
      print('   /help = Returns possible commands and their function')
      time.sleep(delay)
      print('   /chat = Enters the BWA Chatroom')
      time.sleep(delay)
      print('   /version = Returns the current version')
      print('')
      print('   (More commands comming soon!)')
      time.sleep(delay) 
      print('')
      #The "Help" command

    elif consoleInput == "/chat":
      consoleInput = False
      Chat()
    
    elif consoleInput == "/debug":
      print('')
      print(version)

    elif consoleInput == "/version":
      print()
      print(Lversion)
      print()

    elif consoleInput == "/vers":
      print()
      print(version)
      print()

    elif consoleInput == "/togglercrits":
      if randomCrits == True:
        time.sleep(delay)
        print('')
        time.sleep(delay)
        print('Random crits are now disabled, phew.')
        time.sleep(delay)
        print('')
        randomCrits = False
      elif randomCrits == False:
        
        time.sleep(delay)
        print('')
        time.sleep(delay)
        print('Random crits are now enabled, you monster!')
        time.sleep(delay)
        print('')
        randomCrits = True
    
    elif consoleInput == "":
      print(end="\r ")

    else:
      print('')
      print('Invalid command. Enter "/help" for possible commands.')
      print('')
def Chat():
  badNames = ['Noobmaster69', 'yeetman420', 'Epicdude76', '1337_h@x0r', 'big_shnitzel', 'Killerman46', 'anonymousMann']
  badname = random.choice(badNames)
  
  chatInput = True
  if chatInput == True:
    print('\n----------------------------------------------------------------------------------|')
    time.sleep(delay)
    print('Enter a username:')
    userName = input()

    if userName == '':
      time.sleep(delay*2.5)
      print('Come on, pick a username:')
      userName = input()

      if userName == '':
        time.sleep(delay*2.5)
        print("Just enter a username:")
        userName = input()

        if userName == '':
          time.sleep(delay*2.5)
          print("Fine, I'll choose one for you.")
          time.sleep(delay*2.5)
          userName = badname
    
    time.sleep(delay*2.5)
    print('----------------------------------------------------------------------------------|')
  
  while chatInput == True:
    chatString = input(str(userName)+'>> ')
    #sys.stdout.write("\033[K") -> Needs "import sys" or it will return an error.
    
    if chatString == "/help":
      print('')
      time.sleep(delay)
      print('>> Commands List and Functions:')
      time.sleep(delay)
      print('')
      time.sleep(delay)
      print('   /help = Returns possible commands and their function')
      time.sleep(delay)
      print('   /exit = Returns to console')
      time.sleep(delay)
      print('   /username = Changes your name')
      time.sleep(delay)
      print('   /randomname = Randomizes your name\n')
      time.sleep(delay)
      print('   (More commands comming soon!)\n')
      time.sleep(delay) 
    
    elif chatString == "/randomname":
      newbadname = random.choice(badNames)
      while userName == newbadname:
        newbadname = random.choice(badNames)
      userName = newbadname

    elif chatString == "/username":
      time.sleep(delay)
      print('\nNew Username:')
      userName = input('>> ')
      time.sleep(delay)
      print()
      time.sleep(delay)

    elif chatString == "/dev":
      print(' ________________________________ ')
      print('|     Secret Settings Menu       |')
      print('|     --------------------       |')
      print('|      1 for Curse Filter        |')
      print('|      2 for Language filter     |')
      print('|      3 for asscii              |')
      print('|________________________________|\n')

    elif chatString == "/exit":
      chatInput = False
      time.sleep(delay)
      print('\nExiting...\n')
      time.sleep(delay)
      print('----------------------------------------------------------------------------------|')

    else:
      time.sleep(0)
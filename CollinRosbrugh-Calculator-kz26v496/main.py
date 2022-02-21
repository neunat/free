from functions import *

print('Welcome to Calculator, here you can calculate many things. \nType "/help" to see available commands.\n')

yes={"yes","y","/yes","/y"}
no={"no","n","/no","/n"}

multiplySyntax={"/multiply","/multiplication","/m","multiply","multiplication","m"}
divideSyntax={"/divide","/division","/d","divide","division","d"}
addSyntax={"/add","/addition","/a","add","addition","a"}
subtractSyntax={"/subtract","/subtraction","/s","subtract","subtraction","s"}

helpSyntax={"/help","help","/h","h"}
exitSyntax={"/quit","quit","/q","q"}
clearSyntax={"/clear","clear","/c","c"}
backSyntax={"/back","back","/b","b"}
modeSyntax={"/mode","/m","m","mode"}

wipe="\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n"

def userInput():
  commandInput = input(">> ").lower()

  if commandInput in exitSyntax: 
    quitPrompt = input("Are you sure you want to quit? (y/n)\n\n>> ")
    if quitPrompt in yes: 
      print("\nunexpectedly my ass")
      quit()
    else:
      print("\nPhew, you had me worried there.\n")
  elif commandInput in clearSyntax:
    print(wipe)
    print("console has been cleared.")
  elif commandInput in backSyntax: print("I have to code this one still\n")
  elif commandInput in helpSyntax:
    print("command list:\n    /help: lists all commands\n    /mode: choose between multiplication, division, addition\n           and subtraction\n    /back: exits math operation to console\n    /clear: clears the console\n\nshortcuts:\n    /m: multiply\n    /d: divide\n    /a: add\n    /s: subtract\n")
  elif commandInput in multiplySyntax: multiply(0)
  elif commandInput in divideSyntax: divide(0)
  elif commandInput in addSyntax: add(0)
  elif commandInput in subtractSyntax: subtract(0)
  elif commandInput in modeSyntax:
    modeInput = input("\nSelect a mode:\n>> mode ")
    if modeInput in multiplySyntax:
      print("Mode switched to multiplication.\n")
      multiply(1)
    elif modeInput in divideSyntax:
      print("Mode switched to division.\n")
      divide(1)
    elif modeInput in addSyntax:
      print("Mode switched to addition.\n")
      add(1)
    elif modeInput in subtractSyntax:
      print("Mode switched to subtraction.\n")
      subtract(1)
    else:
      print('\nInvalid mode.\n')
  elif commandInput == "": print()
  else:
    print('Invalid command. Use "/help" to list commands.\n')

while True:
  userInput()
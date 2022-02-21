import time
import sys

rRate = 0.2

color = "\033[0;0m"
c = color #Abbreviaton
#----------------------------------#
reset = "\033[0;0m"
red   = "\033[1;31m"  
blue  = "\033[1;34m"
cyan  = "\033[1;36m"
green = "\033[0;32m"
bold = "\033[;1m"
reverse = "\033[;7m"
#----------------------------------#

clearLine = sys.stdout.write("\033[K")

prompt = input("Skip intro sequence? (y/n)\n>> ")

if prompt == "y":
  rRate = 0

print(); time.sleep(rRate)
print(); time.sleep(rRate)
print('>> Welcome to the')
time.sleep(rRate); print(); time.sleep(rRate)
print('888888b.   888       888        d8888         888    888          888      888'); time.sleep(rRate)
print('888  "88b  888   o   888       d88888         888    888          888      888'); time.sleep(rRate)
print('888  .88P  888  d8b  888      d88P888         888    888          888      888'); time.sleep(rRate)
print('8888888K.  888 d888b 888     d88P 888         8888888888 888  888 88888b.  888'); time.sleep(rRate)
print('888  "Y88b 888d88888b888    d88P  888         888    888 888  888 888 "88b 888'); time.sleep(rRate)
print('888    888 88888P Y88888   d88P   888         888    888 888  888 888  888 Y8P'); time.sleep(rRate)
print('888   d88P 8888P   Y8888  d8888888888         888    888 Y88b 888 888 d88P  "'); time.sleep(rRate)
print('8888888P"  888P     Y888 d88P     888         888    888  "Y88888 88888P"  888\n'); time.sleep(rRate)

print("The last hub was discontinued,"); print("But this one is not!"); time.sleep(rRate); print("\n[Online functionality not included]")
print("---------------------------------------------------------------------------------")

cs = True #Console variable - CS hidden on startup if set to False.

time.sleep(rRate)
while cs == True:
  csInput = input(">> "); print('\r')
  
  if csInput == "/help":
    clearLine; time.sleep(0.2)
    print(c+">> List of commands:")
    print(c+"/help ------------- Lists availible commands.")
    print(c+"/time ------------- Unimplemented")
    print(c+"/version ---------- Unimplemented")
    print(c+"/exit ------------- Ends the program.")
    print(c+"/color [color] ---- Changes the output color.\n")

  elif csInput == "/time": 
    print("command has no functionality")

  elif csInput == "/version":
    print("command has no functionality")

  elif csInput == "/exit":
    time.sleep(0.5); print(c+"Exiting..."); time.sleep(0.7); quit()

  elif csInput == "/color":
    print(c+"To use /color, enter a modifier. (ex. /color red)")
  elif csInput == "/color white":
    color = reset; c = color
    print(c+"Changed output color to white")
  elif csInput == "/color red":
    color = red; c = color
    print(c+"Changed output color to red")
  elif csInput == "/color blue":
    color = blue; c = color
    print(c+"Changed output color to blue")
  elif csInput == "/color cyan":
    color = cyan; c = color
    print(c+"Changed output color to cyan")
  elif csInput == "/color green":
    color = green; c = color
    print(c+"Changed output color to green")
  elif csInput == "/color bold":
    color = bold; c = color
    print(c+"Changed output format to 'Bold'")
  elif csInput == "/color null":
    color = reverse; c = color
    print(c+"Changed output format to 'Reverse'")

  else:
    print(c+"Invalid command. Use '/help' for a list of commands.")
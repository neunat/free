import time
import random
import sys

def statusBar(persentage, size, color, bg):
  bar = "████████████████████████████████████████████████████████████████████████████████████████████████████" #100 characters
  ratio = 100/size #if size is 20, it returns 5 - this means that 5% = one bar character
  persentage = int(persentage/ratio) #the number of green boxes
  if persentage < 0: persentage = 0
  return f"{color}{bar[0:persentage]}{bg}{bar[persentage:size]}\033[0m"




def placeValue(number):
  import math
  try: number = str(number)
  except: return "\033[31mbro fr what the fuck is this\033[0m"
  if len(number) <= 3: return number
  commas = math.floor(len(number)/3)

  output = []
  for x in range(commas):
    x = number[-3:] #gets last 3 chars of the string
    number = number[:-3] #trims them off
    output.insert(0, x) #stores them in list at first position
  
  output.insert(0, number) #adds the last non-divisible-by-3 part onto the front
  
  export = ""
  for x in output:
    export += x + ","
  
  if export[0:1] == ",": export = export[1:]
  #fixes a bug where it outputs like ",208,975" instead of "208,975"

  return export[:-1]



def properNoun(string):
  if string == "": return "" #no need to continue
  string = string.split(" ")
  
  newString = []
  for x in string:
    newString.append(x[0:1].upper()+x[1:])
  string = ""
  for x in newString:
    string = string + x + " "
  
  return string[:-1]




def clearConsole():
    from os import system, name
    if name == 'nt':
      _ = system('cls')
    else:
      _ = system('clear')
    #this code is from https://www.geeksforgeeks.org/clear-screen-python/, I did not write it myself and so I do not claim to




def fancyPrint(text, delay=0.04):
  for x in text:
    sys.stdout.write(x)
    sys.stdout.flush()
    time.sleep(delay)




def rgb(red, green, blue):
  return f"\033[38;2;{red};{green};{blue}m"
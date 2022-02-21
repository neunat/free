import time


selectedOption = ["\033[48;2;255;0;255m","\033[0m"]




currentItem = 0
while True:
  options = ["ATTACK","INVENTORY","EQUIP","CHECK"]
  options.insert(currentItem, selectedOption[0])
  options.insert(currentItem+2, selectedOption[1])

  string = ""
  for x in options:
    string += x + " "
  
  time.sleep(1)
  print(string)
  currentItem += 1
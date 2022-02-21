import random

x = True
y = 0

sentences = ["I like cars and pizza", "Triya needs to learn how to use zoom", "I like marshmallows and smores", "Calista likes naan", "Jai wants to go into engineering"]
while x==True: 
  computer = random.choice(sentences)
  ask = input("type: " +computer)
  if y == 3:
    break
  else:
    if ask == computer: 
      print("good job")
      y=y+1
    else:
      print("try again")
      y=y+1


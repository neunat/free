#Bingo Game

import random

def fixSingles(number):
  if (card[] < 10):
    number = number + " "
  return number

def bingoGen():
  card = []
  layer = 1
  for x in range(30):
   number = str(random.randrange(1, 99))
   card.append(fixSingles(number))

  print("┏━━━━┳━━━━┳━━━━┳━━━━┳━━━━┓")
  for x in range(4):
    print("┃",(card[layer]),"┃",(card[layer + 1]),"┃",(card[layer + 2]),"┃",(card[layer + 3]),"┃",(card[layer + 4]),"┃")
    print("┣━━━━╋━━━━╋━━━━╋━━━━╋━━━━┫")
    layer = layer + 5
  print("┃",(card[layer]),"┃",(card[layer + 1]),"┃",(card[layer + 2]),"┃",(card[layer + 3]),"┃",(card[layer + 4]),"┃")
  print("┗━━━━┻━━━━┻━━━━┻━━━━┻━━━━┛")

bingoGen()
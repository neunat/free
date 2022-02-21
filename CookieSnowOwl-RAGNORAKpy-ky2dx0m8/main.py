from os import system as clears
from time import sleep as slp
def clear():
  try: 
    clears("clear")
  except:
    clears("cls")
def write(sentence):
  sentence = sentence.split(" ")
  list = []
  for i in range(len(sentence)):
    list.append(sentence[i] + " ")
  for i in range(len(list)):
    for j in range(len(list[i])):
      if list[i][j] == " ":
        slp(0.025)
      else:
        slp(0.1)
      print(list[i][j], end="", flush = True)
  print("")
write("Hello there! Welcome to RAGNORAK. Please enter a name.")
name = input(">> ")
import random

def generatePassword(times):
  total = 0
  b = 0
  
  passwordd = []
  password = ""

  add = input("Do you want to add your own word/characters? ")
  if (add == "yes" or add == "y" or add == "Yes" or add == "Y"):
    toAdd = input("What do you want to add to your password? ")
    addInput = 1

    BorE = input("Do you want to put your input at the end or the beggining of your password? (b/e) ")

  elif (add == "no" or add == "No" or add =="N" or add == "n"):
    addInput = 0
  else: 
    print("Input not recognized, program will continue assuming your answer is no\n" )

  wordList = open("CommomEnglishWords.txt", 'r')
  words = wordList.read()

  a = words.split("\n")

  for i in a:
    if i:
      total = total+1
  #total is the total lines in the txt file

  i = 0
  for i in range(times):
    line = random.randrange(1,total)
    if line<45:
      line = random.randrange(1,total)

    passwordd.append(a[line])
  if addInput == 1:
    if BorE == 'b':
      passwordd.insert(0, toAdd)
    if BorE == 'e':
      passwordd.append(toAdd)

  
  wordList.close()

  i = 0
  for i in passwordd:
    b = b+1
    password = password+str(i)
    if b<(len(passwordd)):#only adds a space if it's not on the last word
      password = password+" "

  print("\nYour password is: "+password)

times = input("How many words do you want in your passphrase? (numbers only) ")
times = int(times)

generatePassword(times)





#using numbers
score=0
print(score)

x=2
y=x*3
print(y)

#working with strings
name="Martin"
print(name)
greeting="Hello "
name="Martin"
message=greeting+name
print(message)

#making lists
card1="ace hearts"
card2="2 hearts"
card3="3 hearts"
card4="4 hearts"
card5="5 hearts"
card6="6 hearts"
cards=["1 hearts", "2 hearts", "3 hearts", "4 hearts", "5 hearts", "6 hearts"]
cards[0]
cards[5]

#comparisens
answer_one=True
answer_two=False

#monsters and coins
monsters=3
coins=4
print(coins>monsters)
print(coins==monsters)
print(monsters<coins)
print((monsters==3) and (coins==4))
print((monsters==7) or (coins==4))

#level up
score=110
snails=3
print((score>100)and(snails>=4))

#branching
#1 branch
spells=11
if (spells>10):
  print("You gained the title Enchanter")

#more then 2 branches
ghosts=3
if ghosts>1:
  print("It's so spooooooky!")
elif ghosts >0:
  print("Get those ghosts")
else:
  print("Ghosts all gone")

#2 branches
game_over=True
if game_over:
  print("Game over")
else:
  print("Keep playing")

#for loops
for count in range(1, 11):
  print("You are the high scorer")

#looping over a list
robots=["Bing", "Bleep", "Bloop"]
for robot in robots:
  print("I am a robot. My name is " + robot)

#looping over 2 lists
robots=["Bing", "Bleep", "Bloop"]
colours =["red", "orange", "purple"]
index=0
for each in robots:
  print("My name is " +robots[index]+ ". I am " + colours[index])
  index=index+1

#while loops
answer = input("Throw a water balloon (y/n) ")
while answer == y:
      print("Spash!!!")
      answer = input("Throw another water balloon (y/n)")
print("Goodbye!")

#print() function
print("this is a parameter")

#input() function
name=input("What is your name? ")
print(name)

#count() function
"functions are fun".count("fun")

#reverse() function
countdown =[1,2,3]
countdown.reverse()
print(countdown)

#upper() function
"blue".upper()

#replace() function
message="Coding makes me happy"
message.replace("happy" ,":D")

#making my own functions
def fruit_score():
  print(10)

fruit_score()
#add some parameters
def fruit_score(fruit):
  if fruit== "apple":
    print(10)
  elif fruit == "orange":
    print(5)
fruit_score("apple")
fruit_score("orange")
#return values
def fruit_score(fruit):
  if fruit== "apple":
    return 10
  elif fruit == "orange":
    return 5
#using return value
def fruit_score(fruit):
  if fruit== "apple":
    return 10
  elif fruit == "orange":
    return 5
  
  apple_score = fruit_score("apple")
  orange_score = fruit_score("orange")

  total= fruit_score("apple") + fruit_score("orange")
  print(total)
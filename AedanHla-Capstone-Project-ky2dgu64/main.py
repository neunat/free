import os,time
# Step 1: Import randint function
from random import randint
# Step 2: Generate a number, randomly
guess1=randint(0,50)
# Step 3: Welcome the user to the game
greeting=input('Welcome to a guessing game! please press enter to continue:')
os.system('clear')

name=input('Please input your name:')
os.system('clear')
print('Lets Start,'+name +'. (just wait a bit before doing anything)')
time.sleep(2)
os.system('clear')
# Step 4: Specify the bounds of the guess to the user - tell them the numbers they can guess between: eg, 0 and 10, 
bound=input('In The fist question you will guess a random number from 0-50, got it?\nyes/no: ')
os.system('clear')
if bound == "no":
	print('you will have to guess a number between 0 and 50 with your three guesses,\nI will tell you, as your guide, how close you are to getting the number right, GOT IT?\n (* ￣︿￣) ')
elif bound == 'yes' :
	print('lets move on now ' +name +'.')
# Step 5: Have the user enter a guess
print(guess1)
guessing1=input('now guess the number: ')
os.system('clear')
#print('The answer is '+guess1)
for i in range(3):
	while True:
		if guessing1 != guess1:
			print('...oh, heh, Try Try, Again! :)')
			break
		elif guessing1 == guess1:
			print('You Got It!!!!!!!!!!!!!')						
# Step 6: Using a while loop, have the user guess until the answer is correct. Be sure to give the user hints as to where the number lies. If the number is too high, let them know.  if the number is too low, let them know as well
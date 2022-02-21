import random

print("Welcome to number guesser!")
while True:
  try:
    number = int(input("What is your number? (0-100)\n> "))
    break
    if number > 100:
        print("Please enter a number between 0-100")
  except:
    print("\nPlease enter a valid number.\n")

lower_inputs = ["l","low","lower","Lower"]
higher_inputs = ["h","high","higher","Higher"]
equal_inputs = ["e","=","equal","Equal","same","Same"]
yes = ["y","yes","Yes"]
no = ["n","no","No"]

lowest_guess = 0
highest_guess = 100
guess = random.randint(lowest_guess,highest_guess)
number_not_guessed = True

while number_not_guessed == True:
  print("\nIs your number higher, lower, or equal to",str(guess)+"?")

  while True:
    try:
      guess_status = input("> ")
      break
    except:
      print('\nType "higher" or "lower"')

  if guess_status in lower_inputs:
    highest_guess = guess
    guess = random.randint(lowest_guess,highest_guess)
  if guess_status in higher_inputs:
    lowest_guess = guess
    guess = random.randint(lowest_guess,highest_guess)
  
  if guess_status in equal_inputs:
    final_guess = input("\nWas your number",str(guess)+"?\n> ")
    if final_guess in yes:
      print("Thanks for playing!")
    if final_guess in no:
      print("What?");exit()

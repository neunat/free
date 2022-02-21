import random
import sys
import time

score_file = open("score.txt", "r")
money = score_file.readline()
money = float(money)
score_file.close()
print("Welcome to El casino ilegal, the place where you can make completly ligit money")

symbol_list = ["🤑", "😇", "😁", "😵", "😎", "😡", "🥶", "🥸", "🤢", "😱", "🤣", "😍", "🥳"]

print("This is the game Legal Casino.")

print("you have been given", money, "illegal dollars")

print("If you ever want to quit type exit instead of betting")
while money >5:
  bet = input("How much would you like to bet: ")

  if bet == "exit":
    break #this ends the while loop

  bet = float(bet)  #this turn bet from a string into a float
    

  if bet <= money and bet > 0:
    money -= bet
    for i in range(5):  #this blinks column one
      symbol_1 = random.choice(symbol_list)
      symbol_2 = random.choice(symbol_list)
      symbol_3 = random.choice(symbol_list)
      symbol_4 = random.choice(symbol_list)
      symbol_5 = random.choice(symbol_list)
      print(symbol_1, symbol_2, symbol_3, symbol_4, symbol_5)

      time.sleep(.3)
      sys.stdout.write("\033[F") #back to previous line 
    print(symbol_1, symbol_2, symbol_3, symbol_4, symbol_5)
    for i in range(5):  #this blinks column one
      symbol_6 = random.choice(symbol_list)
      symbol_7 = random.choice(symbol_list)
      symbol_8 = random.choice(symbol_list)
      symbol_9 = random.choice(symbol_list)
      symbol_10 = random.choice(symbol_list)
      print(symbol_6, symbol_7, symbol_8, symbol_9, symbol_10)
      time.sleep(.3)
      sys.stdout.write("\033[F") #back to previous line
    print(symbol_6, symbol_7, symbol_8, symbol_9, symbol_10)

    for i in range(5):  #this blinks column one
      symbol_11 = random.choice(symbol_list)
      symbol_12 = random.choice(symbol_list)
      symbol_13 = random.choice(symbol_list)
      symbol_14 = random.choice(symbol_list)
      symbol_15 = random.choice(symbol_list)
      print(symbol_11, symbol_12, symbol_13, symbol_14, symbol_15)
      time.sleep(.3)
      sys.stdout.write("\033[F") #back to previous line
    print(symbol_11, symbol_12, symbol_13, symbol_14, symbol_15)    
    
    wins = 0
    if symbol_1 == symbol_2:
      wins +=1

    if symbol_1 == symbol_3:
      wins +=1

    if symbol_1 == symbol_4:
        wins +=1

    if symbol_1 == symbol_5:
        wins +=1

    if symbol_1 == symbol_6:
        wins +=1

    if symbol_1 == symbol_7:
        wins +=1

    if symbol_1 == symbol_8:
        wins +=1

    if symbol_1 == symbol_9:
        wins +=1

    if symbol_1 == symbol_10:
        wins +=1

    if symbol_1 == symbol_11:
        wins +=1

    if symbol_1 == symbol_12:
        wins +=1

    if symbol_1 == symbol_13:
        wins +=1

    if symbol_1 == symbol_14:
        wins +=1

    if symbol_1 == symbol_15:
        wins +=1

    if symbol_2 == symbol_3:
        wins +=1

    if symbol_2 == symbol_4:
        wins +=1

    if symbol_2 == symbol_5:
        wins +=1

    if symbol_2 == symbol_6:
        wins +=1

    if symbol_2 == symbol_7:
        wins +=1

    if symbol_2 == symbol_8:
        wins +=1

    if symbol_2 == symbol_9:
        wins +=1

    if symbol_2 == symbol_10:
        wins +=1

    if symbol_2 == symbol_11:
        wins +=1

    if symbol_2 == symbol_12:
        wins +=1

    if symbol_2 == symbol_13:
        wins +=1

    if symbol_2 == symbol_14:
        wins +=1

    if symbol_2 == symbol_15:
        wins +=1

    if symbol_3 == symbol_4:
        wins +=1

    if symbol_3 == symbol_5:
        wins +=1

    if symbol_3 == symbol_6:
        wins +=1

    if symbol_3 == symbol_7:
        wins +=1

    if symbol_3 == symbol_8:
        wins +=1

    if symbol_3 == symbol_9:
        wins +=1

    if symbol_3 == symbol_10:
        wins +=1

    if symbol_3 == symbol_11:
        wins +=1

    if symbol_3 == symbol_12:
        wins +=1

    if symbol_3 == symbol_13:
        wins +=1

    if symbol_3 == symbol_14:
        wins +=1

    if symbol_3 == symbol_15:
        wins +=1

    if symbol_4 == symbol_5:
        wins +=1

    if symbol_4 == symbol_6:
        wins +=1

    if symbol_4 == symbol_7:
        wins +=1

    if symbol_4 == symbol_8:
        wins +=1

    if symbol_4 == symbol_9:
        wins +=1

    if symbol_4 == symbol_10:
        wins +=1

    if symbol_4 == symbol_11:
        wins +=1

    if symbol_4 == symbol_12:
        wins +=1

    if symbol_4 == symbol_13:
        wins +=1

    if symbol_4 == symbol_14:
        wins +=1

    if symbol_4 == symbol_15:
        wins +=1

    if symbol_5 == symbol_6:
        wins +=1

    if symbol_5 == symbol_7:
        wins +=1

    if symbol_5 == symbol_8:
        wins +=1

    if symbol_5 == symbol_9:
        wins +=1

    if symbol_5 == symbol_10:
        wins +=1

    if symbol_5 == symbol_11:
        wins +=1

    if symbol_5 == symbol_12:
        wins +=1

    if symbol_5 == symbol_13:
        wins +=1

    if symbol_5 == symbol_14:
        wins +=1

    if symbol_5 == symbol_15:
        wins +=1

    if symbol_6 == symbol_7:
        wins +=1

    if symbol_6 == symbol_8:
        wins +=1

    if symbol_6 == symbol_9:
        wins +=1

    if symbol_6 == symbol_10:
        wins +=1

    if symbol_6 == symbol_11:
        wins +=1

    if symbol_6 == symbol_12:
        wins +=1

    if symbol_6 == symbol_13:
        wins +=1

    if symbol_6 == symbol_14:
        wins +=1

    if symbol_6 == symbol_15:
        wins +=1

    if symbol_7 == symbol_8:
        wins +=1

    if symbol_7 == symbol_9:
        wins +=1

    if symbol_7 == symbol_10:
        wins +=1

    if symbol_7 == symbol_11:
        wins +=1

    if symbol_7 == symbol_12:
        wins +=1

    if symbol_7 == symbol_13:
        wins +=1

    if symbol_7 == symbol_14:
        wins +=1

    if symbol_7 == symbol_15:
        wins +=1

    if symbol_8 == symbol_9:
        wins +=1

    if symbol_8 == symbol_10:
        wins +=1

    if symbol_8 == symbol_11:
        wins +=1

    if symbol_8 == symbol_12:
        wins +=1

    if symbol_8 == symbol_13:
        wins +=1

    if symbol_8 == symbol_14:
        wins +=1

    if symbol_8 == symbol_15:
        wins +=1

    if symbol_9 == symbol_10:
        wins +=1
    
    if symbol_9 == symbol_11:
        wins +=1

    if symbol_9 == symbol_12:
        wins +=1

    if symbol_9 == symbol_13:
        wins +=1

    if symbol_9 == symbol_14:
        wins +=1

    if symbol_9 == symbol_15:
        wins +=1

    if symbol_10 == symbol_11:
        wins +=1

    if symbol_10 == symbol_12:
        wins +=1

    if symbol_10 == symbol_13:
        wins +=1

    if symbol_10 == symbol_14:
        wins +=1

    if symbol_10 == symbol_15:
        wins +=1

    if symbol_11 == symbol_12:
        wins +=1

    if symbol_11 == symbol_13:
        wins +=1

    if symbol_11 == symbol_14:
        wins +=1

    if symbol_11 == symbol_15:
        wins +=1

    if symbol_12 == symbol_13:
        wins +=1

    if symbol_12 == symbol_14:
        wins +=1

    if symbol_12 == symbol_15:
        wins +=1

    if symbol_13 == symbol_14:
        wins +=1

    if symbol_13 == symbol_15:
        wins +=1
    
    if symbol_14 == symbol_15:
        wins +=1
    
    
    if (symbol_1 == "😇" and symbol_2 == "😇") or  (symbol_2 == "😇" and symbol_3 == "😇")or (symbol_3 == "😇" and symbol_4 == "😇") or (symbol_4 == "😇" and symbol_5 == "😇") or (symbol_6 == "😇" and symbol_7 == "😇") or (symbol_7 == "😇" and symbol_8 == "😇") or (symbol_8 == "😇" and symbol_9 == "😇") or (symbol_9 == "😇" and symbol_10 == "😇") or (symbol_11 == "😇" and symbol_12 == "😇") or (symbol_12 == "😇" and symbol_13 == "😇") or (symbol_13 == "😇" and symbol_14 == "😇") or (symbol_14 == "😇" and symbol_15 == "😇"):
      print("You have been very good. You got a blessing from god")
      wins +=10

    if (symbol_1 == "🤑" and symbol_2 == "🤑" and symbol_3 == "🤑") or  (symbol_2 == "🤑" and symbol_3 == "🤑" and symbol_4 == "🤑") or (symbol_3 == "🤑" and symbol_4 == "🤑" and symbol_5 == "🤑") or (symbol_4 == "🤑" and symbol_5 == "🤑" and symbol_6 == "🤑") or (symbol_6 == "🤑" and symbol_7 == "🤑" and symbol_8 == "🤑") or (symbol_7 == "🤑" and symbol_8 == "🤑" and symbol_9 == "🤑") or (symbol_8 == "🤑" and symbol_9 == "🤑" and symbol_10 == "🤑") or (symbol_9 == "🤑" and symbol_10 == "🤑" and symbol_11 == "🤑") or (symbol_11 == "🤑" and symbol_12 == "🤑" and symbol_13 == "🤑") or (symbol_12 == "🤑" and symbol_13 == "🤑" and symbol_14 == "🤑") or (symbol_13 == "🤑" and symbol_14 == "🤑" and symbol_15 == "🤑"):
      print("You got the Big Money Jackpot Bonus")
      wins += 50

    if (symbol_1 == "🤢" and symbol_2 == "🥶" and symbol_3 == "🤢") or  (symbol_2 == "🤢" and symbol_3 == "🥶" and symbol_4 == "🤢") or (symbol_3 == "🤢" and symbol_4 == "🥶" and symbol_5 == "🤢") or (symbol_4 == "🤢" and symbol_5 == "🥶" and symbol_6 == "🤢") or (symbol_6 == "🤢" and symbol_7 == "🥶" and symbol_8 == "🤢") or (symbol_7 == "🤢" and symbol_8 == "🥶" and symbol_9 == "🤢") or (symbol_8 == "🤢" and symbol_9 == "🥶" and symbol_10 == "🤢") or (symbol_9 == "🤢" and symbol_10 == "🥶" and symbol_11 == "🤢") or (symbol_11 == "🤢" and symbol_12 == "🥶" and symbol_13 == "🤢") or (symbol_12 == "🤢" and symbol_13 == "🥶" and symbol_14 == "🤢") or (symbol_13 == "🤢" and symbol_14 == "🥶" and symbol_15 == "🤢"):
      print("Uh-Oh, you got sick.")
      wins -= 5

    if (symbol_1 == "😵" and symbol_2 == "😵") or  (symbol_2 == "😵" and symbol_3 == "😵")or (symbol_3 == "😵" and symbol_4 == "😵") or (symbol_4 == "😵" and symbol_5 == "😵") or (symbol_6 == "😵" and symbol_7 == "😵") or (symbol_7 == "😵" and symbol_8 == "😵") or (symbol_8 == "😵" and symbol_9 == "😵") or (symbol_9 == "😵" and symbol_10 == "😵") or (symbol_11 == "😵" and symbol_12 == "😵") or (symbol_12 == "😵" and symbol_13 == "😵") or (symbol_13 == "😵" and symbol_14 == "😵") or (symbol_14 == "😵" and symbol_15 == "😵"):
      print("You died")
      money = 0

    if bet == 5:
      wins *= 1
    
    if bet >5:
      wins *= 2
    money += wins
    
    print("You earned", wins, "illegal dollars")
    print("You now have", money, "illegal dollars" )

money = int(money)
money = str(money)
score_file = open("score.txt", "w")
score_file.write(money)
score_file.close()










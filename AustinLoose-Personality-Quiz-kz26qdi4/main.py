Lion_points = 0

fish_points = 0

Hamster_points = 0

Shark_points = 0

Dog_points = 0

print("Welcome to the animal quiz, this quiz is a y/n quiz that tells you what kind of animal you would be!\n")

question_1 = input("Do you like the ocean?: ")

if question_1 == "yes":
  Shark_points += 10
  fish_points += 9

elif question_1 == "no":
  Hamster_points += 8
  Lion_points += 7
  Dog_points += 10   

else:
  print("\nNOT AN ANSWER, GET WITH THE PROGRAM!")


question_2 = input("Do you eat meat?: ")

if question_2 == "yes":
  Shark_points += 9

elif question_2 == "no":
  fish_points += 5

elif question_2 == "no":
  Hamster_points += 9

elif question_2 == "yes":
   Lion_points += 10

else:
  print("\nNOT AN ANSWER, GET WITH THE PROGRAM!")

 
question_3 = input("Are you usually calm and collected?: ")

if question_3 == "no":
  Shark_points += 9

elif question_3 == "yes":
  fish_points += 8

elif question_3 == "yes":
  Hamster_points += 9

elif question_3 == "no":
   Lion_points += 10

else:
  print("\nNOT AN ANSWER, GET WITH THE PROGRAM!")

question_4 = input("Do you have any siblings?: ")

if question_4 == "no":
  Shark_points += 9

elif question_4 == "yes":
  fish_points += 8

elif question_4 == "no":
  Hamster_points += 9

elif question_4 == "yes":
   Lion_points += 10

else:
  print("\nNOT AN ANSWER, GET WITH THE PROGRAM!")

question_5 = input("Do you have any pets?: ")

if question_5 == "no":
  Shark_points += 9

elif question_5 == "yes":
  fish_points += 8

elif question_5 == "no":
  Hamster_points += 9

elif question_5 == "yes":
   Lion_points += 10

else:
  print("\nNOT AN ANSWER, GET WITH THE PROGRAM!")

question_6 = input("Is your favorite color blue?: ")

if question_6 == "yes":
  Shark_points += 9

elif question_6 == "yes":
  fish_points += 8

elif question_6 == "no":
  Hamster_points += 9

elif question_6 == "no":
   Lion_points += 7

else:
  print("\nNOT AN ANSWER, GET WITH THE PROGRAM!") 

question_7 = input("Do you prefer hot, cold, warm, or cool?: ")

if question_7 == "cool":
  Shark_points += 9

elif question_7 == "cold":
  fish_points += 8

elif question_7 == "warm":
  Hamster_points += 9

elif question_7 == "hot":
   Lion_points += 15

else:
  print("\nNOT AN ANSWER, GET WITH THE PROGRAM!")

question_8 = input("Are you usually happy, sad, angry, or scared?: ")

if question_8 == "sad":
  Shark_points += 9

elif question_8 == "scared":
  fish_points += 10

elif question_8 == "happy":
  Hamster_points += 9

elif question_8 == "angry":
   Lion_points += 7

else:
  print("\nNOT AN ANSWER, GET WITH THE PROGRAM!")

question_9 = input("Are you a very social person in general yes, no, or maybe?: ")

if question_9 == "no":
  Shark_points += 9

elif question_9 == "yes":
  fish_points += 10

elif question_9 == "maybe":
  Hamster_points += 8

elif question_9 == "yes":
   Lion_points += 11

else:
  print("\nNOT AN ANSWER, GET WITH THE PROGRAM!")

question_10 = input("Do you have a crush?: ")

if question_10 == "no":
  Shark_points += 9

elif question_10 == "yes":
  fish_points += 9

elif question_10 == "no":
  Hamster_points += 9

elif question_10 == "yes":
   Lion_points += 9

else:
  print("\nNOT AN ANSWER, GET WITH THE PROGRAM!")








final_list = [Shark_points, fish_points, Hamster_points, Lion_points]

max_index = final_list.index(max(final_list))

if max_index == 0:
  print("You are a shark")

elif max_index == 1:
  print("you are a fish")

elif max_index == 2:
  print("You are a hamster")

elif max_index == 3:
  print ("You ae a lion")
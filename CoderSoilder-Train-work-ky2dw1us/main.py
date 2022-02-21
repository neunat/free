import random
import datetime
import time

# Mission find friend

def mission_find_friend():
  print("Where do you wannt to go?")
  print("[1]: To the brige")
  print("[2]: To the shop")
  print(" ")

  if input() == "1":
    print(f"({userfriend}): What took you so long?")
    print("What should you awnser?")
    print("[1]: I needed to work a litle bit (lie)")
    print("[2]: Becuse i was sleeping (truth)")
    if input() == "1":
      print(f"({userfriend}): We both knows thats an lie")
    else:
      print(f"({userfriend}): Thank you for being honest!")
  else:
    print(f"({userfriend}'s mom): {username} why are you at the shops?")

# Game play

print("Hello there user!")
print(" ")
username = input("What's ur name user? ")
print(" ")
print(f"{username} that's an nice name!")
print(f"{username} i have heard that your friend was looking for you!\n")

userfriend = input("What was your friend's name agin? ")

print(f"\nOh yea im so stupid ofcorse it is {userfriend}")

current_date = datetime.datetime.now().date()

print(f"{userfriend} wannted to meet you at {current_date} at the brige")
print(" ")
print(f"Mission: find {userfriend}")
print(" ")
mission_find_friend()
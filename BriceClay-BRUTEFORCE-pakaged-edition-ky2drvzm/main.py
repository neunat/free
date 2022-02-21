import random
import colorama
from colorama import Fore, Back, Style
enter = input(Back.BLACK + Fore.GREEN + "Hello welcome to BRUTE 1.3 type [ENTER] to begin.\n")
if enter == "enter" or enter == "Enter" or enter == "ENTER" or enter == "[ENTER]" or enter == "[enter]" or enter == "[Enter]":
  print("Haha you typed enter, you are a genius")
edition = input("Which version of BRUTE would you like to use\nA.BRUTE 1.0\nB.BRUTE 1.2: advanced edtion\n")
if edition == "A" or edition == "a" or edition == "A." or edition == "a." or edition == "BRUTE 1.0" or edition == "brute 1.0" or edition == "Brute 1.0":
  character = "abcdefghijklmnopqrstuvwxyz1234567890"
  character_list = list(character)
  password = input(Back.BLACK + Fore.GREEN + "Enter a password: ")
  guess = ""
  while (guess != password):
    guess = random.choices(character_list
    ,k=len(password))
    print("\|-->{" + str(guess) + "}<--|/")
    guess = "".join(guess)
  print(Fore.GREEN + "your password is -->'" + guess + "'<--")
if edition == "B" or edition == "b" or edition == "b." or edition == "B." or edition == "Brute 1.2 advanced edition" or edition == "BRUTE 1.2" or edition == "BRUTE 1.2 advanced edition" or edition == "brute 1.2 advanced edition" or edition == "BRUTE 1.2" or edition == "Brute 1.2" or edition == "brute 1.2":
  print(Fore.GREEN + Back.BLACK + "BRUTE 1.2\nBruteforce attack may take longer than the original because it has more characters such as the alfabet including capitals, sybols such as !,<,@,<,#, and $ and numbers 0-9. the estimated time for 1 digit is 0.001 sec, 2 digits is 2 - 6 sec, 3 digits is 10 - 20, and 4 digits is")
  character = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890~!@#$%^&*()_+{}|[]\-=:;<>?,./` "
  character_list = list(character)
  password = input("Enter a password: ")
  guess = ""
  while (guess != password):
    guess = random.choices(character_list
    ,k=len(password))
    print("\|-->{" + str(guess) + "}<--|/")
    guess = "".join(guess)
  print(Fore.GREEN + "your password is ---> " + guess + " <---")
else:
  print(Fore.RED + "ERROR: 102 uknown responce. please stop and then run repl again")
print("\n\n\n I hope you like this version of BRUTE if you dont want to have to go through the whole thing again go to https://replit.com/@BriceClay/advanced-brute-force-attack#main.py to do the newer version")
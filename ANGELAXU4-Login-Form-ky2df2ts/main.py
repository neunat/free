#Variables
username=input("Enter Username:")
password=input("\nEnter Password:")
#If both the username and password is correct
if username=="BobbyLobby" and password=="Bobby1234L":
  print("\nWelcome, BobbyLobby!")
#If the username is incorrect but the password is correct
elif username!= "BobbyLobby" and password == "Bobby1234L":
  print("\nIncorrect username, Please re-enter your username.")
#If the username is correct but the password is incorrect
elif username == "BobbyLobby" and password != "Bobby1234L":
  print("\nIncorrect password, Please re-enter password.")
#If both the username and password is incorrect
else:
  print("\nIncorrect username and password.")

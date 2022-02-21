import os

while True:
	user_command1 = input("Would you like to add or delete a file: ")

	if user_command1 == "add":
		user_command2 = input("Enter in a file name: ")
		user_command3 = input("Enter in what type of file: ")
		f = open(user_command2 + "." + user_command3, 'w')
		f.close()


	elif user_command1 == "delete":
		user_command2 = input("Enter in a file name: ")
		user_command3 = input("Enter in what type of file: ")
		if os.path.exists(user_command2 + "." + user_command3):
			os.remove(user_command2 + "." + user_command3)
		else:
			print("The file does not exist, please try again")
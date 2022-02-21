import os


class InsufficientFundsError(Exception):
    pass


class IllegalArgumentError(Exception):
    pass


balance = 100

def deposit(amount, balance):
	balance += amount
	return balance

def withdraw(amount, balance):
	if balance >= amount:
		balance -= amount
		return balance
	else:
		return False

while True:
	try:
		action = input(f"Balance: {balance}\n\nEnter an action:\n[1] Deposit\n[2] Withdraw\n--> ")
		amount = input("Enter an Amount:\n--> ")
		if amount.isdigit() == False:
			raise IllegalArgumentError
		if action == 1:
			balance = deposit(amount, balance)
			print(balance)
		elif action == 2:
			able = withdraw(amount, balance)
			if able == True:
				balance = withdraw(amount, balance)
			else:
				raise InsufficientFundsError
	except InsufficientFundsError:
		print("Insufficient Funds")
		input("Press Enter: ")
	except IllegalArgumentError:
		print("Invalid Input")
		input("Press Enter: ")
#	os.system("clear")
	
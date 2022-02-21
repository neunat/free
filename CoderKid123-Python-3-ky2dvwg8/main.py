class InsufficientFundsError(Exception):
    pass


class IllegalArgumentError(Exception):
    pass


balance = 1000
action = input(f"Balance: {balance}\nEnter an action:\n[1] Deposit\n[2] Withdraw\n--> ")
try:
	if action == 1:
		amount = int(input("Enter an amount to deposit:\n--> "))
		if isinstance(amount, int) == False:
			raise IllegalArgumentError()
		else:
			balance += amount
	if action == 2:
		amount = int(input("Enter an amount to withdraw:\n--> "))
		if isinstance(amount, int) == False:
			raise IllegalArgumentError()
		if amount > balance:
			raise InsufficientFundsError()
		else:
			balance -= amount
except IllegalArgumentError:
	print("Invalid Input. Please check the input")
except InsufficientFundsError:
	print("Insufficient Funds")
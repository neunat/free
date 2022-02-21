x = input("Enter an number: \n--> ")

#int, float, str
try:
	int(x)
	print(f"{x} is a integer input")
except ValueError:
	try:
		float(x)
		print(f"{x} is a float input")
	except:
		print(f"{x} is a string input")

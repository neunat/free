import random
numbers = []
for i in range(0, 21):
	numbers.append(random.randint(0, 1000))
print(numbers)
try:
	print("\nResource Open")
	index = int(input("Enter an index number:\n--> "))
	print(numbers[index])
except ValueError:
	print(f"Index Input not integer")
except IndexError:
	print(f"Index {index} not in list")
finally:
	print("\nResource Closed")

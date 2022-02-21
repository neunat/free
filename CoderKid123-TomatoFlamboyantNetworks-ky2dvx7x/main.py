class SpecialCharacterException(Exception):
	pass

try:
	string = input("Enter a letter of the alphabet:\n--> ")
	alpha = string.isalpha()
	if alpha == True:
		print(f"\n{string} is in the alphabet")
	else:
		raise SpecialCharacterException
except SpecialCharacterException:
	print(f"\n{string} is not in the alphabet")

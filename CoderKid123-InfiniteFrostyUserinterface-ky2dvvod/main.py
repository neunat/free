class NotVowelException(Exception):
	pass

def check_vowel(letter):
	if len(letter) > 1:
		return False 
	if letter in "AaEeIiOoUu":
		return True
	else:
		return False

try:
	letter = input("Enter a letter of the alphabet:\n--> ")
	vowel = check_vowel(letter)
	if vowel == True:
		print(f"\n{letter} is a vowel")
	else:
		raise NotVowelException
except NotVowelException:
	print(f"\n{letter} is a consonant")

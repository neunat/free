wow=['technique','introduction','profession']
while True:
	answer=input("Welcome to the guessing game!\n You will have hito	guess 1 of 3 words.(please input word now):")
	if answer in wow:
		print('You got it!')
		break 
	else:
		print('nope')


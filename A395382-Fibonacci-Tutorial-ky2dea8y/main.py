black = "\033[0;30m"
red = "\033[0;31m"
green = "\033[0;32m"
yellow = "\033[0;33m"
blue = "\033[0;34m"
magenta = "\033[0;35m"
cyan = "\033[0;36m"
white = "\033[0;37m"
bright_black = "\033[0;90m"
bright_red = "\033[0;91m"
bright_green = "\033[0;92m"
bright_yellow = "\033[0;93m"
bright_blue = "\033[0;94m"
bright_magenta = "\033[0;95m"
bright_cyan = "\033[0;96m"
bright_white = "\033[0;97m"
x1 = 0  
x2 = 1  
while True:  
	times = input(bright_cyan + "How many Fibonnaci terms?\n> " + bright_cyan)
	try:  
		for i in range(int(times)):
			print(bright_cyan + str(x1))
			next_x = x1 + x2
			x1 = x2
			x2 = next_x
		break  
	except:  
		print("Only integers!")
		pass  
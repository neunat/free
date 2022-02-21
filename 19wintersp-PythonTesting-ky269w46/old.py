#from msvcrt import getch, kbhit
#from time import sleep
import socket

print("Scanning for clients")

s = socket.socket()
s.bind((socket.gethostbyname(socket.gethostname()), 9002))
s.listen(1)
s.settimeout(0.1)

while True:
	print("loop")
	#sleep(0.1)

	try:
		_, a = s.accept()
		print("connect", a)
	except socket.timeout:
		pass
	except KeyboardInterrupt:
		break

	# logic goes here

	#if kbhit():
	#	print("gotch", getch())

s.close()

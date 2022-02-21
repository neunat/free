from webbot import Browser
from time import sleep
web = Browser()
web.go_to("https://www.google.com")
while True:
	sleep(0)
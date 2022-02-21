import time

def loading():
  print("Loading   ", end="\r")
  time.sleep(0.5)
  print("Loading.  ", end="\r")
  time.sleep(0.5)
  print("Loading.. ", end="\r")
  time.sleep(0.5)
  print("Loading...", end="\r")
  time.sleep(0.5)

loading(); loading(); loading()
#Loading bar that does literally nothing.

print(); print(); time.sleep(0.5); print("Success!")
#A "success" notification when failure is not an option.

time.sleep(0.5)

while True:
  consoleInput = input(" > ")

  while consoleInput:
    time.sleep(1)
    print("no more code for you!", end="\n")
    time.sleep(2)
    exit()
import random, string, time, os

def letters():
  return random.choice(list(string.ascii_letters))

def num():
  return random.choice(list(string.digits))

def other():
  return random.choice(list(string.punctuation))

def uhhh():
  return random.choice(['{', ']', '[', ']', '(', ')', '/', '\\' '\'', '"', '`', '~', ',', ';', ':', '.', '<' '>'])

while True:
  rep = input('Length: ')
  try:
    rep = int(rep)
    if rep >= 1:
      break
    else:
      raise ValueError
  except:
    print("not a number.")
    time.sleep(1)
    os.system("clear")

password = ""
function = [letters, num, other, uhhh]

for i in range(0, rep):
  hehehehe = random.choice(function)()
  password += hehehehe
  print(hehehehe, end="")
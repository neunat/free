backSyntax={"/back","back","/b","b"}

def multiply(loop):
  mInput = input("\nmode: multiply\n>> ")
  mInput.split("*")
  print("=="+""+"\n")
  if mInput in backSyntax:
    loop = 0
  elif loop == 1:
    multiply(1)

def divide(loop):
  dInput = input("\nmode: divide\n>> ")
  dInput.split("*")
  print("=="+""+"\n")
  if dInput in backSyntax:
    loop = 0
  elif loop == 1:
    divide(1)

def add(loop):
  aInput = input("\nmode: add\n>> ")
  aInput.split("*")
  print("=="+""+"\n")
  if aInput in backSyntax:
    loop = 0
  elif loop == 1:
    add(1)

def subtract(loop):
  sInput = input("\nmode: subtract\n>> ")
  sInput.split("*")
  print("=="+""+"\n")
  if sInput in backSyntax:
    loop = 0
  elif loop == 1:
    subtract(1)
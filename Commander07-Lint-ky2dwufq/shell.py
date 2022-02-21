import linter
def shell():
  while True:
    text = input("TEXT > ").split(" ")
    file = "<stdin>"
    linter.check(text, file)
def io():
    file = input("FILE > ")
    linter.check(open(file).read().split(" "), file)
choices = ["shell", "io"]
choices2 = ["y", "n"]
while True:
  choice = input("Input (shell/io): ").lower()
  choice2 = input("Hide Warnings (y/n): ").lower()
  if choice2 == "y":
    linter.hide_warns = True
  elif choice2 == "n":
    linter.hide_warns = False
  if choice in choices and choice2 in choices2:
    if choice == "shell":
      shell()
    else:
      io()
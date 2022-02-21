while 1 == 1:
  cheese = bool(input("What is your first number?"))
  cheese2 = input("What type of equation?")
  cheese3 = bool(input("What is your second number?"))

  if cheese2 == "*":
   sum = cheese * cheese3
  if cheese2 == "/":
    sum = cheese / cheese3
  if cheese2 == "+":
   sum = cheese + cheese3
  if cheese2 == "-":
    sum = cheese - cheese3
  print("The anwser is:",sum)
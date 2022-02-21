import os, time, copy

os.system("clear")

from num2words import num2words
import matplotlib.pyplot as plt

while True:
  try:
    print("Collatz Conjecture:")
    impt_val = int(input("Enter the Number to check:\n>>> "))
    new = copy.copy(impt_val)
    break
  except:
    print("Try Again. Thats not a number")
    time.sleep(3)
    os.system("clear")
    time.sleep(1)

iterations = 0
even_num = 0
odd_num = 0
value = []


while impt_val != 1:
  if (impt_val % 2 == 0) == True:
    print(f'{impt_val} is an even number...')
    impt_val = int(impt_val / 2)
    value.append(impt_val)
    iterations += 1
    even_num += 1
    time.sleep(1)
  else:
    print(f'{impt_val} is an odd number...')
    impt_val = int(impt_val * 3 + 1)
    value.append(impt_val)
    iterations += 1
    odd_num += 1
    time.sleep(1)

print(f"End. impt val equals {int(impt_val)}. It took {iterations} iterations.")

print(f"It was even {even_num} times and odd {odd_num} times.")

print(f"The biggest number was {max(value)}")

print(f"We started with {new}.")



Year = list(range(0, iterations))
yes = ["yes", "true", "True", "Yes", "y", "ye", "Y", "Ye", "Okie", "okie"]

if input("Would you like a graph made?\n>>> ") in yes:
  plt.plot(Year, value)
  plt.title('Collatz Conjecture:')
  plt.xlabel('Itarations:')
  plt.ylabel('Value:')
  plt.savefig(f'results/images/{new}.png')
  print("Graph Done")

if input("Would you like a file made?\n>>> ") in yes:
  f = open(f"results/num/{new}.txt", "a")
  f.write("".join(str(value)))
  f.write("\n\n")
  f.write(f"Itarations: {iterations}\n")
  f.write(f"Even: {even_num}\nOdd: {odd_num}\n")
  f.write(f"We started with: {new}\n")
  f.close()
  print("File Done")
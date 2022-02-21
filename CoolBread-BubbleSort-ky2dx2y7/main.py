# Bubble sort program
import random

# Create random list
unsortedList=(random.randint(1, 9),random.randint(1, 9),random.randint(1, 9),random.randint(1, 9),random.randint(1, 9),random.randint(1, 9),random.randint(1, 9),random.randint(1, 9),random.randint(1, 9))

# Display list
print(unsortedList)

# Sort list

lastSwap = True
#Used to check if any swaps have been made this loop

endSwap = False
#Used to end the until statement

checkValue = 1
#Used to determine what two numbers are being checked

listStorage = 0
#Used when swapping two values

until endSwap = True:

  lastSwap = True
  checkValue = 1

  for len(unsortedList)
    if unsortedList[checkValue] > unsortedList[checkValue + 1]
      listStorage = unsortedList[checkValue]
      unsortedList[checkValue] = unsortedList[checkValue + 1]
      unsortedList[checkValue + 1] = listStorage
      lastSwap = False
    checkValue = checkValue + 1
  
  if lastSwap = True
    endSwap = True
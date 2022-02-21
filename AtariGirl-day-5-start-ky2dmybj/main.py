# fruits = ["Apple", "Peach", "Pear"]
# for fruit in fruits:
#   print(fruit) #prints 3 times: 1) Apple 2) Peach 3) Pear; inside loop
#   print(fruit + " Pie") #inside loop
# print(fruits) #outside loop

#for number in range(1, 10):  Only counts 1-9

# for number in range(1, 11):
#   print(number)

# for number in range(1, 11, 3): #step size 3, steps by 3 until end of range
#   print(number)

total = 0
for number in range(1, 101):
  total += number
print(total)
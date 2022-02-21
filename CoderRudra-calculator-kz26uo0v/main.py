def add(x,y):
  #this function allows you to your add your numbers!
  return x + y

def subtract(x,y):
  #this function allows you to subtract your numbers!
  return x - y

def multiply(x,y):
  #this function allows you to multiplay your numbers!
  return x*y

def devide(x,y):
  #blah * 1000000000000000
  return x/y

print("select operation")
print("1. add")
print("2. subtract")
print("3. multiply")
print("4. divide")
choice = input("Enter choice 1/2/3/4 ")
num1 = int(input("Enter first number: "))
num2 = int(input("Enter second number: "))
if choice == "1":
 print(num1, "+", num2, "=", add(num1,num2))

elif choice == "2":
   print(num1, "-", num2, "=", subtract(num1,num2))

elif choice == "3":
   print(num1, "*", num2, "=", multiply(num1,num2))
elif choice == "4":
   print(num1, "/", num2, "=", devide(num1,num2))

else:
  print("invalid input!!!!!!!!!!!!!!")


import time

print("Calculator v0.1 - Collin Rosbrugh")
print("Welcome to my calculator, where you can peform a mathematical operation on 2 numbers of your choice.\n")

op_prompt = True #loop exits when an operation is chosen
m_prompt = False;d_prompt = False;a_prompt = False;s_prompt = False
#don't worry about these

multiplication = ["x", "×", "*", "m", "multiply", "multiplication"]
division = ["/", "÷", "d", "division", "divide"]
addition = ["+", "a", "add", "addition"]
subtraction = ["-", "s", "minus", "subtract", "subtraction"]
#what the user can input to select an operation

repeat = True
while repeat == True:

  #detects what operation the user selected and enters the desired loop
  while op_prompt == True:
    operation = input('What operation do you want to preform? (Type "list" for a list of operations)\n> ')

    if operation == "list":
      print('\nList of operations:\n- Type "multiplication" or "m" to multiply (x)\n- Type "divide" or "d" to divide (/)\n- Type "addition", "a", or "add" to add (+)\n- Type "subtract" or "s" to subtract(-)\n')

    elif operation in multiplication:
      m_prompt = True
      break

    elif operation in division:
      d_prompt = True
      break

    elif operation in addition:
      a_prompt = True
      break

    elif operation in subtraction:
      s_prompt = True
      break
  
    else:
     print("\nSorry, I don't recognize that operation.\n")

  #multiplication
  while m_prompt == True:
    try:
      m_first_number = int(input("\nWhat is the first number you would like to multiply? "))
      break
    except ValueError:
      print("Sorry, that is not a valid number.\n")
  while m_prompt == True:
    try:
      m_second_number = int(input("What is the second number? "))
      break
    except ValueError:
      print("Sorry, that is not a valid number.\n")
  while m_prompt == True:
    try:
      m_result = m_first_number * m_second_number
    except:
      print("\nSomething went wrong.");exit()
    print("\n=",m_result,"\n")
    m_prompt = False

  #division
  while d_prompt == True:
    try:
      d_first_number = int(input("\nWhat is the number you want to divide? "))
      break
    except ValueError:
      print("Sorry, that is not a valid number.\n")
  while d_prompt == True:
    try:
     d_second_number = int(input("What is the divisor? "))
     break
    except ValueError:
     print("Sorry, that is not a valid number.\n")
  while d_prompt == True:
    try:
     d_result = d_first_number / d_second_number
    except ZeroDivisionError:
      print("\nWhoops! Looks like you divided by zero. Sorry, but now time will collapse.");time.sleep(1);exit()
    except:
      print("\nSomething went wrong.");exit()
    print("\n=",d_result,"\n")
    d_prompt = False

  #addition
  while a_prompt == True:
    try:
     a_first_number = int(input("\nWhat number are you starting with? "))
     break
    except ValueError:
     print("Sorry, that is not a valid number.\n")
  while a_prompt == True:
    try:
      a_second_number= int(input("What number would you like to add? "))
      break
    except ValueError:
     print("Sorry, that is not a valid number.\n")
  while a_prompt == True:
   try:
     a_result = a_first_number + a_second_number
   except:
     print("\nSomething went wrong.");exit()
   print("\n=",a_result,"\n")
   a_prompt = False

  #subtraction
  while s_prompt == True:
    try:
     s_first_number = int(input("\nWhat number are you starting with? "))
     break
    except ValueError:
      print("Sorry, that is not a valid number.\n")
  while s_prompt == True:
    try:
      s_second_number= int(input("What would you like to subtract? "))
      break
    except ValueError:
     print("Sorry, that is not a valid number.\n")
  while s_prompt == True:
    try:
      s_result = s_first_number - s_second_number
    except:
     print("\nSomething went wrong.");exit()
    print("\n=",s_result,"\n")
    s_prompt = False
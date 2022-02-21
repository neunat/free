n = "\n"
p = "."

#Go With the Flow
#[This code is broken]

#Compare Closley!
bool_one = 17 < 328
print("bool_one is",bool_one)
bool_two = 100 == (2*5)
print("bool_two is",bool_two)
bool_three = 19 <= 19
print("bool_three is",bool_three)
bool_four = -22 >= -18
print("bool_four is",bool_four)
bool_five = 99 != (98+1)
print("bool_five is",str(bool_five)+n)

#Compare Closelier!
bool_one = (20-10) > 15
print("bool_one is",bool_one)
bool_two = (10+17) == 3**16
print("bool_two is",bool_two)
bool_three = 1**2 <= -1
print("bool_three is",bool_three)
bool_four = 40*4 >= -4
print("bool_four is",bool_four)
bool_five = 100 != 10**2
print("bool_five is",str(bool_five)+n)

#How the Tables Have Turned
bool_one = 3 < 5 #True
bool_two = 100 > 400 #False
bool_three = 726 >= 253 #True
bool_four = (10*10+1) <= 100 #False
bool_five = 2 > 1 #True

#To Be and/or Not to Be
#[Completed]

#And Statements
bool_one = False and False
bool_two = -(-(-(-2))) and 4 >= 16 ** 0.5
bool_three = 19 % 4 != 300 / 10 / 10 and False
bool_four = -(1 ** 2) < 2 ** 0 and 10 % 10 <= 20 - 10 *2
bool_five = True and True

#Or Statements
bool_one = 2 ** 3 == 108 % 100 or 'Cleese' == 'King Arthur'
bool_two = True or False
bool_three = 100 ** 0.5 >= 50 or False
bool_four = True or True
bool_five = 1 ** 100 == 100 ** 1 or 3 * 2 * 1 != 3 + 2 + 1
bool_five = True and True

#Not Statements
bool_one = not True
bool_two = not 3 ** 4 < 4 ** 3
bool_three = not 10 % 3 <= 10 % 2
bool_four = 3 ** 2 + 4 ** 2 != 5 ** 2
bool_five = not not False
bool_five = True and True

#Mix 'n Match
bool_one = (2 <= 2) and "Alpha" == "Bravo" #False
bool_two = 72 > 60 and "me" == "me" #True
bool_three = not True #False
bool_four = not not not not not not not not True #True
bool_five = 1 > 0 or "Potatoes" == "\r" #True

#Conditional Statement Syntax
response = "N" #In the example code, there are 2 indents, leading to a SyntaxError, probably

#If You're Having...
answer = "\n"

def black_knight():
    if answer == "'Tis but a scratch!":
        return not False
    else:             
        return  False      # Make sure this returns False

def french_soldier():
    if answer == "Go away, or I shall taunt you a second time!":
        return 1 == 1 or 48 >= 831
    else:             
        return  False      # Make sure this returns False

black_knight()
french_soldier()

#Else Problems, I Feel Bad For You, Son...
def greater_less_equal_5(answer):
    if answer > 5:
        return 1
    elif answer < 5:          
        return -1
    else:
        return 0
        
print(greater_less_equal_5(4))
print(greater_less_equal_5(5))
print(str(greater_less_equal_5(6))+n)

#The Big If
def grade_converter(grade):
    if grade >= 90:
        return "A"
    elif grade >= 80:
        return "B"
    elif grade >= 70:
        return "C"
    elif grade >= 60:
        return "D"
    else:
        return "F"
      
# This should print an "A"      
print(grade_converter(92))

# This should print a "C"
print(grade_converter(70))

# This should print an "F"
print(grade_converter(61))
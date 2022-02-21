print "Lesson1: Go With the Flow"
def clinic():
    print "You've just entered the clinic!"
    print "Do you take the door on the left or the right?"
    answer = raw_input("Type left or right and hit 'Enter'.").lower()
    if answer == "left" or answer == "l":
        print "This is the Verbal Abuse Room, you heap of parrot droppings!"
    elif answer == "right" or answer == "r":
        print "Of course this is the Argument Room, I've told you that already!"
    else:
        print "You didn't pick left or right! Try again."
        clinic()

clinic()
print "Lesson2: Compare Closely"
# Assign True or False as appropriate on the lines below!

# Set this to True if 17 < 328 or to False if it is not.
bool_one = 17 < 328   # We did this one for you!

# Set this to True if 100 == (2 * 50) or to False otherwise.
bool_two = 100 == (2 * 50)

# Set this to True if 19 <= 19 or to False if it is not.
bool_three = 19 <= 19

# Set this to True if -22 >= -18 or to False if it is not.
bool_four = -22 >= -18

# Set this to True if 99 != (98 + 1) or to False otherwise.
bool_five = True

print "bool_one ", bool_one
print "bool_two ", bool_two
print "bool_three ", bool_three
print "bool_four ", bool_four
print "bool_five ", bool_five

print "Lesson3: Compare Closelier"
# Assign True or False as appropriate on the lines below!

# (20 - 10) > 15
bool_one =  (20 - 10) > 15   # We did this one for you!

# (10 + 17) == 3**16
# Remember that ** can be read as 'to the power of'. 3**16 is about 43 million.
bool_two = (10 + 17) == 3**16

# 1**2 <= -1
bool_three = False

# 40 * 4 >= -4
bool_four = True

# 100 != 10**2
bool_five = False

print "bool_one ", bool_one
print "bool_two ", bool_two
print "bool_three ", bool_three
print "bool_four ", bool_four
print "bool_five ", bool_five


print "Lesson4: How the Tables Have Turned"
# Create comparative statements as appropriate on the lines below!

# Make me true!
bool_one = 3 < 5  # We already did this one for you!

# Make me false!
bool_two = 100 > 400

# Make me true!
#bool_three = 

# Make me false!
#bool_four = 

# Make me true!
#bool_five = 

print "bool_one ", bool_one
print "bool_two ", bool_two
print "bool_three ", bool_three
print "bool_four ", bool_four
print "bool_five ", bool_five


print "Lesson5: To Be and or Not to Be"
print "Lesson5: And"
print "Lesson5: Or"
print "Lesson5: Not"
print "Lesson5: This and That (or This, But Not That)"

bool_one = False and False

bool_two = -(-(-(-2))) and 4 >= 16**0.5

bool_three = 19 % 4 != 300 /10 /10 and False

#bool_four =

#bool_five = 

print "bool_one ", bool_one
print "bool_two ", bool_two
print "bool_three ", bool_three
print "bool_four ", bool_four
print "bool_five ", bool_five


print "Lesson6: Mix n Match"
# Use boolean expressions as appropriate on the lines below!

# Make me false!
bool_one = (2 <= 2) and "Alpha" == "Bravo"  # We did this one for you!

# Make me true!
bool_two = 72 > 60 and "me" == "me"

# Make me false!
#bool_three = 

# Make me true!
#bool_four = 

# Make me true!
#bool_five = 

print "bool_one ", bool_one
print "bool_two ", bool_two
print "bool_three ", bool_three
print "bool_four ", bool_four
print "bool_five ", bool_five


print "Lesson7: Conditional Statement Syntax"

response = "Y"

answer = "Left"

if 8<9:
	print "this is obvious"

if answer == "Left":
    print "This is the Verbal Abuse Room, you heap of parrot droppings!"
    
# Will the above print statement print to the console?
# Set response to 'Y' if you think so, and 'N' if you think not.

print "Lesson8: If Youre Having"

def using_control_once():
    if 8<9:
        return "Success #1"

def using_control_again():
    if 8<10:
        return "Success #2"

print using_control_once()
print using_control_again()

print "Lesson9: Else Problems, I Feel Bad for You Son"

answer = "'Tis but a scratch!"

def black_knight():
    if answer == "'Tis but a scratch!":
        return True
    else:             
        return  False      # Make sure this returns False

def french_soldier():
    if answer == "Go away, or I shall taunt you a second time!":
        return True
    else:             
        return  False      # Make sure this returns False

print black_knight()
print french_soldier()
				
print "Lesson10: I Got 99 Problems..."

def greater_less_equal_5(answer):
    if answer > 5:
        return 1
    elif answer < 5:          
        return -1
    else:
        return 0
        
print greater_less_equal_5(4)
print greater_less_equal_5(5)
print greater_less_equal_5(6)

print "Lesson11: The Big If"

# Complete the if and elif statements!
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
print grade_converter(92)

# This should print a "C"
print grade_converter(70)

# This should print an "F"
print grade_converter(61)

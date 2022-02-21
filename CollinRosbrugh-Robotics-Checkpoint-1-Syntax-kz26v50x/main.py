print("Hello World!") #Hello World

print("\nThis is a long print statement that involves many characters being printed onto the console screen to convey a redundant message to the reader.") #Print Statements

print("\nHello, " + "Collin!") #Strings

##################  Handling Errors  ##################
print("\nMismatched quotes will cause a SyntaxError,")
print("Without quotes will cause a NameError.")
##################  Handling Errors  ##################

date = "5/11/2020" #Variables
print("\nDate Written:",date)

#################  Updating Variables  ################
jan_june_rain = 1.93 + 0.71 + 3.53 + 3.41 + 3.69 + 4.50
annual_rain = jan_june_rain

july_rain = 1.05
annual_rain += july_rain

august_rain = 4.91
annual_rain += august_rain

september_rain = 5.16
october_rain = 7.20
november_rain = 5.06
december_rain = 4.06

annual_rain += september_rain
annual_rain += october_rain
annual_rain += november_rain
annual_rain += december_rain

print("\nAnnual rain level: "+str(annual_rain))
#################  Updating Variables  ################

a = 5; b = 9
print("\nDid you know that 5 × 9 is "+str(a*b)+"?") #Arithmetic

#Population of San Jose
city_population = 1030000 #Comments

######################  Numbers  ######################
cucumbers1 = float(input("\nHow many cucumbers do you want to buy?: "))
price_per_cucumber = 3.25 #(in doubloons)
total_cost = cucumbers1 * price_per_cucumber

print("That'll be "+str(total_cost)+" moneys, please.")
######################  Numbers  ######################

###############  Two Types of Division  ###############
cucumbers = 100
num_people = 6
cucumbers_per_person = cucumbers / num_people

print("\nBefore rounding:",str(cucumbers_per_person))
float_cucumbers_per_person = float(cucumbers / num_people)
print("After rounding:",str(float_cucumbers_per_person))
#I have no idea how to get this example to round correctly so I'm moving on now

###############  Two Types of Division  ###############

haiku = """The old pond,
A frog jumps in:
Plop! """
print("\n"+haiku) #Multi-line strings

age_is_12 = False
name_is_maria = True #Booleans

float_1 = 7
float_2 = 14
product = float_1 + float_2
print("\nThe product (7+14) is",str(product)) #ValueError

skill_completed = "Python Syntax"
exercises_completed = 13
points_per_exercise = 5
point_total = 100
point_total += exercises_completed * points_per_exercise
print("\nPoint total:",str(point_total)) #Review
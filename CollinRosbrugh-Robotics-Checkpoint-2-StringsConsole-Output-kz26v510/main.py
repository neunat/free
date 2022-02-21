n = "\n"
p = "."

#Strings
brian = "Hello, Brian!"
print(brian+n)

#Practice
caesar = "Graham"
praline = "John"
viking = "Teresa"

#Escaping Characters
print('There\'s a snake in my boot!'+n)

#Access by Index
c = "cats"[1]
r = "Ryan"[3]
print("Index:",c,r+n)

fifth_letter = "Monty"[4]
print(fifth_letter+n)

#String Methods
parrot = "Norwegian Blue"
print("There are",str(len(parrot)),"letters in",'"'+parrot+'."'+n)

#lower()
print('"'+parrot+'"',"in lowercase is",'"'+parrot.lower()+'."'+n)

#upper()
print('"'+parrot+'"',"in uppercase is",'"'+parrot.upper()+'"'+n)

#str()
pi = 3.1415
print("Pi is equal to",str(pi)+p+n)

#Dot Notation
ministry = "I'm not sure what this variable is for"
print(len(ministry))
print(ministry.upper()+n)

#Printing Strings
print("I'm printing this string to the console!"+n) #Well that was easy...

#String Concatenation
print("Spam "+"and "+"eggs."+n) #Commas would work better here...

#Explicit String Conversion
print("I have",str(3.141),"coconuts!"+n)

#String Formatting With %
#The code will replace the "%s" with the date, but not the "%02.".
day = 6
print("03 - %s - 2020" % (day)+n)

#Something Familiar
my_string = "This is the best string to ever be printed to the console!"
print(my_string,"It's %s characters long!" % (len(my_string))+n)
print("It can even be uppercase with .upper()!"+n+my_string.upper())
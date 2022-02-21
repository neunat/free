#Write a function that takes one parameter called “FullName” and returns two strings. The first is the forename and the second is the surname. Full names will always include a space between the forename and the surname. E.g. “John Smith”.

def splitName (fullName):
  
  spaceLocation = fullName.find(" ")
  firstName = fullName[0:spaceLocation]
  lastName = fullName[(spaceLocation+1):]
  return firstName,lastName

first,last = splitName ("FIRST LAST")
print (first)
print (last)
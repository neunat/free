#A valid email address must contain an @ symbol and at least one dot. Write a function that provides basic validation of an email address, returning True if the address is valid and False if the address is invalid.

#checkAddress
def checkAddress (email):

  validEmail = True
  #Check to see if email has an @ sign
  if email.find ("@") == -1:
    validEmail = False

  #Check to see if email has an . sign
  if email.find (".") == -1:
    validEmail = False

  return validEmail

#Main Program
if checkAddress (input("Enter email")):
  print ("Lovely")
else:
  print("U suck")
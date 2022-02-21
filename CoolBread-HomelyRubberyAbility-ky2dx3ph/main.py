#teacherCodeProblem
#Many schools use the initials of teachers for usernames and identifiers in timetables. Write a function called “Initials” that takes three parameters, the first name, middle name and surname of the teacher and returns just their initials as a single string in uppercase. If the middle name is an empty string, it is replaced with the letter Z.

#definingFunction
def initials (first,mid,surname):
  firstInitial = first[0].upper()
  #errorCheck
  if (mid != ""):
    midInitial = mid[0].upper()
  else :
    midInitial = "z"
  surnameInitial = surname[0].upper()
  print(firstInitial,midInitial,surnameInitial)

#mainProgram
initials (input("Input first name"),input("Input middle name. If none, press enter"),input("Input last name"))
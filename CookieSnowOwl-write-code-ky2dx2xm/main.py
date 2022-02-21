inputlist = []
print("Write your code. When you are finished with the code, input end. Please use double spaces instead of tabs for indents.")
while True:
  x = input()
  if x == "end":
    break
  else:
    inputlist.append(x)
print(inputlist)
thecode = ''''''
for i in range(0, len(inputlist)):
  thecode += "\t" + inputlist[i] + "\n"
  print(thecode)
tobeexec = '''
from traceback import format_exc as f_e
try:
''' + thecode + '''
except Exception as ex:
  print(f_e())'''
print(tobeexec)
print("\n\n\nResult>>\n")
exec(tobeexec)
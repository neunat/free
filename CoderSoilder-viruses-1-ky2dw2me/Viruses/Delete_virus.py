import os

files = os.listdir()

for i in files:
  if i.endswith(".py"):
    pass
  else:
    os.remove(i)

print("Done!")
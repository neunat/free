animal=["Monkey","Dog","Cat"]
for i in animal:
  print(i)
print("Printing first animal-->",animal[0])
animal.append("Horse")
animal.insert(4,"Elephant")
animal.extend(["Fox", "Rabbit"])
print("Printing list with updated values:")
for i in animal:
  print(i)


animal.pop(4)
print("Printing list with updated values:")
for i in animal:
  print(i)
  






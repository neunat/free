functions = {"System.out.println": "print"}
remove = ";"
with open("main.java", "r") as f:
  for line in f.readlines():
    line = line.strip(remove)
    for key in functions:
      line = line.replace(key, functions[key])
    print(line)
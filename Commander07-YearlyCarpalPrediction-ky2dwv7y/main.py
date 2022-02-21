def interp(file_name):
  lines = open(file_name).readlines()
  trace = open(f"{file_name}.trace", "a+")
  trace.truncate(len(trace.read()))
  stack = []
  ln = 1
  for line in lines:
    col = 0
    str_start = False
    str_com = ""
    for word in line.split(" "):
      if word == "":
        continue
      if "\n" in word and word[-1] == "\n":
        word = word[:-1]
      if str_start:
        str_com += word[:-1]
        str_com += " "
      if word == "+":
        a = stack.pop()
        b = stack.pop()
        stack.append(b+a)
      elif word == "-":
        a = stack.pop()
        b = stack.pop()
        stack.append(b-a)
      elif word == "*":
        a = stack.pop()
        b = stack.pop()
        stack.append(b*a)
      elif word == "/":
        a = stack.pop()
        b = stack.pop()
        stack.append(b/a)
      elif word == "%":
        a = stack.pop()
        b = stack.pop()
        stack.append(b%a)
      elif word == "&":
        a = stack.pop()
        b = stack.pop()
        stack.append(b&a)
      elif word == "|":
        a = stack.pop()
        b = stack.pop()
        stack.append(b|a)
      elif word == "<<":
        a = stack.pop()
        b = stack.pop()
        stack.append(b<<a)
      elif word == ">>":
        a = stack.pop()
        b = stack.pop()
        stack.append(b>>a)
      elif word == "^":
        a = stack.pop()
        b = stack.pop()
        stack.append(b^a)
      elif word == "**":
        a = stack.pop()
        b = stack.pop()
        stack.append(b**a)
      elif word == "print":
        a = stack.pop()
        print(a)
      elif word == "dup":
        a = stack.pop()
        stack.append(a)
        stack.append(a)
      elif word[0] == "\"":
        str_com += word[1:]
        str_start = True
        str_com += " "
        if word[-1] == "\"":
          str_start = False
          stack.append(str_com[:-2])
          str_com = ""
      elif word[-1] == "\"":
        if str_start:
          str_start = False
          stack.append(str_com[:-1])
          str_com = ""
        else:
          print(f"Error on line: {ln}, col: {col}\nMismatched string")
      elif word == "//":
        break
      else:
        try:
          stack.append(int(word))
        except ValueError:
          print(f"Error on line: {ln}, col: {col}\nUnknown op: '{word}'")
          exit(1)
      trace.write(f"{word=}\t{stack=}\t{ln=}\t{col=}\n")
      col += len(word)+1
    ln += 1
  trace.close()
interp("test.lang")
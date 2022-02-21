import os
import compile

for file in os.listdir('execute'):
  if file.endswith('.md2'):
    code = open('execute/' + file)
    lines = code.readlines();
    lines = [line.rstrip() for line in lines]

    print(lines);
    compile.send(lines);

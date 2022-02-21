import json
from os import system as sys
with open("chat.json", "r") as jsonfiler:
  json_object = json.loads(jsonfiler.read())
print(json_object)
jsonfilew = open("chat.json", "w")
jsonfilew.write(json.dumps({"0": {"Administrator": "This is the start of the chat."}}))
name = input("What is your name: \t")
alive = True
iterated = int(list(json_object)[len(json_object)-1])
while alive:
  sys('clear')
  for key in json_object:
    print(next(iter(json_object[key])) + ": " + json_object[key][next(iter(json_object[key]))] + "\n")
  newtext = input("\n\nSend a message:\t")
  iterated += 1
  json_object[str(iterated)] = {name: newtext}
  jsonfilew.write(json.dumps(json_object, sort_keys = True))
  #jsonfilew.flush()
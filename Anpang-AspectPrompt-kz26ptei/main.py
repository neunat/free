entcmds = [] # Saves all entered commands
entnum = 0 # Number of entered commands
promptversion = "1.0 Patch 1" # AspectPrompt version
osversion = "1.0" # AspectOS version

def add(text):
  print(text) # print("") is replaced with add("") because when this is modified to fit in with s2py, instead of having to replace all print("") with the s2py set cloud var command, we only need to replace this print("") in this function with the s2py set cloud var command (instead of having to replace a LOT of print with s2py set, we just need to change this one)

def lines():
  add("--------------------------")

def promptreset():
  lines()
  add(f"AspectPrompt {promptversion} (for {osversion})\nStart typing a command and press enter to run it\nType in cmdlist for a list of commands")

promptreset()
while True:
  lines()
  cmd = input("Enter command >> ")
  entcmds.append(cmd)
  entnum = entnum + 1
  if cmd == "clear":
    print("\n" * 100) # Replace this with erase all in scratch when ported to s2py
    promptreset()
    lines()
    add("Cleared prompt")
  elif cmd.startswith("cmdlist"):
    if cmd == "cmdlist":
      lines()
      add("AspectPrompt Command List\nType in cmdlist gen for general commands\n")
    elif cmd 
  else:
    add("Unknown command. Type in cmdlist for a list of commands.")
import colorama

red = colorama.Fore.RED
blue = colorama.Fore.BLUE
yellow = colorama.Fore.LIGHTYELLOW_EX

reset = colorama.Style.RESET_ALL

print(f"{blue}Python{reset} {yellow}Console{reset}!")

lines = 0

while True:
  lines += 1

  code = input("> ")

  if code == "exit()" or code == "quit()":
    exit()

  try:
    exec(code)

  except:
    print(f"{red}Error detected on Line {lines}{reset}")
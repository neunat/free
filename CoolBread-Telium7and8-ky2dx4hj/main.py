#Section 7 - Intuition
def intuition():
  global possible_moves, workers, vent_shafts, queen, info_panels
  for connected_module in possible_moves:
    if connected_module in workers:
      print("You can hear something scuttling in the next module.")
    if connected_module in vent_shafts:
      print("You can feel cold air coming from the next module.")
    if connected_module in info_panels:
      print("You can hear the low robotic hum of an information panel in the next module along.")
    if connected_module in queen:
      print("You can hear her. She's nearby.")


#Section 8 - The scuttly boys
def worker_aliens():
  global module, workers, fuel, alive
  if module in workers:
    print("Upon entering the module, you see a young alien scuttle across the floor.")
   print("It leaps towards you.")
   #Get action
   successful_attack == False
   while successful_attack == False
   print("You can:")
   print("")
   print("- Short blast your flamethrower to frighten it away.")
   print("- Long blast your flamethrower to try to kill it.")
   print("")
   print("How will you react?")
   action = 0
   while action not in ("S","L"):
     action = input("Enter S or L (Lowercase only)")
    fuel_used = int(input("How much fuel will you use?"))
    if action == "s":
      print("(For a short blast, the amount of fuel needed ranges from 30 to 80 in steps of 10.)")
    if action == "l":
      print("(For a long blast, the amount of fuel needed ranges from 90 to 140 in steps of 10.)")
    fuel = fuel - fuel_used
    #Check if player has run out of fuel
    if fuel <= 0:
      alive = False
      return
    #Work out how much fuel is needed
    if action == "s":
      fuel_needed = 30 + 10*random.randint(0,5)
    if action == "l":
      fuel_needed = 90 + 10*random.randint(0,5)
    #Try again if not enough fuel was used
    if action == "s":
      print("The alien scuttles away into the corner of the room.")
    if action == "l":
      print("The alien has been destroyed.")
    workers.remove(module)
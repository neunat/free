# Two players take turns to pick up 1, 2 or 3 matchsticks from a pile of 27 matchsticks.  The player who picks up the last matchstick loses.

sticksRemaining = 27
player = 1

while sticksRemaining > 1:
  print("Player ",player,"'s turn. Pick a number between 1 and 3.")
  pickUp = int(input())

  sticksRemaining =  sticksRemaining - pickUp

  print(sticksRemaining)

  if player == 1:
    player = 2  
  else:
    player = 1
#!/usr/bin/env python3

import atlastk, random

# DEBUG = True  # Uncomment for debug mode.

LIMIT = 100

SPY = 0
PLAY = 1
WAIT = 2

class User:
  def __init__(self):
    self.player = 0


def debug():
  try:
    return DEBUG
  except:
    return False


def init():
  global current, available, scores, turn, dice
  current = 1 # 1 or 2

  available = 1 # 0 (no more player available), 1 or 2

  scores = {
    1: 0,
    2: 0
  }

  turn = 0  
  dice = 0


def get_status(player):
  if player == 0:
    if available == 0:
      return SPY
    elif available == current:
      return PLAY
    else:
      return WAIT
  elif player == current:
    return PLAY
  else:
    return WAIT


def fade(dom, element):
  dom.remove_class(element, "fade-in")
  dom.flush()
  dom.add_class(element, "fade-in")


METER = '<span class="{}" style="width: {}%;"></span>'


def update_meter(dom, ab, score, turn, dice): # turn includes dice
  if score + turn > LIMIT:
    turn = LIMIT - score

  if turn != 0:
    dom.end(f"ScoreMeter{ab}", METER.format("fade-in dice-meter", dice))
  else:
    dom.inner(f"ScoreMeter{ab}", METER.format("score-meter", score))

  dom.set_content(f"ScoreText{ab}", score)


def disable_play_buttons(dom):
  dom.disable_elements(["Roll", "Hold"])


def enable_play_buttons(dom):
  dom.enable_elements(["Roll", "Hold"])


def get_opponent(player_ab):
  if player_ab == 'A':
    return 'B'
  elif player_ab == 'B':
    return 'A'
  elif player_ab == 1:
    return 2
  else:
    return 1


def mark_player(dom, ab):
  if ab == 'B':
    dom.disable_element("DisplayMarkerA")
  else:
    dom.enable_element("DisplayMarkerA")


def display_dice(dom, value):
  fade(dom, "dice")

  if value <= 6:
    filename = f"dice-{value}.svg" if value != 0 else "Pig.svg"
    dom.inner("dice", open(filename).read())


def update_meters(dom, status):
  if status == SPY:
    update_meter(dom, 'A', scores[1], turn if current == 1 else 0, dice if current == 1 else 0)
    update_meter(dom, 'B', scores[2], turn if current == 2 else 0, dice if current == 2 else 0)
  else:
    a = current
    me = True

    if status == WAIT:
      a = get_opponent(a)
      me = False

    b = get_opponent(a)

    update_meter(dom, 'A', scores[a], turn if me else 0, dice if me else 0)
    update_meter(dom, 'B', scores[b], 0 if me else turn, 0 if me else dice)


def update_markers(dom, status):
  if status == WAIT:
    mark_player(dom, 'B')
  elif status == PLAY:
    mark_player(dom, 'A')
  else: # SPY
    mark_player(dom, 'A' if current == 1 else 'B')


def update_play_buttons(dom, status, winner):
  if status != PLAY or winner != 0:
    disable_play_buttons(dom)
  else:
    enable_play_buttons(dom)


def display_turn(dom, element, value):
    fade(dom, element)
    dom.set_content(element, value)


def update_dice(dom, winner):
  if winner != 0 or turn != 0 or dice in [0, 1]:
    display_dice(dom, dice)


def update_turn(dom, winner):
  if winner == 0:
    display_turn(dom, "Cumul", turn if turn != -1 else 0)
    display_turn(dom, "Total", scores[current] + (turn if turn != -1 else 0))


def report_winner(dom, player, winner):
  if winner == player or player == 0 and winner == 1:
    ab = 'A'
  else:
    ab = 'B'

  dom.set_content(f"ScoreMeter{ab}", "<span class='winner'>Winner!</span>")


def update_layout(dom, player):
  status = get_status(player)

  if scores[1] >= LIMIT:
    winner = 1
  elif scores[2] >= LIMIT:
    winner = 2
  else:
    winner = 0

  update_play_buttons(dom, status, winner)
  update_dice(dom, winner)
  update_turn(dom, winner)
  update_meters(dom, status)
  update_markers(dom, status)

  if winner != 0:
    report_winner(dom, player, winner)


def display(dom, user):
  if user.player != 0:
    dom.enable_element("New")

  if available == 0 and user.player == 0:
    dom.disable_element("PlayerView")

  update_layout(dom, user.player)


def ac_connect(user, dom):
  dom.inner("", open("Main.html").read())

  if debug():
    dom.remove_class("debug", "removed")

  display(dom, user)


def ac_roll(user, dom):
  global available, current, dice, turn, scores

  disable_play_buttons(dom)

  if user.player == 0:
    user.player = current

    if available == 1:
      available = 2
    elif available == 2:
      available = 0
  elif user.player != current:
    return

  dice = random.randint(1, 6)

  if debug():
    debug_dice = dom.get_content("debug")
    if debug_dice:
      dice = int(debug_dice)

  if dice == 1:
    current = get_opponent(current)
    turn = 0
  else:
    turn += dice

    if scores[current] + turn >= LIMIT:
      scores[current] = LIMIT
      turn = 0

  atlastk.broadcast_action("Display")


def ac_hold(user, dom):
  global scores, turn, current

  disable_play_buttons(dom)  

  if user.player != current:
    return

  scores[user.player] += turn
  current = get_opponent(current)
  turn = 0
  atlastk.broadcast_action("Display")


def ac_new():
  init()
  atlastk.broadcast_action("Display")


def ac_display(user, dom):
  if current == 1 and available == 1:
    dom.inner("", open("Main.html").read())
    dom.enable_element("PlayerView")
    if debug():
      dom.remove_class("debug", "removed")
    user.player = 0
  display(dom, user)


CALLBACKS = {
  "": ac_connect,
  "Roll": ac_roll,
  "Hold": ac_hold,
  "New": ac_new,
  "Display": ac_display
}

init()

atlastk.launch(CALLBACKS, User, open("Head.html").read())
clear
function Bstart {
  echo " Welcome"
  echo " This is really laggy Super Mario with a calculator. To play fork this Game and then make it so that it only covers a console and then press run. Put selection with no spaces.Super Mario Instructions: To move you will have to type move. To move backward you will have to type back. To jump you have to type jump. For a long jump, you will have to put movejump. There will be four levels per world. There are 4 worlds in total. At the end of each world, you will face a boss. To exit at ant time type eback.

 Please comment with suggestions. There is only one level at the moment.

 PS: For best experience play on PC.

 Once You finsh reading this type Intro to start to game.
 "
 read op2 
 if [ $op2 = Intro ]; then 
 clear
 intro
 else 
 echo "Inviald Option"
 echo "Try Agian"
 Bstart

 fi
}
function intro {

 echo " Please enter Your name"
 read name
 clear
 if [ $name = Developer ]; then 
 echo "For best experince play in full screen"
 echo " Tip = press back one you start SuperMario and then type end"
 sleep 1.5s
 else
 echo "For best experince play in full screen"
 sleep 1.5s
 
 fi
 clear
 Menu
}
function Menu {
 echo -e "\e[0;0m"
 echo "                                                                                                                                                                                    " 
 echo "                                                                                                                                                                                    "
 echo "                                                                                                                                                                                    "
 echo "                                                                                                                                                                                    "
 echo "                                                                                                                                                                                    "
 echo "                                                                                                                                                                                    "
 echo "                                                                                          _______                                                                                   "
 echo "                |      |         |                                                              /                                                                                   "
 echo "                |      |   ___   |    ___    ___    __  __     ___       ---   ___             /         ___     |__   ___                                                          "
 echo "                |  /\  |  /___\  |   /      /   \  /  \/  \   /___\       |   /   \           /         /___\    /    /   \                                                         "
 echo "                 \/  \/   \___   |   \___   \___/  |      |   \___        |   \___/          /_____     \___     |    \___/                                                         " 
 echo "                                                                                                                                                                                    "
 echo "                                                         $name                                                                                                                      "
 echo "                                                                                                                                                                                    "
 echo "                                                   __________________                                                                                                               "
 echo "                                                  |                  |                                                                                                              "
 echo "                                                  |  Super Mario     |                                                                                                              "
 echo "                                                  |__________________|                                                                                                              "
 echo "                                                                                                                                                                                    "
 echo "                                                   __________________                                                                                                               "
 echo "                                                  |                  |                                                                                                              "
 echo "                                                  |  Calculator      |                                                                                                              "
 echo "                                                  |__________________|                                                                                                              "
 echo "                                                                                                                                                                                    "
 echo "                                                                                                                                                                                    "
 echo "                                                                                                                                                                                    "
 echo "                                                                                                                                                                                    "
 echo "                                                                                                                                                                                    "
 echo "                                                                                                                                                                                    "
 echo "                                                                                                                                                                                    "
 echo "                                                                                                                                                                                    "
 read op1
 if [ $op1 = Calculator ]; then
 clear 
 calculator
 elif [ $op1 = SuperMario ]; then
 clear
 MarioMenu
 else 
 echo "Inviald Option"
 echo "Try Agian"
 sleep 1.5s
 clear 
 Menu

 fi
}
function MarioMenu {
 clear
 echo -e "\e]30;49m"
 echo -e "\e[30;44m"
 echo "                                                                                                                                                                                    " 
 echo "                                                                                                                                                                                    "
 echo "                                                                                                                                                                                    "
 echo "                                                                                                                                                                                    "
 echo "                                                                                                                                                                                    "
 echo "                                                                                                                                                                                    "
 echo "                                                                                              ____                                    ____  ____                                    "
 echo "                |      |         |                                                           /                                       /    \/    \                 .                 "
 echo "                |      |   ___   |    ___    ___    __  __     ___       ---   ___           |               ___     ___    |__      |          |    __    |__         ___          "
 echo "                |  /\  |  /___\  |   /      /   \  /  \/  \   /___\       |   /   \           \__    |  |   /   \   /___\   /        |          |   /  \   /      |   /   \         "
 echo "                 \/  \/   \___   |   \___   \___/  |      |   \___        |   \___/              \   \__/   |___/   \___    |        |          |   \__/-  |      |   \___/         "
 echo "                                                                                             ____/          |                                                                       "
 echo "                                                                                                            |                                                                       "
 echo "                                                                                                                                                                                    "
 echo "                                                                                                                                                                                    "
 echo "                                    Made by:Elisha-Blessed Z.                                                                                                                       "
 echo "                                                                                                                                                                                    "
 echo "                                                                                                                                                                                    "
 echo "                                                                                                                                                                                    "
 echo "                                                    ____________                                                                                                                    "
 echo "                                                   |            |                                                                                                                   "
 echo "                                                   |    Play    |                                                                                                                   "
 echo "                                                   |____________|                                                                                                                   "
 echo "                                                    ____________                                                                                                                    "
 echo "                                                   |            |                                                                                                                   "
 echo "                                                   |How to Play |                                                                                                                   "
 echo "                                                   |____________|                                                                                                                   "
 echo "                                                                                                                                                                                    "
 echo "                                                                                                                                                                                    "
 echo "                                                                                                                                                                                    "
 echo "                                                                                                                                                                                    "
 read option1

 if [ $option1 = Play ]; then
  clear
  lvl1a

 elif [ $option1 = HowToPlay ]; then 
  clear
  instructions
 
 elif [ $option1 = eback ]; then
 clear
 Menu
 else 
 echo " Inviald option"
 sleep 1.5s
 clear 
 MarioMenu
 
 fi

}
function instructions {
  clear
  echo " How to Play"
  echo ""
  echo ""
  echo " To move you will have type mvoe"
  echo " To move backwards you will have to type back"
  echo " To jump you have to type jump "
  echo " To long jump you will have to put movejump"
  echo " To do a backwards jump you will hvae to put back jump"
  echo " There will be four level per world"
  echo " There are 4 world in total"
  echo " At the end of each world you will face a boss"
  echo " To exit at ant time type eback"
  echo " To Return to Menu type MainMenu"
  sleep 2.5s 
  read option2
  
  if [ $option2 = MainMenu ]; then
  clear
  MarioMenu
  elif [ $option2 = eback ]; then
  clear
  Menu
  else
  echo " Inviald Response"
  echo " Try Agian"
  sleep 1.5s
  clear 
  instructions

  fi
}
function lvl1 {
                                                                                                                                                                                    
  echo "                                                                                                                                                                                    "
  echo "                                                                                                                                                                                    "
  echo "       Coins=coins                                                                                                                                                                  "
  echo "                                                                                                                                                                                    "
  echo "                                                                                                                                                                                    "
  echo "                                                                                                                                                                                    "
  echo "                                                                                                                                                                                    "
  echo "                                                                                                                                                                                    "
  echo "                                                                                                                                                                                    "
  echo "                                                                                                                                                                                    "
  echo "                                                                                                                                                                                    "
  echo "                                                                                                                                                                                    "
  echo "                                                                                              _____                                                                                 "
  echo "                                                                                             |  ?  |                                                                                "
  echo "                                                                                             |_____|                                                                                "
  echo "                                                                                                                                                                                    "
  echo "     _____                                                                                                                                                                          "
  echo "    | . . |                                                                       _____ _____ _____ _____ _____                                                                     "
  echo "    |_____|                                     ___________                      |     |     |     |     |     |                                                                    "
  echo "       |                                       |__       __|                     |_____|_____|_____|_____|_____|                                                                    "
  echo "      \|/                                         |     |                                                                                                                           "
  echo "       |                                          |     |                                                                                                                           "
  echo "    ___|___                                       |     |                                                                                                                           "
  echo "__________________________________________________|     |__________________________________________________                                                                         "
  echo "                                                                                                                                                                                    "
  echo "                                                                                                                                                                                    "
  echo "                                                                                                                                                                                    "
  echo "                                                                                                                                                                                    "
  read optioni

  if [ $optioni = move ]; then
  clear
  lvl1a
  elif [ $optioni = jump ]; then
  echo " Why?"
  sleep 1.5s
  clear
  lvl1
  elif [ $optioni = movejump ]; then
  clear 
  lvl1b
  elif [ $optioni = back ]; then
  clear
  echo "                                                                                                                                                                                    "
  echo "                                                                                                                                                                                    " 
  echo "                                                                                                                                                                                    " 
  echo "                                                                                                                                                                                    " 
  echo "                                                                                                                                                                                    " 
  echo "                                                                                                                                                                                    " 
  echo "                                                        You died                                                                                                                    "  
  echo "                                                        Try Agian                                                                                                                   " 
  echo "                                                                                                                                                                                    " 
  sleep 1.5s
  clear
  MarioMenu
  elif [ $optioni = end ]; then
  clear
  lvl1end
  elif [ $optioni = eback ]; then
 clear
 Menu
  else
  echo " Inviald Option"
  sleep 1.5s
  clear
  lvl1

  fi
}
function lvl1a {
  echo "                                                                                                                                                                                    "
  echo "                                                                                                                                                                                    "
  echo "      Coins=$coins                                                                                                                                                                  "
  echo "                                                                                                                                                                                    "
  echo "                                                                                                                                                                                    "
  echo "                                                                                                                                                                                    "
  echo "                                                                                                                                                                                    "
  echo "                                                                                                                                                                                    "
  echo "                                                                                                                                                                                    "
  echo "                                                                                                                                                                                    "
  echo "                                                                                                                                                                                    "
  echo "                                                                                                                                                                                    "
  echo "                                                                                                                                                                                    "
  echo "                                                                                              _____                                                                                 "
  echo "                                                                                             |  ?  |                                                                                "
  echo "                                                                                             |_____|                                                                                "
  echo "                                                                                                                                                                                    "
  echo "               _____                                                                                                                                                                "
  echo "              | . . |                                                             _____ _____ _____ _____ _____                                                                     "
  echo "              |_____|                           ___________                      |     |     |     |     |     |                                                                    "
  echo "                 |                             |__       __|                     |_____|_____|_____|_____|_____|                                                                    "
  echo "                \|/                               |     |                                                                                                                           "
  echo "                 |                                |     |                                                                                                                           "
  echo "              ___|___                             |     |                                                                                                                           "
  echo "__________________________________________________|     |__________________________________________________                                                                         "
  echo "                                                                                                                                                                                    "
  echo "                                                                                                                                                                                    "
  echo "                                                                                                                                                                                    "
  echo "                                                                                                                                                                                    "
  read option3

  if [ $option3 = move ]; then
  clear
  lvl1b
  elif [ $option3 = jump ]; then
  echo " Why?"
  sleep 1.5s
  clear
  lvl1a
  elif [ $option3 = movejump ]; then
  clear 
  lvl1c
  elif [ $option3 = back ]; then
  clear 
  lvl1
  elif [ $option3 = eback ]; then
 clear
 Menu
  else
  echo " Inviald Option"
  sleep 1.5s
  clear
  lvl1a

  fi
}
function lvl1b {
  echo "                                                                                                                                                                                    "
  echo "                                                                                                                                                                                    "
  echo "   Coins=$coins                                                                                                                                                                     "
  echo "                                                                                                                                                                                    "
  echo "                                                                                                                                                                                    "
  echo "                                                                                                                                                                                    "
  echo "                                                                                                                                                                                    "
  echo "                                                                                                                                                                                    "
  echo "                                                                                                                                                                                    "
  echo "                                                                                                                                                                                    "
  echo "                                                                                                                                                                                    "
  echo "                                                                                                                                                                                    "
  echo "                                                                                                                                                                                    "
  echo "                                                                                              _____                                                                                 "
  echo "                                                                                             |  ?  |                                                                                "
  echo "                                                                                             |_____|                                                                                "
  echo "                                                                                                                                                                                    "
  echo "                         _____                                                                                                                                                      "
  echo "                        | . . |                                                   _____ _____ _____ _____ _____                                                                     "
  echo "                        |_____|                 ___________                      |     |     |     |     |     |                                                                    "
  echo "                           |                   |__       __|                     |_____|_____|_____|_____|_____|                                                                    "
  echo "                          \|/                     |     |                                                                                                                           "
  echo "                           |                      |     |                                                                                                                           "
  echo "                        ___|___                   |     |                                                                                                                           "
  echo "__________________________________________________|     |__________________________________________________                                                                         "
  echo "                                                                                                                                                                                    "
  echo "                                                                                                                                                                                    "
  echo "                                                                                                                                                                                    "
  echo "                                                                                                                                                                                    "
  
  read option4

  if [ $option4 = move ]; then
  clear 
  lvl1c
  elif [ $option4 = back ]; then
  clear 
  lvl1a 
  elif [ $option4 = movejump ]; then 
  clear
  lvl1d
  elif [ $option4 = jump ]; then
  echo " Why?"
  sleep 1.5s
  clear
  lvl1b
  elif [ $option4 = eback ]; then
 clear
 Menu
  else 
  echo "Inviald Option"
  echo "Try Agian"
  sleep 1.5s
  clear
  lvl1b

  fi
}
function lvl1c {
  echo "                                                                                                                                                                                    "
  echo "                                                                                                                                                                                    "
  echo "      Coins=$coins                                                                                                                                                                  "
  echo "                                                                                                                                                                                    "
  echo "                                                                                                                                                                                    "
  echo "                                                                                                                                                                                    "
  echo "                                                                                                                                                                                    "
  echo "                                                                                                                                                                                    "
  echo "                                                                                                                                                                                    "
  echo "                                                                                                                                                                                    "
  echo "                                                                                                                                                                                    "
  echo "                                                                                                                                                                                    "
  echo "                                                                                                                                                                                    "
  echo "                                                                                              _____                                                                                 "
  echo "                                                                                             |  ?  |                                                                                "
  echo "                                                                                             |_____|                                                                                "
  echo "                                                                                                                                                                                    "
  echo "                                         _____                                                                                                                                      "
  echo "                                        | . . |                                   _____ _____ _____ _____ _____                                                                     "
  echo "                                        |_____| ___________                      |     |     |     |     |     |                                                                    "
  echo "                                           |   |__       __|                     |_____|_____|_____|_____|_____|                                                                    "
  echo "                                          \|/     |     |                                                                                                                           "
  echo "                                           |      |     |                                                                                                                           "
  echo "                                        ___|___   |     |                                                                                                                           "
  echo "__________________________________________________|     |__________________________________________________                                                                         "
  echo "                                                                                                                                                                                    "
  echo "                                                                                                                                                                                    "
  echo "                                                                                                                                                                                    "
  echo "                                                                                                                                                                                    "
  
  read option5

  if [ $option5 = move ]; then
  clear 
  lvl1c
  elif [ $option5 = back ]; then
  clear 
  lvl1b 
  elif [ $option5 = movejump ]; then
  clear 
  lvl1e
  elif [ $option5 = jump ]; then
  echo " Why?"
  sleep 1.5s
  clear
  lvl1d
  elif [ $option5 = eback ]; then
 clear
 Menu
  else 
  echo " Inviald Option"
  echo " Try Agian"
  sleep 1.5s
  clear
  lvl1c

  fi
}
function lvl1d {
  echo "                                                                                                                                                                                    "
  echo "                                                                                                                                                                                    "
  echo "            Coins=$coins                                                                                                                                                            "
  echo "                                                                                                                                                                                    "
  echo "                                                                                                                                                                                    "
  echo "                                                                                                                                                                                    "
  echo "                                                                                                                                                                                    "
  echo "                                                                                                                                                                                    "
  echo "                                                                                                                                                                                    "
  echo "                                                                                                                                                                                    "
  echo "                                                                                                                                                                                    "
  echo "                                                                                                                                                                                    "
  echo "                                                  _____                                                                                                                             "
  echo "                                                 | . . |                                      _____                                                                                 "
  echo "                                                 |_____|                                     |  ?  |                                                                                "
  echo "                                                    |                                        |_____|                                                                                "
  echo "                                                   \|/                                                                                                                              "
  echo "                                                    |                                                                                                                               "
  echo "                                                 ___|___                          _____ _____ _____ _____ _____                                                                     "
  echo "                                                ___________                      |     |     |     |     |     |                                                                    "
  echo "                                               |__       __|                     |_____|_____|_____|_____|_____|                                                                    "
  echo "                                                  |     |                                                                                                                           "
  echo "                                                  |     |                                                                                                                           "
  echo "                                                  |     |                                                                                                                           "
  echo "__________________________________________________|     |__________________________________________________                                                                         "
  echo "                                                                                                                                                                                    "
  echo "                                                                                                                                                                                    "
  echo "                                                                                                                                                                                    "
  echo "                                                                                                                                                                                    "
  
  read option6

  if [ $option6 = move ]; then
  clear 
  lvl1e
  elif [ $option6 = back ]; then
  clear 
  lvl1c 
  elif [ $option6 = movejump ]; then
  clear 
  lvl1f
  elif [ $option6 = jump ]; then
  echo " Why?"
  sleep 1.5s
  clear
  lvl1d
  elif [ $option6 = eback ]; then
 clear
 Menu
  else 
  echo " Inviald Option"
  echo " Try Agian"
  sleep 1.5s
  clear
  lvl1d

  fi
}
function lvl1e {
  echo "                                                                                                                                                                                    "
  echo "                                                                                                                                                                                    "
  echo "     Coins=$coins                                                                                                                                                                   "
  echo "                                                                                                                                                                                    "
  echo "                                                                                                                                                                                    "
  echo "                                                                                                                                                                                    "
  echo "                                                                                                                                                                                    "
  echo "                                                                                                                                                                                    "
  echo "                                                                                                                                                                                    "
  echo "                                                                                                                                                                                    "
  echo "                                                                                                                                                                                    "
  echo "                                                                                                                                                                                    "
  echo "                                                                                                                                                                                    "
  echo "                                                  _____                                                                                                                             "
  echo "                                                 |  ?  |                                                                                                                            "
  echo "                                                 |_____|                                                                                                                            "
  echo "                                                                                                                                                                                    "
  echo "                   _____                                                                                                                                                            "
  echo "                  | . . |             _____ _____ _____ _____ _____                                                                                                                 "
  echo "    ___________   |_____|            |     |     |     |     |     |                                                                                                                "
  echo "   |__       __|     |               |_____|_____|_____|_____|_____|                                                                                                                "
  echo "      |     |       \|/                                                                                                                                                             "
  echo "      |     |        |                                                                                                                                                              "
  echo "      |     |     ___|___                                                                                                                                                           "
  echo "______|     |______________________________________________________________________________________________                      ___________________________________________________"
  echo "                                                                                                           |                    |                                                   "
  echo "                                                                                                           |                    |                                                   "
  echo "                                                                                                           |                    |                                                   "
  echo "                                                                                                           |                    |                                                   "
  
  read option7

  if [ $option7 = move ]; then
  clear 
  lvl1g
  elif [ $option7 = back ]; then
  clear 
  lvl1e 
  elif [ $option7 = movejump ]; then
  clear 
  lvl1f
  elif [ $option7 = jump ]; then
  echo " Why?"
  sleep 1.5s
  clear
  lvl1e
  elif [ $option7 = eback ]; then
 clear
 Menu
  else 
  echo " Inviald Option"
  echo " Try Agian"
  sleep 1.5s
  clear
  lvl1e

  fi
}
function lvl1f {
  echo "                                                                                                                                                                                    "
  echo "                                                                                                                                                                                    "
  echo "   Coins=$coins                                                                                                                                                                     "
  echo "                                                                                                                                                                                    "
  echo "                                                                                                                                                                                    "
  echo "                                                                                                                                                                                    "
  echo "                                                                                                                                                                                    "
  echo "                                                                                                                                                                                    "
  echo "                                                                                                                                                                                    "
  echo "                                                                                                                                                                                    "
  echo "                                                                                                                                                                                    "
  echo "                                       _____                                                                                                                                        "
  echo "                                      | . . |                                                                                                                                       "
  echo "                                      |_____|    _____                                                                                                                              "
  echo "                                         |      |  ?  |                                                                                                                             "
  echo "                                        \|/     |_____|                                                                                                                             "
  echo "                                         |                                                                                                                                          "
  echo "                                      ___|___                                                                                                                                       "
  echo "                                      _____ _____ _____ _____ _____                                                                                                                 "
  echo "    ___________                      |     |     |     |     |     |                                                                                                                "
  echo "   |__       __|                     |_____|_____|_____|_____|_____|                                                                                                                "
  echo "      |     |                                                                                                                                                                       "
  echo "      |     |                                                                                                                                                                       "
  echo "      |     |                                                                                                                                                                       "
  echo "______|     |______________________________________________________________________________________________                      ___________________________________________________"
  echo "                                                                                                           |                    |                                                   "
  echo "                                                                                                           |                    |                                                   "
  echo "                                                                                                           |                    |                                                   "
  echo "                                                                                                           |                    |                                                   "
  
  read option9

  if [ $option9 = move ]; then
  clear 
  lvl1h
  elif [ $option9 = back ]; then
  clear 
  lvl1e 
  elif [ $option9 = movejump ]; then
  clear 
  lvl1i
  elif [ $option9 = jump ]; then
  echo " Why?"
  sleep 1.5s
  clear
  lvl1f
  elif [ $option9 = eback ]; then
 clear
 Menu
  else 
  echo " Inviald Option"
  echo " Try Agian"
  sleep 1.5s
  clear
  lvl1f

  fi
}
function lvl1g {
  echo "                                                                                                                                                                                    "
  echo "   Coins=$coins                                                                                                                                                                     "
  echo "                                                                                                                                                                                    "
  echo "                                                                                                                                                                                    "
  echo "                                                                                                                                                                                    "
  echo "                                                                                                                                                                                    "
  echo "                                                                                                                                                                                    "
  echo "                                                                                                                                                                                    "
  echo "                                                                                                                                                                                    "
  echo "                                                                                                                                                                                    "
  echo "                                                                                                                                                                                    "
  echo "                                                                                                                                                                                    "
  echo "                                                                                                                                                                                    "
  echo "                                                  _____                                                                                                                             "
  echo "                                                 |  ?  |                                                                                                                            "
  echo "                                                 |_____|                                                                                                                            "
  echo "                                                                                                                                                                                    "
  echo "                                     _____                                                                                                                                          "
  echo "                                    | . . | _____ _____ _____ _____                                                                                                                 "
  echo "    ___________                     |_____||     |     |     |     |                                                                                                                "
  echo "   |__       __|                       |   |_____|_____|_____|_____|                                                                                                                "
  echo "      |     |                         \|/                                                                                                                                           "
  echo "      |     |                          |                                                                                                                                            "
  echo "      |     |                       ___|___                                                                                                                                         "
  echo "______|     |______________________________________________________________________________________________                      ___________________________________________________"
  echo "                                                                                                           |                    |                                                   "
  echo "                                                                                                           |                    |                                                   "
  echo "                                                                                                           |                    |                                                   "
  echo "                                                                                                           |                    |                                                   "
  let coins=1
  read option10

  if [ $option10 = move ]; then
  clear 
  lvl1j
  elif [ $option10 = back ]; then
  clear 
  lvl1e 
  elif [ $option10 = movejump ]; then
  clear 
  lvl1f
  elif [ $option10 = jump ]; then
  echo " Why?"
  sleep 1.5s
  clear
  lvl1g
  elif [ $option10 = eback ]; then
 clear
 Menu
  else 
  echo " Inviald Option"
  echo " Try Agian"
  sleep 1.5s
  clear
  lvl1g

  fi
}
function lvl1h {
  echo "                                                                                                                                                                                    "
  echo "                                                                                                                                                                                    "
  echo "   Coins=$coins                                                                                                                                                                     "
  echo "                                                                                                                                                                                    "
  echo "                                                                                                                                                                                    "
  echo "                                                                                                                                                                                    "
  echo "                                                                                                                                                                                    "
  echo "                                                                                                                                                                                    "
  echo "                                                                                                                                                                                    "
  echo "                                                                                                                                                                                    "
  echo "                                                                                                                                                                                    "
  echo "                                                 _____                                                                                                                              "
  echo "                                                | . . |                                                                                                                             "
  echo "                                                |_____|                                                                                                                             "
  echo "                                                   |                                                                                                                                "
  echo "                                                  \|/                                                                                                                               "
  echo "                                                   |                                                                                                                                "
  echo "                                                ___|___                                                                                                                             "
  echo "                                      _____ _____ _____ _____ _____                                                                                                                 "
  echo "    ___________                      |     |     |     |     |     |                                                                                                                "
  echo "   |__       __|                     |_____|_____|_____|_____|_____|                                                                                                                "
  echo "      |     |                                                                                                                                                                       "
  echo "      |     |                                                                                                                                                                       "
  echo "      |     |                                                                                                                                                                       "
  echo "______|     |______________________________________________________________________________________________                      ___________________________________________________"
  echo "                                                                                                           |                    |                                                   "
  echo "                                                                                                           |                    |                                                   "
  echo "                                                                                                           |                    |                                                   "
  echo "                                                                                                           |                    |                                                   "
  if [ $coins = 1 ]; then
  let coins=2
  else
  let coins=1

  fi
  read option11

  if [ $option11 = move ]; then
  clear 
  lvl1i
  elif [ $option11 = back ]; then
  clear 
  lvl1f 
  elif [ $option11 = movejump ]; then
  clear 
  lvl1l
  elif [ $option11 = jump ]; then
  echo " Why?"
  sleep 1.5s
  clear
  lvl1h
  elif [ $option11 = eback ]; then
 clear
 Menu
  else 
  echo " Inviald Option"
  echo " Try Agian"
  sleep 1.5s
  clear
  lvl1h

  fi 
}
function lvl1i {
  echo "                                                                                                                                                                                    "
  echo "                                                                                                                                                                                    "
  echo "   Coins=$coins                                                                                                                                                                     "
  echo "                                                                                                                                                                                    "
  echo "                                                                                                                                                                                    "
  echo "                                                                                                                                                                                    "
  echo "                                                                                                                                                                                    "
  echo "                                                                                                                                                                                    "
  echo "                                                                                                                                                                                    "
  echo "                                                                                                                                                                                    "
  echo "                                                                                                                                                                                    "
  echo "                                                           _____                                                                                                                    "
  echo "                                                          | . . |                                                                                                                   "
  echo "                                                          |_____|                                                                                                                   "
  echo "                                                             |                                                                                                                      "
  echo "                                                            \|/                                                                                                                     "
  echo "                                                             |                                                                                                                      "
  echo "                                                          ___|___                                                                                                                   "
  echo "                                      _____ _____ _____ _____ _____                                                                                                                 "
  echo "    ___________                      |     |     |     |     |     |                                                                                                                "
  echo "   |__       __|                     |_____|_____|_____|_____|_____|                                                                                                                "
  echo "      |     |                                                                                                                                                                       "
  echo "      |     |                                                                                                                                                                       "
  echo "      |     |                                                                                                                                                                       "
  echo "______|     |______________________________________________________________________________________________                      ___________________________________________________"
  echo "                                                                                                           |                    |                                                   "
  echo "                                                                                                           |                    |                                                   "
  echo "                                                                                                           |                    |                                                   "
  echo "                                                                                                           |                    |                                                   "
  
  read option12

  if [ $option12 = move ]; then
  clear 
  lvl1l
  elif [ $option12 = back ]; then
  clear 
  lvl1h 
  elif [ $option12 = movejump ]; then
  clear 
  lvl1k
  elif [ $option12 = jump ]; then
  echo " Why?"
  sleep 1.5s
  clear
  lvl1i
  elif [ $option12 = eback ]; then
 clear
 Menu
  else 
  echo " Inviald Option"
  echo " Try Agian"
  sleep 1.5s
  clear
  lvl1i

  fi 
}
function lvl1j {
  echo "                                                                                                                                                                                    "
  echo "                                                                                                                                                                                    "
  echo "     Coins=$coins                                                                                                                                                                   "
  echo "                                                                                                                                                                                    "
  echo "                                                                                                                                                                                    "
  echo "                                                                                                                                                                                    "
  echo "                                                                                                                                                                                    "
  echo "                                                                                                                                                                                    "
  echo "                                                                                                                                                                                    "
  echo "                                                                                                                                                                                    "
  echo "                                                                                                                                                                                    "
  echo "                                                                                                                                                                                    "
  echo "                                                                                                                                                                                    "
  echo "                                                  _____                                                                                                                             "
  echo "                                                 |  ?  |                                                                                                                            "
  echo "                                                 |_____|                                                                                                                            "
  echo "                                                                                                                                                                                    "
  echo "                                                     _____                                                                                                                          "
  echo "                                                    | . . |   _____                                                                                                                 "
  echo "    ___________                                     |_____|  |     |                                                                                                                "
  echo "   |__       __|                                       |     |_____|                                                                                                                "
  echo "      |     |                                         \|/                                                                                                                           "
  echo "      |     |                                          |                                                                                                                            "
  echo "      |     |                                       ___|___                                                                                                                         "
  echo "______|     |______________________________________________________________________________________________                      ___________________________________________________"
  echo "                                                                                                           |                    |                                                   "
  echo "                                                                                                           |                    |                                                   "
  echo "                                                                                                           |                    |                                                   "
  echo "                                                                                                           |                    |                                                   "
  if [ $coins = 1 ]; then
  let coins=4
  else
  let coins=1
  fi

  read option13

  if [ $option13 = move ]; then
  clear 
  lvl1l
  elif [ $option13 = back ]; then
  clear 
  lvl1g 
  elif [ $option13 = movejump ]; then
  clear 
  lvl1i
  elif [ $option13 = jump ]; then
  echo " Why?"
  sleep 1.5s
  clear
  lvl1j
  elif [ $option13 = eback ]; then
 clear
 Menu
  else 
  echo " Inviald Option"
  echo " Try Agian"
  sleep 1.5s
  clear
  lvl1j

  fi
}
function lvl1l {
  echo "                                                                                                                                                                                    "
  echo "                                                                                                                                                                                    "
  echo "     Coins=$coins                                                                                                                                                                   "
  echo "                                                                                                                                                                                    "
  echo "                                                                                                                                                                                    "
  echo "                                                                                                                                                                                    "
  echo "                                                                                                                                                                                    "
  echo "                                                                                                                                                                                    "
  echo "                                                                                                                                                                                    "
  echo "                                                                                                                                                                                    "
  echo "                                                                                                                                                                                    "
  echo "                                                                                                                                                                                    "
  echo "                                                                                                                                                                                    "
  echo "                                                  _____                                                                                                                             "
  echo "                                                 |  ?  |                                                                                                                            "
  echo "                                                 |_____|                                                                                                                            "
  echo "                                                                                                                                                                                    "
  echo "                                                                       _____                                                                                                        "
  echo "                                                                      | . . |                                                                                                       "
  echo "    ___________                                                       |_____|                                                                                                       "
  echo "   |__       __|                                                         |                                                                                                          "
  echo "      |     |                                                           \|/                                                                                                         "
  echo "      |     |                                                            |                                                                                                          "
  echo "      |     |                                                         ___|___                                                                                                       "
  echo "______|     |______________________________________________________________________________________________                      ___________________________________________________"
  echo "                                                                                                           |                    |                                                   "
  echo "                                                                                                           |                    |                                                   "
  echo "                                                                                                           |                    |                                                   "
  echo "                                                                                                           |                    |                                                   "
  if [ $coins = 4 ]; then
  let coins=5
  else
  let coins=3
  fi

  read option14

  if [ $option14 = move ]; then
  clear 
  lvl1k
  elif [ $option14 = back ]; then
  clear 
  lvl1j 
  elif [ $option14 = movejump ]; then
  clear 
  echo "                                                                                                                                                                                    "
  echo "                                                                                                                                                                                    " 
  echo "                                                                                                                                                                                    " 
  echo "                                                                                                                                                                                    " 
  echo "                                                                                                                                                                                    " 
  echo "                                                                                                                                                                                    " 
  echo "                                                        You died                                                                                                                    "  
  echo "                                                        Try Agian                                                                                                                   " 
  echo "                                                                                                                                                                                    " 
  sleep 1.5s
  clear
  MarioMenu
  elif [ $option14 = jump ]; then
  echo " Why?"
  sleep 1.5s
  clear
  lvl1l
  elif [ $option14 = eback ]; then
 clear
 Menu
  else 
  echo " Inviald Option"
  echo " Try Agian"
  sleep 1.5s
  clear
  lvl1l

  fi
}
function lvl1k {
  echo "                                                                                                                                                                                    "
  echo "                                                                                                                                                                                    "
  echo "     Coins=$coins                                                                                                                                                                   "
  echo "                                                                                                                                                                                    "
  echo "                                                                                                                                                                                    "
  echo "                                                                                                                                                                                    "
  echo "                                                                                                                                                                                    "
  echo "                                                                                                                                                                                    "
  echo "                                                                                                                                                                                    "
  echo "                                                                                                                                                                                    "
  echo "                                                                                                                                                                                    "
  echo "                                                                                                                                                                                    "
  echo "                                                                                                                                                                                    "
  echo "                                                  _____                                                                                                                             "
  echo "                                                 |  ?  |                                                                                                                            "
  echo "                                                 |_____|                                                                                                                            "
  echo "                                                                                                                                                                                    "
  echo "                                                                                                    _____                                                                           "
  echo "                                                                                                   | . . |                                                                          "
  echo "    ___________                                                                                    |_____|                                                                          "
  echo "   |__       __|                                                                                      |                                                                             "
  echo "      |     |                                                                                        \|/                                                                            "
  echo "      |     |                                                                                         |                                                                             "
  echo "      |     |                                                                                      ___|___                                                                          "
  echo "______|     |______________________________________________________________________________________________                      ___________________________________________________"
  echo "                                                                                                           | .                  |                                                   "
  echo "                                                                                                           |  .                 |                                                   "
  echo "                                                                                                           |   .                |                                                   "
  echo "                                                                                                           |        Death       |                                                   "
  

  read option15

  if [ $option15 = move ]; then
  clear 
  echo "                                                                                                                                                                                    "
  echo "                                                                                                                                                                                    " 
  echo "                                                                                                                                                                                    " 
  echo "                                                                                                                                                                                    " 
  echo "                                                                                                                                                                                    " 
  echo "                                                                                                                                                                                    " 
  echo "                                                        You died                                                                                                                    "  
  echo "                                                        Try Agian                                                                                                                   " 
  echo "                                                                                                                                                                                    " 
  sleep 1.5s
  clear
  MarioMenu
  elif [ $option15 = back ]; then
  clear 
  lvl1l 
  elif [ $option15 = movejump ]; then
  clear 
  lvl1m
  elif [ $option15 = jump ]; then
  echo " Why?"
  sleep 1.5s
  clear
  echo "                                                                                                                                                                                    "
  echo "                                                                                                                                                                                    " 
  echo "                                                                                                                                                                                    " 
  echo "                                                                                                                                                                                    " 
  echo "                                                                                                                                                                                    " 
  echo "                                                                                                                                                                                    " 
  echo "                                                        You died                                                                                                                    "  
  echo "                                                        Try Agian                                                                                                                   " 
  echo "                                                                                                                                                                                    " 
  sleep 1.5s
  clear
  MarioMenu
  elif [ $option15 = eback ]; then
 clear
 Menu
  else 
  echo " Inviald Option"
  echo " Try Agian"
  sleep 1.5s
  clear
  lvl1k

  fi
}
function lvl1m {
  echo "                                                                                                                                                                                    "
  echo "                                                                                                                                                                                    "
  echo "     Coins=$coins                                                                                                                                                                   "
  echo "                                                                                                                                                                                    "
  echo "                                                                                                                                                                                    "
  echo "                                                                                                                                                                                    "
  echo "                                                                                                                                                                                    "
  echo "                                                                                                                                                                                    "
  echo "                                                                                                                                                                                    "
  echo "                                                                                                                                                                                    "
  echo "                                                                                                                                                                                    "
  echo "                                                                                                                                                                                    "
  echo "                                                                                                                                                                                    "
  echo "                                                  _____                                                                                                                             "
  echo "                                                 |  ?  |                                                                                                                            "
  echo "                                                 |_____|                                                                                                                            "
  echo "                                                                                                                                                                                    "
  echo "                                                                                                                              _____                                  _________      "
  echo "                                                                                                                             | . . |                                |         |    "
  echo "                                                                                                                             |_____|                                |_________|     "
  echo "                                                                                                                                |                                             |     "
  echo "                                                                                                                               \|/                                            |     "
  echo "                                                                                                                                |                                             |     "
  echo "                                                                                                                             ___|___                                          |     "
  echo "_____________________________________________________________________________________________                      ___________________________________________________________|____ "
  echo "                                                                                             | .                  |                                                                 "
  echo "                                                                                             |  .                 |                                                                 "
  echo "                                                                                             |   .                |                                                                 "
  echo "                                                                                             |        Death       |                                                                 "
  

  read option16

  if [ $option16 = move ]; then
  clear 
  lvl1n
  MarioMenu
  elif [ $option16 = back ]; then
  clear 
  echo "                                                                                                                                                                                    "
  echo "                                                                                                                                                                                    " 
  echo "                                                                                                                                                                                    " 
  echo "                                                                                                                                                                                    " 
  echo "                                                                                                                                                                                    " 
  echo "                                                                                                                                                                                    " 
  echo "                                                        You died                                                                                                                    "  
  echo "                                                        Try Agian                                                                                                                   " 
  echo "                                                                                                                                                                                    " 
  sleep 1.5s
  clear
  MarioMenu
  elif [ $option16 = movejump ]; then
  clear 
  lvl1end
  elif [ $option16 = jump ]; then
  echo " Why?"
  sleep 1.5s
  clear
  lvl1m
  elif [ $option16 = eback ]; then
 clear
 Menu
  else 
  echo " Inviald Option"
  echo " Try Agian"
  sleep 1.5s
  clear
  lvl1m

  fi
}
function lvl1n {
  echo "                                                                                                                                                                                    "
  echo "                                                                                                                                                                                    "
  echo "     Coins=$coins                                                                                                                                                                   "
  echo "                                                                                                                                                                                    "
  echo "                                                                                                                                                                                    "
  echo "                                                                                                                                                                                    "
  echo "                                                                                                                                                                                    "
  echo "                                                                                                                                                                                    "
  echo "                                                                                                                                                                                    "
  echo "                                                                                                                                                                                    "
  echo "                                                                                                                                                                                    "
  echo "                                                                                                                                                                                    "
  echo "                                                                                                                                                                                    "
  echo "                                                  _____                                                                                                                             "
  echo "                                                 |  ?  |                                                                                                                            "
  echo "                                                 |_____|                                                                                                                            "
  echo "                                                                                                                                                                                    "
  echo "                                                                                                                                       _____                         _________      "
  echo "                                                                                                                                      | . . |                       |         |     "
  echo "                                                                                                                                      |_____|                       |_________|     "
  echo "                                                                                                                                         |                                    |     "
  echo "                                                                                                                                        \|/                                   |     "
  echo "                                                                                                                                         |                                    |     "
  echo "                                                                                                                                      ___|___                                 |     "
  echo "_____________________________________________________________________________________________                      ___________________________________________________________|____ "
  echo "                                                                                             | .                  |                                                                 "
  echo "                                                                                             |  .                 |                                                                 "
  echo "                                                                                             |   .                |                                                                 "
  echo "                                                                                             |        Death       |                                                                 "
  

  read option16

  if [ $option16 = move ]; then
  clear 
  lvl1end
  elif [ $option16 = back ]; then
  clear 
  lvl1m
  elif [ $option16 = movejump ]; then
  clear 
  echo "                                                                                                                                                                                    "
  echo "                                                                                                                                                                                    " 
  echo "                                                                                                                                                                                    " 
  echo "                                                                                                                                                                                    " 
  echo "                                                                                                                                                                                    " 
  echo "                                                                                                                                                                                    " 
  echo "                                                        You died                                                                                                                    "  
  echo "                                                        Try Agian                                                                                                                   " 
  echo "                                                                                                                                                                                    " 
  sleep 1.5s
  clear
  MarioMenu
  elif [ $option16 = jump ]; then
  echo " Why?"
  sleep 1.5s
  clear
  lvl1n
  elif [ $option16 = eback ]; then
  clear
  Menu
  else 
  echo " Inviald Option"
  echo " Try Agian"
  sleep 1.5s
  clear
  lvl1n

  fi
}
function lvl1o {
 echo " yugdauyglagdhklashkd"
}
function lvl1end {
  clear
 echo -e "\e]30;49m"
 echo -e "\e[30;44m"
 echo "                  Congratulations                                                                                                                                                    " 
 echo "                  You have beat Super Mario level 1 level 2 is coming soon but Congratulations!                                                                                      "
 echo " Type Menu or eback to leave "
 sleep 1.5s
 read end1
 if [ $end1 = Menu ]; then
 clear
 MarioMenu
 elif [ $end1 = eback ]; then
 clear
 Menu
 else 
 echo " Inviald Option"
 echo " Try Agian"
 sleep 1.5s
 clear lvl1end

 fi
}
function calculator {
  echo -e "\e[30;44m"
 echo " Welcome to Elisha's Calculator"
 echo ""
 sleep 1.5s
 clear
 echo " Choose your first number "
 read n1
 clear
 echo "Your first number was $n1, chosse your second number"
 read n2
 clear
 echo " Now do you want to multiply, add, divide, or subract (multiply,+,/,-)? Chosse One!"
 read option
 
 if [ $option = + ]; then
 clear
 add
 elif [ $option = - ]; then 
 clear
 subract
 elif [ $option = / ]; then
 clear
 divide
 elif [ $option = multiply ]; then
 clear
 multiply
 elif [ $option = eback ]; then
 clear
 Menu
 else 
 echo "Inviald Option"
 echo ""
 sleep 1.5s
 clear 
 calculator

 fi
 
}
function add {
  let ans1="$n1+$n2"
  echo "The answer is $ans1"
  echo ""
  echo "To try another problem type again"
  sleep 2s
  read q1
  if [ $q1 = again ]; then 
  calculator
  elif [ $q1 = eback ]; then
 clear
 Menu
  else
  echo " Inviald Option"
  echo " Try Agian "
  clear
  add

  fi
}
function subract {
  let ans1="$n1-$n2"
  echo "The answer is $ans1"
  echo ""
  echo "To try another problem type again"
  sleep 2s
  read q1
  if [ $q1 = again ]; then 
  calculator
  elif [ $q1 = eback ]; then
 clear
 Menu
  else
  echo " Inviald Option"
  echo " Try Agian "
  clear
  subract

  fi
}
function multiply {
  let ans1="$n1*$n2"
  echo "The answer is $ans1"
  echo ""
  echo "To try another problem type again"
  sleep 2s
  read q1
  if [ $q1 = again ]; then 
  calculator
  elif [ $q1 = eback ]; then
  clear
  Menu
  else
  echo " Inviald Option"
  echo " Try Agian "
  clear
  multiply

  fi
}
function divide {
  let ans1="$n1/$n2"
  echo "The answer $ans1 "
  echo ""
  echo "To try another problem type again"
  sleep 2s
  read q1
  if [ $q1 = again ]; then 
  calculator
  elif [ $q1 = eback ]; then
 clear
 Menu
  else
  echo " Inviald Option"
  echo " Try Agian "
  clear
  divide

  fi
}
clear
# btw this is a project
let coins=0
Bstart
# developer


# 1262 lines in total
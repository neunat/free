roomName = {
  "(-0, -0)": "???",
  "(-2, 1)": "Dingy Alleyway",
  "(-2, 2)": "Clean Alleyway"
}
roomDesc = {
  "(-0, -0)": "Whoops, the game thinks you can go this way even though there is no room programmed in. There's no way for me to get you out, sorry about that! Think of it as an easter egg.",
  "(-2, 1)": "A truly miserable alley with a person-shaped stain on the ground where you were lying. There's trash everywhere and a gutter leads to the SOUTH.",
  "(-2, 2)": "Probably a misnomer"
}
roomExits = {
  #FORMAT: North, South, East, West
  
  "(-0, -0)": "0000", #backrooms/purgatory
  "(-2, 1)": "1101", #dingy alley
  "(-2, 2)": "0100" #clean alley
}

#what i'm wondering if is possible is a code that might look like:
# if playerInput.lower() = north {
    #add 1 to player y value
#}
#something like that, combined with a code that checks the playerx and playery to decide what splashtexts get shown/what options are available.
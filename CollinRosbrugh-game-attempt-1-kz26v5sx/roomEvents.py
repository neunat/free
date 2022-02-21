import time
import random

#holds the encounter tables for various room types.
Forest_room_encounters = ["fr1", "fr2", "fr3", "fr4"]
Cave_room_encounters = ["cr1", "cr2", "cr3", "cr4"]
Village_room_encounters = ["vr1", "vr2", "vr3", "vr4"]

def searching_forest():
    print("\r")
    #rolls on a table for events when searching in the forest
    time.sleep(1.0)
    forestLoot = random.choice(Forest_room_encounters)
  
def searching_cave():
    print("\r")
    #rolls on a table for events when searching in the cave
    time.sleep(1.0)
    caveLoot = random.choice(Cave_room_encounters)
    print(caveLoot)

def searching_village():
    print("\r")
    #rolls on a table for events when searching in the village
    time.sleep(1.0)
    villageLoot = random.choice(Village_room_encounters)
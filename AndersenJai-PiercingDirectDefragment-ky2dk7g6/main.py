dictionary = {'adj': '', 'verb': '', 'noun': ''}

user_adj = input("Please enter an adjective: ")
user_noun = input("Please enter an noun: ")
user_verb = input("Please enter an verb: ")

dictionary["adj"] = user_adj
dictionary["noun"] = user_noun
dictionary["verb"] = user_verb


madlib = "I wake up to the " + dictionary["adj"] + " smell of " + dictionary["noun"] + " roasting downstairs. I " + dictionary["verb"] + " down the stairs to see if I could help " + dictionary["verb"] + " the breakfast."

print("Your finished madlib:" + madlib)
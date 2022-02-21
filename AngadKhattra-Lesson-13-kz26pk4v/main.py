#Angad Khattra

first_item = input("Enter an item to put on the list")
second_item = input("Enter an item to put on the list")
third_item = input("Enter an item to put on the list")
fourth_item = input("Enter an item to put on the list")
fifth_item = input("Enter an item to put on the list")

our_list = [first_item, second_item, third_item, fourth_item, fifth_item]
print(our_list)
askquestion = input("Type enter to shuffle the list!")

if askquestion == "enter":
  our_list[2] = first_item
  our_list[4] = second_item
  our_list[0] = third_item
  our_list[1] = fourth_item
  our_list[3] = fifth_item
  print(our_list)
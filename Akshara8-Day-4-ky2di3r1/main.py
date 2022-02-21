people = input("How many people are in the lunchroom? ")
table_people = input("How many people can sit in one table? ")
no_table_people = int(table_people) % int(table_people)
print(no_table_people)
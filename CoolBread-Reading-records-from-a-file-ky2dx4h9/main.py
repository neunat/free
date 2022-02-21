#Program to read records from a file

text_file = open("users.txt", "r")
username = input("Enter your username:").lower()
end_of_file = False
while not end_of_file:
  user = text_file.readline().strip().lower()
  login_date = text_file.readline().strip()
  if user == username:
    print("Last logged in on:",login_date)
    end_of_file = True
  
  if user == "":
      print("User not found.")


text_file.close()
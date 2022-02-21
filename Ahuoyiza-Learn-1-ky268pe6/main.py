user_name = input("what is your name?")

password = input("Enter password:")


hide_password = "*" * 10

print(f'Hello {user_name},  Your password {hide_password} is { len(password)} letters long')
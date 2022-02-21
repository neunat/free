import repltalk, asyncio

replit = repltalk.Client()
data = asyncio.run(replit.get_user('CoolCoderSJ'))
print(data)
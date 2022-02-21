import snow_pyrepl as pyrepl
import os, requests

#This function will help you simplify things later on
#Connect to the /data/repls/ endpoint to get a repl id
def get_repl_id(user, replname, sid):
	headers = {
		'Content-Type': 'application/json',
		'connect.sid': sid,
		'X-Requested-With': 'https://replit.com',
		'Origin': 'https://replit.com',
		'User-Agent': 'Mozilla/5.0'
	}
	cookies = {
		"connect.sid": sid
	}
	r = requests.get(f"https://replit.com/data/repls/@{user}/{replname}", headers=headers, cookies=cookies)
	return r.json()['id']


### Login to our client

# Get SID variable from evironment
# When you fork this repl, make your own env variable with your own sid
sid = os.environ['SID']

# Get the connection url and token
token, url = pyrepl.get_token("CoolCoderSJ", "Pyrepl-Quickstart", sid)

# Get repl id
repl_id = get_repl_id("CoolCoderSJ", "Pyrepl-Quickstart", sid)

# Get our client
client = pyrepl.Client(token, repl_id, url)
print("Client Opened")

# Open a channel - All services found here https://crosis.turbio.repl.co/services
channel = client.open('eval', 'evaler')
print("Channel Opened")

# Persist our files
output = channel.get_output({
	"eval": "print('Hello World!')"
})

print(output)

# Safely close the channel
client.close()
import nextcord, os, server, asyncio, time, threading
from nextcord.ext import commands
from replit import db

intents = nextcord.Intents.default()
intents.messages = True
intents.guilds = True
intents.members = True

client = nextcord.Client()
client = commands.Bot(command_prefix=".", help_command=None, case_insensitive=True, intents=intents)

@client.event
async def on_ready():
	activity = nextcord.Activity(name="Snow ⠕#0600", type=nextcord.ActivityType.playing)
	await client.change_presence(activity=activity)
	print("LOGGED IN")
	while True:
		await check_jail()
		await asyncio.sleep(1)


@client.command()
async def setup(ctx):
	if ctx.author.id != 744921397582888991:
		await ctx.send(":warning: STRANGER DANGER :warning:")
		return

	await ctx.send("Enter Jail Channel ID- ")
	def check(m): return m.author.id == ctx.author.id and m.channel == ctx.channel
	channelid = await client.wait_for('message', check=check)
	channelid = int(channelid.content)

	await ctx.send("Enter Prisoner ID- ")
	prisonerid = await client.wait_for('message', check=check)
	prisonerid = int(prisonerid.content)

	await ctx.send("Enter Warden ID- ")
	wardenid = await client.wait_for('message', check=check)
	wardenid = int(wardenid.content)

	db['channel'] = channelid
	db['prisoner'] = prisonerid
	db['warden']  = wardenid

	await ctx.send(f"Jail setup. \n<@&{wardenid}> To send someone to jail, use ` /jail [time] `\n\nValid times are- \n`x`d - x days\n`x`h - x hours\n`x`m - x minutes\n\n:warning: apologies for the ping, commands are still in development and the jail command does not exist yet.")


async def check_jail():
	prisoners = db['prisoners']
	for prisoner in prisoners:
		print(time.time(), prisoner['time'], prisoner['duration'])
		if time.time()-prisoner['time'] >= prisoner['duration']:
			role = nextcord.utils.get(client.get_guild(898688631911383091).roles, id=db['prisoner'])
			user = client.get_guild(898688631911383091).get_member(prisoner['id'])
			await user.remove_roles(role)
			channel = client.get_channel(db['channel'])
			await channel.send(f":partying_face: <@{prisoner['id']}> has finished their jail sentence.")
			db['prisoners'].remove(prisoner)

@client.command()
@commands.has_role('Warden')
async def jail(ctx, member:nextcord.Member, time_to_jail="10m"):
	duration = []
	for char in time_to_jail:
		duration.append(char)
	
	unit = duration[-1]
	duration.remove(unit)
	duration = float("".join(duration))

	if unit == "m":
		duration *= 60
	elif unit == "h":
		duration *= 3600
	elif unit == "d":
		duration *= 86400

	db['prisoners'].append({
		"time": time.time(),
		"duration": duration,
		"id": member.id
	})

	role = nextcord.utils.get(client.get_guild(898688631911383091).roles, id=db['prisoner'])
	await member.add_roles(role)

	channel = client.get_channel(db['channel'])
	end = int(time.time() + duration)
	await channel.send(f":zany_face: <@{member.id}> has been sentenced to jail until <t:{end}:R>.")


#db['prisoners'] = []

@client.command()
@commands.has_role('Warden')
async def reset(ctx):
	db['prisoners'] = []

server.s()
client.run(os.getenv("TOKEN"))
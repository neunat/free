import discord
from discord.ext import commands


class DevCommands(commands.Cog, name='Developer Commands'):
	'''These are the developer commands'''

	def __init__(self, bot):
		self.bot = bot

	async def cog_check(self, ctx):  
		'''
		The default check for this cog whenever a command is used. Returns True if the command is allowed.
		'''
		return ctx.author.id == self.bot.author_id

	@commands.command(  # Decorator to declare where a command is.
		name='reload',  # Name of the command, defaults to function name.
		aliases=['rl']  # Aliases for the command.
	)  
	async def reload(self, ctx, cog):
		'''
		Reloads a cog.
		'''
		extensions = self.bot.extensions  # A list of the bot's cogs/extensions.
		if cog == 'all':  # Lets you reload all cogs at once
			for extension in extensions:
				self.bot.unload_extension(cog)
				self.bot.load_extension(cog)
			await ctx.send('Done')
		if cog in extensions:
			self.bot.unload_extension(cog)  # Unloads the cog
			self.bot.load_extension(cog)  # Loads the cog
			await ctx.send('Done')  # Sends a message where content='Done'
		else:
			await ctx.send('Unknown Cog')  # If the cog isn't found/loaded.
	
	@commands.command(name="unload", aliases=['ul']) 
	async def unload(self, ctx, cog):
		'''
		Unload a cog.
		'''
		extensions = self.bot.extensions
		if cog not in extensions:
			await ctx.send("Cog is not loaded!")
			return
		self.bot.unload_extension(cog)
		await ctx.send(f"`{cog}` has successfully been unloaded.")
	
	@commands.command(name="load")
	async def load(self, ctx, cog):
		'''
		Loads a cog.
		'''
		try:

			self.bot.load_extension(cog)
			await ctx.send(f"`{cog}` has successfully been loaded.")

		except commands.errors.ExtensionNotFound:
			await ctx.send(f"`{cog}` does not exist!")

	@commands.command(name="listcogs", aliases=['lc'])
	async def listcogs(self, ctx):
		'''
		Returns a list of all enabled commands.
		'''
		base_string = "```css\n"  # Gives some styling to the list (on pc side)
		base_string += "\n".join([str(cog) for cog in self.bot.extensions])
		base_string += "\n```"
		await ctx.send(base_string)
	@commands.command(name="code", aliases=['cd'])
	async def code(self, ctx, ID):
		channel = self.bot.get_channel(int(ID))
		if channel is None:
			await ctx.send('Could not find that channel.')
		return
		# NOTE: get_channel can return a TextChannel, VoiceChannel,
    # or CategoryChannel. You may want to add a check to make sure
    # the ID is for text channels only
		message = await channel.fetch_message(channel.last_message_id)
    # NOTE: channel.last_message_id could return None; needs a check
		try:
			message.replace("print", "await ctx.send")
		except Exception as exception:
			await ctx.send(type(exception).__name__)
    # NOTE: message may need to be trimmed to fit within 2000 chars


def setup(bot):
	bot.add_cog(DevCommands(bot))
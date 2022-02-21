import discord
from discord.ext import commands
from discord.ext.commands import has_permissions
bot = commands.Bot(command_prefix='$') # you can change the prefix if u want here

@bot.event
async def on_ready():
    await bot.change_presence(status=discord.Status.online, activity=discord.Game('Catwiz'))
    print('We have logged in as {0.user}'.format(bot))

#KICK
@bot.command()
@has_permissions(kick_members=True)
async def kick(ctx, member : discord.Member, *, reason=None):
    await member.kick(reason=reason)
 
    await ctx.send(f"Kicked {member.mention}")

bot.run('ODEyMTE1NDM2MTQ4NzUyNDU1.YC8DcA.0pHY16KVC-oYn_sCT1uUDSfglj0') # replace x with your bot token found in discord.com/developers dm me if u need more help

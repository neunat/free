from discord.ext import commands
import discord
import asyncio
from data.embed.general import embed_General
from data.embed.help import embed
from data.embed.mod import embed_Moderation
from data.embed.emoji import embed_Emoji
from data.embed.currency import embed_Currency
from data.embed.other import embed_Other
from discord_components import Button, ButtonStyle, InteractionType
from data.json.help import help_menu

class Help(commands.Cog):
  def __init__(self, bot):
    self.bot = bot

  @commands.command()
  async def help(self, ctx,arg=None):
    embed.color = discord.Color.random()
    embed_General.color = discord.Color.random()
    embed_Moderation.color = discord.Color.random()
    embed_Other.color = discord.Color.random()
    embed_Emoji.color = discord.Color.random()
    embed_Currency.color = discord.Color.random()
    inpt = None
    if arg == None:
      paginationList = [embed, embed_General, embed_Moderation, embed_Other, embed_Emoji, embed_Currency]
      current = 0
      mainMessage = await ctx.reply(
        embed = paginationList[current],
        components = [
            [
              Button(label="Invite Me",
              style = ButtonStyle.URL, url="https://discord.com/api/oauth2/authorize?client_id=823699570147065876&permissions=268823670&redirect_uri=https%3A%2F%2Fdiscord.com%2Foauth2%2Fauthorize%3Fclient_id%3DCapitalismBot&scope=bot%20applications.commands"),
              Button(label="Support Server",
              style = ButtonStyle.URL, url="https://discord.gg/capitalism"),
            ],
            [
                Button(
                    label = "⬅️",
                    id = "back",
                    style = ButtonStyle.green
                ),
                Button(
                    label = f"Page {int(paginationList.index(paginationList[current])) + 1}/{len(paginationList)}",
                    id = "cur",
                    style = ButtonStyle.grey,
                    disabled = True
                ),
                Button(
                    label = "➡️",
                    id = "front",
                    style = ButtonStyle.green
                )
            ]
        ],
        mention_author=False
      )
      while True:
        try:
            interaction = await self.bot.wait_for(
                "button_click",
                check = lambda i: i.component.id in ["back", "front"] and i.message.id == mainMessage.id,
                timeout = 30.0
            )
            if interaction.user != ctx.author:
              await interaction.respond(type=6)
              continue
            if interaction.component.id == "back":
                current -= 1
            elif interaction.component.id == "front":
                current += 1
            if current == len(paginationList):
                current = 0
            elif current < 0:
                current = len(paginationList) - 1
            await interaction.respond(
                type = InteractionType.UpdateMessage,
                embed = paginationList[current],
                components = [
                    [
                      Button(label="Invite Me",
                      style = ButtonStyle.URL, url="https://discord.com/api/oauth2/authorize?client_id=823699570147065876&permissions=268823670&redirect_uri=https%3A%2F%2Fdiscord.com%2Foauth2%2Fauthorize%3Fclient_id%3DCapitalismBot&scope=bot%20applications.commands"),
                      Button(label="Support Server",
                      style = ButtonStyle.URL, url="https://discord.gg/capitalism"),
                    ],
                    [
                        Button(
                            label = "⬅️",
                            id = "back",
                            style = ButtonStyle.green
                        ),
                        Button(
                            label = f"Page {int(paginationList.index(paginationList[current])) + 1}/{len(paginationList)}",
                            id = "cur",
                            style = ButtonStyle.grey,
                            disabled = True
                        ),
                        Button(
                            label = "➡️",
                            id = "front",
                            style = ButtonStyle.green
                        )
                    ]
                ]
            )
        except asyncio.TimeoutError:
            await mainMessage.edit(
                components = [
                    [
                      Button(label="Invite Me",
                      style = ButtonStyle.URL, url="https://discord.com/api/oauth2/authorize?client_id=823699570147065876&permissions=268823670&redirect_uri=https%3A%2F%2Fdiscord.com%2Foauth2%2Fauthorize%3Fclient_id%3DCapitalismBot&scope=bot%20applications.commands"),
                      Button(label="Support Server",
                      style = ButtonStyle.URL, url="https://discord.gg/capitalism"),
                      Button(
                        label = "Timeout",
                        id = "timeout",
                        style = ButtonStyle.red,
                        disabled = True
                      )
                    ]
                ]
            )
            break
    else:
      inpt = arg.lower()
      if inpt == "all":
        await ctx.reply(embed=embed, mention_author=False)
      elif inpt == "moderation":
        await ctx.reply(embed=embed_Moderation, mention_author=False)
      elif inpt == "other":
        await ctx.reply(embed = embed_Other, mention_author=False)
      elif inpt == "emoji":
        await ctx.reply(embed = embed_Emoji, mention_author=False)
      elif inpt == "currency":
        await ctx.reply(embed = embed_Currency, mention_author=False)
      elif inpt == "general":
        await ctx.reply(embed=embed_General, mention_author=False)
      elif inpt == "data":
        embed_Data = discord.Embed(
          color = discord.Color.random()
        )
        embed_Data.add_field(
          name = "`Data Type Commands`",
          value = "`removedata`, `removelogs`, `removeall`"
        )
        await ctx.reply(embed=embed_Data, mention_author=False)
      else:
        try:
          command = self.bot.get_command(inpt)
          inpt = command.name
          try:
            desc = help_menu[inpt]["use"]
            cooldown = help_menu[inpt]["cooldown"]
            alias = help_menu[inpt]["aliases"]
            footer = help_menu[inpt]["footer"]
            em = discord.Embed(
              title = inpt,
              description = f"__**Description**__: {desc} \n __**Cooldown**__: {cooldown} seconds \n __**Aliases**__: {alias}"
            )
            em.set_footer(text=f"Command format --- {footer}")
            await ctx.reply(embed=em, mention_author=False)
          except:
            await ctx.reply(f"{command.name} is a valid command but no help source was found.", mention_author=False)
        except:
          await ctx.reply("that is not a valid category or command!", mention_author=False)

def setup(bot):
    bot.add_cog(Help(bot))
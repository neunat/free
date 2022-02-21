import discord

embed = discord.Embed(
        title="Help",
        url="https://www.google.com",
        description="Here are all the categories.",
        color=discord.Color.random()
    ).add_field(
        name="General",
        value="`CAPhelp general`"
    ).add_field(
        name="Moderation",
        value="`CAPhelp moderation`"
    ).add_field(
        name="Other",
        value="`CAPhelp other`"
    ).add_field(
        name="Emoji",
        value="`CAPhelp emoji`"
    ).add_field(
        name="Currency",
        value="`CAPhelp currency`"
    ).add_field(
      name="data",
      value = "`CAPhelp data`"
    ).set_footer(
        text="CAPdonate coming soon 👀 I will make it p2w (jk)"
)
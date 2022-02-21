from discord.ext import commands
import discord, math 
import time

class Epic(commands.Cog):
  def __init__(self, bot):
    self.bot = bot
    
  @commands.command(name='cool')
  async def ee(self, ctx, arg1):
    await ctx.send(ctx)

  @commands.command(name="listcogs")
  async def listcogs(self, ctx):
      base_string = "```css\n"
      base_string += "\n".join([str(cog) for cog in self.bot.extensions])
      base_string += "\n```"
      await ctx.send(base_string)

  @commands.command()
  async def hello(self, ctx):
    d = self.bot.cogs
    keys = d.keys()
    for key in keys:
      await ctx.send(key)

  @commands.command()
  async def hi(self, ctx, arg):
    hiii = self.bot.get_cog(arg)
    hhh = hiii.get_commands()
    for dd in hhh:
      await ctx.send(dd.name)

    @commands.Command(name="ping")
    async def hehe(self, ctx):
        message = None

        # We'll show each of these readings as well as an average and standard deviation.
        api_readings = []
        # We'll also record websocket readings, but we'll only provide the average.
        websocket_readings = []

        hello = '±'

        # We do 6 iterations here.
        # This gives us 5 visible readings, because a request can't include the stats for itself.
        for _ in range(6):
            # First generate the text
            text = "Calculating round-trip time...\n\n"
            text += "\n".join(f"Reading {index + 1}: {reading * 1000:.2f}ms" for index, reading in enumerate(api_readings))

            if api_readings:
                average = sum(api_readings) / len(api_readings)

                if len(api_readings) > 1:
                    stddev = math.sqrt(sum(math.pow(reading - average, 2) for reading in api_readings) / (len(api_readings) - 1))
                else:
                    stddev = 0.0

                text += f"\n\nAverage: {average * 1000:.2f} \N{hello} {stddev * 1000:.2f}ms"
            else:
                text += "\n\nNo readings yet."

            if websocket_readings:
                average = sum(websocket_readings) / len(websocket_readings)

                text += f"\nWebsocket latency: {average * 1000:.2f}ms"
            else:
                text += f"\nWebsocket latency: {self.bot.latency * 1000:.2f}ms"

            # Now do the actual request and reading
            if message:
                before = time.perf_counter()
                await message.edit(content=text)
                after = time.perf_counter()

                api_readings.append(after - before)
            else:
                before = time.perf_counter()
                message = await ctx.send(content=text)
                after = time.perf_counter()

                api_readings.append(after - before)

            # Ignore websocket latencies that are 0 or negative because they usually mean we've got bad heartbeats
            if self.bot.latency > 0.0:
                websocket_readings.append(self.bot.latency)

def setup(bot):
  bot.add_cog(Epic(bot))
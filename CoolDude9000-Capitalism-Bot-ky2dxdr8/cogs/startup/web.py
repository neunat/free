from aiohttp import web
from discord.ext import commands, tasks
import discord
import os
import aiohttp

app = web.Application()
routes = web.RouteTableDef()

def setup(bot):
    bot.add_cog(Webserver(bot))

class Webserver(commands.Cog):
    def __init__(self, bot):
        self.bot = bot
        self.web_server.start()

        @routes.get('/')
        async def welcome(request):
            return web.Response(text="Running")
        
        @routes.get('/vote')
        async def votewebhook(request):
          try:
            user = request.headers.get('user')
            website = request.headers.get('website')
          except Exception as e:
            print(e)
            return web.Response(text='{"status": 404}\n')
          try:
            user_ = await self.bot.fetch_user(user)
          except:
            return web.Response(text='{"status": 404}\n')
          try:   
            await user_.send(f"Thanks for voting for me on {website}!")
          except:
            pass
          return web.Response(text='{"status": 200}\n')

        self.webserver_port = os.environ.get('PORT', 5000)
        app.add_routes(routes)

    @tasks.loop()
    async def web_server(self):
        runner = web.AppRunner(app)
        await runner.setup()
        site = web.TCPSite(runner, host='0.0.0.0', port=self.webserver_port)
        await site.start()

    @web_server.before_loop
    async def web_server_before_loop(self):
        await self.bot.wait_until_ready()
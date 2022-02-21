from quart import Quart

app = Quart('')

#slide addons below here...

#...and above here. Remove these 2 comments later

@app.route('/')
async def home():
  return ''

def run():
  app.run(
    host='0.0.0.0',
    port=8000,
    debug=True
  )

run()
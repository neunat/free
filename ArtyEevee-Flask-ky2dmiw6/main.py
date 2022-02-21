from flask import Flask

app = Flask("ArtyWebPy")

app.run(
  host = "0.0.0.0",
  port = "1434",
  debug = True
)
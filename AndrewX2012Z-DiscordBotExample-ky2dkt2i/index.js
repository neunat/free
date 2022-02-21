let Discord = require("discord.js")
let client = new Discord.Client()

client.on("ready", () => {
  client.user.setActivity("By AndrewX", { type: "PLAYING" })
}) 

client.on("message", async message => {
  if(message.content === "!ping") {
    message.channel.send(`Pong! | ${client.ws.ping}ms!`)
  }
})

const express = require("express");
const app = express()
const port = 3000

app.get("/", (req, res) => {
  res.send(`Made by AndrewX`);
});

app.listen(port, () => {
  console.log(`Example app is listening to port: ${port}`);
});


client.login(process.env.token)
const Discord = require("discord.js")
const fetch = require("node-fetch")
const keepAlive = require("./server")
const Database = require("@replit/database")

const db = new Database()
const client = new Discord.Client()

const sadWords = ["sad", "depressed", "unhappy", "angry"]

const starterEncouragements = [
  "Cheer up, buddy!",
  "You got this, I know it can get hard.",
  "Don't give up, it's going to be okay.",
  "A friend makes everything better :-)"
]

var responses = ['https://cdn.discordapp.com/attachments/667896707421437954/909990870122643476/86a51ebfd4480c0221faf4bdb58d597d.mov','https://i.imgur.com/m7KLwYx.mp4','https://i.imgur.com/EHHT27h.mp4','https://i.imgur.com/RLUfVjn.mp4','https://i.imgur.com/y7asTtA.mp4','https://i.imgur.com/b0UcMuN.png','https://i.imgur.com/8hf1CFz.jpeg','https://i.imgur.com/xf6IteA.mp4','https://i.imgur.com/XLwZCf3.jpeg','https://i.imgur.com/zFoWDe0.mp4','https://i.imgur.com/8qYozrM.jpeg','https://i.imgur.com/hh4ucSc.jpeg','https://i.imgur.com/uZd161n.jpeg','https://i.imgur.com/0s4V013.jpeg','https://i.imgur.com/OzGBa1B.jpeg','https://i.imgur.com/qADX0Gw.mp4','https://i.imgur.com/zpj4Ek6.jpeg','https://i.imgur.com/JFhsT9C.jpeg,','https://i.imgur.com/U9m2asL.mp4'];

db.get("encouragements").then(encouragements => {
  if (!encouragements || encouragements.length < 1) {
    db.set("encouragements", starterEncouragements)
  }
})

db.get("responding").then(value => {
  if (value == null) {
    db.set("responding", true)
  }
})

function updateEncouragements(encouragingMessage) {
  db.get("encouragements").then(encouragements => {
    encouragements.push([encouragingMessage])
    db.set("encouragements", encouragements)
  })
}

function deleteEncouragement(index) {
  db.get("encouragements").then(encouragements => {
    if (encouragements.length > index) {
      encouragements.splice(index, 1)
      db.set("encouragements", encouragements)
    }
  })  
}

function getQuote() {
  return fetch("https://zenquotes.io/api/random")
    .then(res => {
      return res.json()
    })
    .then(data => {
      return data[0]["q"] + " -" + data[0]["a"]
    })
}

client.on("ready", () => {
  console.log(`Logged in as ${client.user.tag}!`)
})

client.on("message", msg => {
  if (msg.author.bot) return

  if (msg.content === "*inspire") {
    getQuote().then(quote => msg.channel.send(quote))
  }

  db.get("responding").then(responding =>{
    if (responding && sadWords.some(word => msg.content.includes(word))) {
      db.get("encouragements").then(encouragements => {
        const encouragement = encouragements[Math.floor(Math.random() * encouragements.length)]
        msg.reply(encouragement)
      })
    }
  })


  if (msg.content.startsWith("*new")) {
    encouragingMessage = msg.content.split("*new ")[1]
    updateEncouragements(encouragingMessage)
    msg.channel.send("New encouraging message added.")
  }
  if (msg.content === "*funny") {
    msg.channel.send(responses[Math.floor(Math.random() * responses.length)]);//it will send
  }

  if (msg.content.startsWith("*del")) {
    index = parseInt(msg.content.split("*del ")[1])
    deleteEncouragement(index)
    msg.channel.send("Encouraging message deleted.")
  }

  if (msg.content.startsWith("*list")) {
    db.get("encouragements").then(encouragements => {
      msg.channel.send(encouragements)
    })
  }

  if (msg.content.startsWith("*responding")) {
    value = msg.content.split("*responding ")[1]

    if (value.toLowerCase() == "true") {
      db.set("responding", true)
      msg.channel.send("Responding is on.")
    } else {
       db.set("responding", false)
      msg.channel.send("Responding is off.")     
    }
  }

})

keepAlive()
client.login(process.env.TOKEN)
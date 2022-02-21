// IF YOU DIDN'T TURN ON SERVER MEMBERS INTENT IN DISCORD DEV PORTAL THIS BOT WONT WORK
const { Default_Prefix, Color, Support } = require("../../config.js");
const Discord = require("discord.js");
const db = require("old-wio.db");

module.exports = {
  name: "help",
  aliases: ["h"],
  category: "Info",
  description: "Shows all the commands of the bot",
  usage: "Help | <Command Name>",
  run: async (client, message, args) => {
    let Prefix = await db.fetch(`Prefix_${message.guild.id}`);
    if (!Prefix) Prefix = Default_Prefix;
    
    const Config = client.commands.filter(cmd => cmd.category === "Config").array().map(m => m.name.charAt(0).toUpperCase() + m.name.slice(1)).join(", ");
    const Info = client.commands.filter(cmd => cmd.category === "Info").array().map(m => m.name.charAt(0).toUpperCase() + m.name.slice(1)).join(", ");
    
    const Embed = new Discord.MessageEmbed()
    .setColor(Color)
    .setThumbnail(client.user.displayAvatarURL({ format: "png" }))
    .setTitle(`${client.user.username} Commands!`)
    .setDescription(`Type The Following Command For A Specific Command Information -\n**${Prefix}Help <Command Name>**\n\n** ⚙️ Config**\n${Config}\n\n**🔮 Other**\n${Other}\n\nUseful Links:\nSupport Server - [Click Here]("") \nBot Link - [Click Me](https://discord.com/oauth2/authorize?client_id=${client.user.id}&scope=bot&permissions=8)\n\nThank You So Much <3`)
    .setFooter(`Requested By ${message.author.username}`) // Add Your Support Server in Between the "
    .setTimestamp();
    
    if (!args[0]) return message.channel.send(Embed);
    
    let command = client.commands.get(args[0].toLowerCase()) || client.commands.get(client.aliases.get(args[0].toLowerCase()));
    
    if (!command) return message.channel.send(`No Command Found - ${args[0].charAt(0).toUpperCase() + args[0].slice(1)}`);
    
    const Embeded = new Discord.MessageEmbed()
    .setColor(Color)
    .setThumbnail(client.user.displayAvatarURL({ format: "png" }))
    .setTitle(`Command Information!`)
    .addField(`Name`, command.name.charAt(0).toUpperCase() + command.name.slice(1), true)
    .addField(`Category`, command.category || "No Category", true)
    .addField(`Aliases`, command.aliases ? command.aliases.join(", ") : "No Aliases", true)
    .addField(`Usage`, command.usage, true)
    .addField(`Description`, command.description)
    .setFooter(`Requested By ${message.author.username}`)
    .setTimestamp();
    
    return message.channel.send(Embeded);
  }
};

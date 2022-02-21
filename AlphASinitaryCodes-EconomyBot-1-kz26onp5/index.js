const Discord = require ("discord.js");
const Config = require ("./config.json");
const Token = require ("./token.json");
const fs = require ("fs");

const bot = new Discord.Client ({disableEveryone: true});
bot.commands = new Discord.Collection ();

fs.readdir ("./commands/", (err, files) => {
	if (err) console.log (err);
	let jsfile = files.filter (f => f.split(".").pop () === "js");
	if (jsfile.length <= 0) {
		console.log ("Could not find command.")
		return;
	}
	jsfile.forEach ((f, i) => {
		let props = require (`./commands/${f}`);
		console.log (`${f} loaded!`);
		bot.commands.set (props.help.name, props);
	});	
});

bot.on ("ready", async () => {
	var servers = "different servers!";
	if(bot.guilds.size === 1) servers = "server!";
	console.log(`${bot.user.username} is verifying humans and stoping bots on ${bot.guilds.size} ` + servers);
	bot.user.setActivity(`out for bots on ${bot.guilds.size} ` + servers, {type: "WATCHING"});
});

bot.on ("guildMemberAdd", async member => {
	let unverified = message.guild.roles.find ('name', "Unverified");
	if (!unverified) {
		try {
			unverified = await message.guild.createRole ({
				name: "Unverified",
				color: "#000000",
				permissions:[]
			});
		} catch (e) {
			console.log ("failed to create role.");
			console.log (e.stack);
		}
	}

	try {
		message.guild.channels.forEach (async (channel, id) => {
			await channel.overwritePermissions (unverified, {
				SEND_MESSAGES: false,
				CONNECT: false
			});
		});
	} catch (e) {
		console.log ("failed to update perms");
		console.log(e.stack);
	}
	member.addRole (unverified);
});

bot.on("message", async message => {
	if (message.author.bot)
	if (message.channel.type === "dm") return;
	let prefix = Config.prefix;
	let msgArray = message.content.split(" ");
	let cmd = msgArray [0];
	let args = msgArray.slice(1);
	let cmdFile = bot.commands.get (cmd.slice (prefix.length));
	if (cmdFile) cmdFile.run (bot, message, args);
	console.log(`running command ${cmdFile}`);
});

bot.login (Token.token);
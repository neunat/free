let Discord;
let Database;
if (typeof window !== "undefined") {
    Discord = DiscordJS;
    Database = EasyDatabase;
} else {
    Discord = require("discord.js");
    Database = require("easy-json-database");
}
const delay = (ms) => new Promise((resolve) => setTimeout(() => resolve(), ms));
const s4d = {
    Discord,
    client: null,
    tokenInvalid: false,
    reply: null,
    joiningMember: null,
    database: new Database("./db.json"),
    checkMessageExists() {
        if (!s4d.client) throw new Error('You cannot perform message operations without a Discord.js client')
        if (!s4d.client.readyTimestamp) throw new Error('You cannot perform message operations while the bot is not connected to the Discord API')
    }
};
s4d.client = new s4d.Discord.Client({
    fetchAllMembers: true
});
s4d.client.on('raw', async (packet) => {
    if (['MESSAGE_REACTION_ADD', 'MESSAGE_REACTION_REMOVE'].includes(packet.t)) {
        const guild = s4d.client.guilds.cache.get(packet.d.guild_id);
        if (!guild) return;
        const member = guild.members.cache.get(packet.d.user_id) || guild.members.fetch(d.user_id).catch(() => {});
        if (!member) return;
        const channel = s4d.client.channels.cache.get(packet.d.channel_id);
        if (!channel) return;
        const message = channel.messages.cache.get(packet.d.message_id) || await channel.messages.fetch(packet.d.message_id).catch(() => {});
        if (!message) return;
        s4d.client.emit(packet.t, guild, channel, message, member, packet.d.emoji.name);
    }
});
var arguments2, command;

function colourRandom() {
    var num = Math.floor(Math.random() * Math.pow(2, 24));
    return '#' + ('00000' + num.toString(16)).substr(-6);
}


s4d.client.on('ready', async () => {
    s4d.client.user.setActivity(String('Friends and chill bot.'));
    s4d.client.channels.cache.find((channel) => channel.name === 'bt-logon').send(String('ONLINE'));

});

s4d.client.login('ODY1MzYzMTg1MjE3MDQ0NDkw.YPC6RQ.6A_69kPzQGHHVT4uxsV_qk8jbaE').catch((e) => {
    s4d.tokenInvalid = true;
    s4d.tokenError = e;
});

s4d.client.on('message', async (s4dmessage) => {
    arguments2 = (s4dmessage.content).split(' ');
    command = arguments2.splice(0, 1)[0];
    if (command == '!say') {
        s4dmessage.channel.send(String('You have written the following content after !say:'));
        s4dmessage.channel.send(String((arguments2.join(' '))));
    }
    if (command == '!motd') {
        s4d.client.channels.cache.find((channel) => channel.name === 'bt-logon').send(String((arguments2.join(' '))));
        s4d.client.channels.cache.find((channel) => channel.name === 'bt-logon').send((arguments2[1]));
        if (((arguments2.join(' ')) || '').startsWith('set' || '')) {
            s4d.database.set(String('motd'), (String((arguments2.join(' '))).replace(new RegExp(String('set '), 'g'), String(''))));
            s4dmessage.channel.send({
                embed: {
                    title: 'MOTD Set',
                    color: '#ffcc00',
                    image: {
                        url: null
                    },

                    description: ('Mesage of the say set to: ' + String(s4d.database.get(String('motd')))),
                    footer: {
                        text: ('Set by: ' + String(s4dmessage.author.username))
                    },
                    thumbnail: {
                        url: null
                    }

                }
            });
        }
        if (((arguments2.join(' ')) || '').startsWith('query' || '')) {
            s4dmessage.channel.send({
                embed: {
                    title: 'Message Of the Day!',
                    color: '#ffcc00',
                    image: {
                        url: null
                    },

                    description: ('MOTD: ' + String(s4d.database.get(String('motd')))),
                    footer: {
                        text: ('Queried by:' + String(s4dmessage.author.username))
                    },
                    thumbnail: {
                        url: ('http://placehold.jp/99ccff/003366/250x250.png?text=MOTD:%0A' + String(s4d.database.get(String('motd'))))
                    }

                }
            });
        }
    }
    if (command == '!whereami') {
        s4dmessage.channel.send({
            embed: {
                title: ((s4dmessage.channel || {}).name),
                color: (colourRandom()),
                image: {
                    url: null
                },

                description: ('id: ' + String(s4dmessage.channel)),
                footer: {
                    text: '- Friends and chill bot.'
                },
                thumbnail: {
                    url: ((s4dmessage.guild).iconURL({
                        dynamic: true
                    }))
                }

            }
        });
        s4d.client.user.setActivity(String('MOTD: ' + String(s4d.database.get(String('motd')))));
    }

});

s4d;
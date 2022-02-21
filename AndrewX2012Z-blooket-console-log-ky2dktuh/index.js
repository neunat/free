const Blooket = require("blooket")
const client = new Blooket();

client.joinGame('game id', 'twst', 'Dog')

client.on('Joined', data = {
    console.log(`Joined game with name: ${data.name}\nJoined game with blook: ${data.blook}`)
})
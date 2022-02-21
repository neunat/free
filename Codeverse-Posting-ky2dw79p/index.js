const express = require('express');
const socket = require('socket.io');
const app = express();
const server = app.listen();
const io = socket(server);
const path = require('path');

app.use(express.static(path.join(__dirname, 'client')));

io.on('connection', socket => {
  console.log(socket.id);
});
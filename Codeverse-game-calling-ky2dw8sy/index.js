const express = require('express');
const app = express();
const socket = require('socket.io');
const path = require('path');
const server = app.listen();
const io = socket(server);
const Datastore = require('nedb');
const accounts = new Datastore({filename: path.join(__dirname, 'databases', 'accounts.db'), autoload: true});
app.use(express.static(path.join(__dirname, 'client')));
io.on('connection', socket => {
  console.log(socket.id);
});
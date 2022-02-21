/* Imports and variable declaration */
const express = require('express');
const app = express();
const server = require('http').createServer(app);
const io = require("socket.io")(server);
const views = __dirname + "/views";

/* Middlewares */
app.use("/public", express.static(__dirname+"/public"));

/* Routes */
app.all("/", (req, res)=>{
  res.sendFile(`${views}/main.html`);
});

/* Server runner */
server.listen(6969, ()=>{
  console.log("Server online!");
});

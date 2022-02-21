const express = require("express");
const app = express();

// DONT DO THIS PLZ
app.use(express.static(__dirname + "/codemirror"));
app.use(express.static(__dirname + "/public"));

app.listen(8080);

console.log("ready on 8080");
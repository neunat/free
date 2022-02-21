const express = require("express")
express()
    .use(express.static(__dirname + "/public"))
    .use("/codemirror", express.static(__dirname + "/codemirror"))
    .listen(8080);

console.log("Ready on 8080");
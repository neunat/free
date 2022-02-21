const app = require('express')();
const http = require('http')
const https = require("https")
const server = http.createServer(app);
const io = require('socket.io')(server);

const Database = require("@replit/database")
const db = new Database()
db.set("key2", "value").then(() => {});

db.get("key").then(value => {
  console.log(value)
  console.log(typeof value)
});



app.get('/', (req, res) => {
  res.sendFile(__dirname + "/public/index.html")
});

app.get('/script.js', (req, res) => {
  res.sendFile(__dirname + "/public/script.js")
});

io.on('connection', (socket) => { 
  socket.on("message", (data) => {
    if(data.databaseUrl != null && data.operation != null && data.databaseUrl.trim() != ""  && data.databaseUrl.includes("kv.replit.com")) {
      var databaseUrl = data.databaseUrl
      var url = databaseUrl
      var method = "GET"

      if(data.operation == "GET_ALL") {
        url += "?prefix"
      }
      else if(data.operation == "GET_KEY") {
        url += "/" + data.key
      }
      else if(data.operation == "DELETE_KEY") {
        url += "/" + data.key
        method = "DELETE"
      }
      else if(data.operation == "SET_KEY") {
        if(typeof data.value != "string" || typeof data.value != "number") {
          if(typeof data.value.toString == "function") {
            data.value = data.value.toString()
          }
          else {
            data.value = ""
          }
        }

        url += "/" + data.key + "=" + data.value
        method = "POST"
      }

      httpRequest(url, method, function(socket, socketData, data) {
        if(socketData.operation == "GET_ALL") {
          data = data.split("\n")
          socket.emit("message", {keys: data})

          for(key of data) {
            httpRequest(databaseUrl + "/" + key, "GET", function(socket, socketData, data, customData) {
              socket.emit("message", {key: customData.key, value: data})
            }, socket, socketData, {key: key})
          }
        }
        else if(socketData.operation == "GET_KEY") {
          socket.emit("message", {key: socketData.key, value: data})
        }
      }, socket, data)
    }
  })
});
server.listen(3000);

console.log(https)

function httpRequest(url, method, thenFunction, socket, socketData, customData) {
  if(method != "GET") {
    var options = {
      host: "kv.replit.com",
      path: url.split("kv.replit.com")[1],
      method: method
    };

    var req = https.request(options);
    req.end();
  }
  else {
    https.get(url, res => {
      let data = "";

      res.on('data', chunk => {
        data += chunk
      });

      res.on('end', () => {
        thenFunction(socket, socketData, data, customData)
      });
    }).on('error', err => {
      console.log('Error: ', err.message);
    });
  }
}
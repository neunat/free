const socket = io();
var table = document.getElementById("database-table-body");
var databaseUrl = ""

function loadDatabase() {
  databaseUrl = document.getElementById("databaseURL").value

  socket.emit("message", {databaseUrl: databaseUrl, operation: "GET_ALL"})
}

function addKey() {
  UIkit.modal.prompt("What should this key be called?", "").then(function (key) {
    if(key != null) {
      if(document.getElementById("key-" + key)) {
        UIkit.modal.alert("It looks like you already have a key with that name. All key names should be unique.")
      }
      else {
        UIkit.modal.prompt("What is the value for this new key? (strings and numbers only):", "").then(function (value) {
          if(value != null) {
            socket.emit("message", {databaseUrl: databaseUrl, operation: "SET_KEY", key: key, value: value})

            var row = table.insertRow(-1);
            row.id = "key-" + key

            var cell1 = row.insertCell(0);
            var cell2 = row.insertCell(1);
            var cell3 = row.insertCell(2);
            cell1.innerHTML = key;
            cell2.innerHTML = value;
            cell2.id = "value-" + key
            cell3.innerHTML = `<button class="uk-button uk-button-default" onclick="getKey('`+key+`')">Reload</button><button class="uk-button uk-button-primary" onclick="setKey('`+key+`')">Edit</button><button class="uk-button uk-button-danger" onclick="deleteKey('`+key+`')">Delete</button>`;
          }
        });
      }
    }
  });
}

function getKey(key) {
  document.getElementById("value-" + key).innerHTML = "Loading, please wait...";
  socket.emit("message", {databaseUrl: databaseUrl, operation: "GET_KEY", key: key})
}

function deleteKey(key) {
  document.getElementById("key-" + key).remove()
  socket.emit("message", {databaseUrl: databaseUrl, operation: "DELETE_KEY", key: key})
}

function setKey(key) {
  UIkit.modal.prompt("New value for key '"+key+"' (strings and numbers only):", document.getElementById("value-" + key).innerHTML).then(function (value) {
    if(value != null) {
      socket.emit("message", {databaseUrl: databaseUrl, operation: "SET_KEY", key: key, value: value})

      document.getElementById("value-" + key).innerHTML = value
    }
  });
}

socket.on("connect", () => {
  socket.on("message", (data) => {
    console.log(data)

    if(data.keys != null) {
      table.innerHTML = ""

      for(key of data.keys) {
        var row = table.insertRow(-1);
        row.id = "key-" + key

        var cell1 = row.insertCell(0);
        var cell2 = row.insertCell(1);
        var cell3 = row.insertCell(2);
        cell1.innerHTML = key;
        cell2.innerHTML = "Loading, please wait...";
        cell2.id = "value-" + key
        cell3.innerHTML = `<button class="uk-button uk-button-default" onclick="getKey('`+key+`')">Reload</button><button class="uk-button uk-button-primary" onclick="setKey('`+key+`')">Edit</button><button class="uk-button uk-button-danger" onclick="deleteKey('`+key+`')">Delete</button>`;

        document.getElementById("addButton").style.display = "block"
      }
    }
    else if(data.key != null && data.value != null) {
      document.getElementById("value-" + data.key).innerHTML = data.value
    }
  });
});
async function write(sentence) {
  sentence = sentence.split(" ");
  for (let i = 0; i < sentence.length; i++) {
    for (let I = 0; I < sentence[i].length; I++) {
      await new Promise(resolve => setTimeout(resolve, 50));
      process.stdout.write(sentence[i][I])
    }
    await new Promise(resolve => setTimeout(resolve, 150));
    process.stdout.write(" ")
}
const Database = require("@replit/database")
const db = new Database()
let name = ""
let user = {}
//{name: {"health": "100", "attackDmg": "1", "ShieldPercentage": "0", "money": "0", "items": []}}
write("Hi! Welcome to RAGNAROK. Please enter a name. \n").then(function(){name = prompt("")}).then(function(){write("Hello, " + name + "!\n")}).then(if (name in db.list().then(keys => {})) {user = db.get(name).then(value => {})} else {db.set(name, {"health": "100", "attackDmg": "1", "ShieldPercentage": "0", "money": "0", "items": []}})})
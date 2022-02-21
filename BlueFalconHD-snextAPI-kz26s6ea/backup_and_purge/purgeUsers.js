const Database = require("jsondatabase");

const db = new Database({
    path: '../users.json'
});

let keys = db.keys('')
console.log('Starting...')
for (let i = 0; i < keys.length; i++) {
    console.log('Deleting: ' + keys[i])
    db.kdel(keys[i])
}
console.log('Done!')
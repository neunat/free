// Import required components from ServerFire
const {Server, bodyparser, Router, route, generateMiddleware, tools} = require('serverfire');

const fetch = require('node-fetch');

const Database = require('./db.js');

const db = new Database("db.sqlite3");
/*
(async () => {
  await db.runScriptsAsync([
    "CREATE TABLE users (username TEXT, id INTEGER, scratchteam INTEGER, profile INTEGER, joined TEXT)",
    "CREATE TABLE project_comments (actor INTEGER, id INTEGER, commentee_id INTEGER, content TEXT, datetime_created TEXT, datetime_modified TEXT, parent_id INTEGER, visibility TEXT, base_project INTEGER)",
    "INSERT INTO users (username, id, scratchteam, profile, joined) VALUES ('AmazingMech2418', 19030691, 0, 18192545, '2016-10-18T20:25:47.000Z')",
    "INSERT INTO users (username, id, scratchteam, profile, joined) VALUES ('Jeffalo', 34018398, 0, 33154992, '2018-06-19T10:12:53.000Z')",
    "INSERT INTO users (username, id, scratchteam, profile, joined) VALUES ('ScratchCat', 15883188, 0, 15047907, '2007-03-05T00:00:00.000Z')",
    "INSERT INTO users (username, id, scratchteam, profile, joined) VALUES ('Unknown', 0, 0, 0, 'Never')",
    "INSERT INTO project_comments (actor, id, commentee_id, content, datetime_created, datetime_modified, parent_id, visibility, base_project) VALUES (0, 3, -1, 'this is a test', 'Never', 'Never', -1, 'visible', 104)"
    ]);
  //let results = await db.runAsync("SELECT username FROM auth WHERE username = 'user1'");
  //console.log(results);
})();
//*/


// Create router middleware
const router = new Router();
const r = route(router);

let pings = 0;


// Create server
const server = new Server();
server.create();

// Add CORS; ideal for API development
server.use(tools.cors);
// Add bodyparser for parsing POST requests
server.use(bodyparser);
// Include router in server
server.use(r);

router.post("/query", async (req, res) => {
    if(req.body.token == process.env.TOKEN) {
        let results = await db.runAsync(req.body.query);
        res.sendJSON(results);
        res.finish();
    } else {
        res.sendJSON({error: "Invalid token"});
        res.finish();
    }
}, true);

router.post("/comment", async (req, res) => {
    let actor = +req.body.actor || 0;
    let id = ((await db.runAsync("SELECT * FROM project_comments")).length + 10);
    let content = `This is some dummy text for testing purposes. Comment ID: ${id}`;
    let datetime_created = (new Date()).toString();
    let datetime_modified = (new Date()).toString();
    let parent_id = req.body.parent_id=="null"?-1:(+req.body.parent_id || -1);
    let commentee_id = req.body.commentee_id=="null"?-1:(+req.body.commentee_id || -1);
    let visibility = "visible";
    let base_project = 104;

    console.log(await db.runAsync(`INSERT INTO project_comments (actor, id, commentee_id, content, datetime_created, datetime_modified, parent_id, visibility, base_project) VALUES (${actor}, ${id}, ${commentee_id}, '${content.split("'").join("''")}', '${datetime_created}', '${datetime_modified}', ${parent_id}, '${visibility}', ${base_project})`));

    res.sendJSON({status: "success"});
    res.finish();
}, true);


// Start server
server.listen(3000);

// Import required components from ServerFire
const {Server, bodyparser, Router, route, generateMiddleware, tools} = require('serverfire');

const fetch = require('node-fetch');


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

router.all("/users/$username/projects/$id/comments", async (req, res) => {
    const page = req.url.searchParams.get('page') || 1;

    const data = await (fetch(`https://api.scratch.mit.edu/users/${req.urlParams.username}/projects/${req.urlParams.id}/comments?offset=${20 * (page - 1)}&limit=20`).then(n=>n.json()));

    for(let comment of data.map(n => n.id)) {
        const num = data[data.map(n=>n.id).indexOf(comment)].reply_count;

        let replies = [];
        for(let i = 0; i < num; i += 40)
            replies = replies.concat(await (fetch(`https://api.scratch.mit.edu/users/${req.urlParams.username}/projects/${req.urlParams.id}/comments/${comment}/replies?offset=${i}&limit=40`).then(n=>n.json())));

        for(let i in replies) {
            delete replies[i].reply_count;
        }

        data[data.map(n=>n.id).indexOf(comment)].replies = replies;
    }

    for(let i in data) {
        delete data[i].reply_count;
    }

    res.sendJSON(data);
    res.finish();
}, true);


// Start server
server.listen(3000);

const http = require("http");

module.exports = 
class Client {
    actions = {};

    constructor(behavior = null) {
        // default override
        if (behavior) this.behavior = behavior;
    }

    listen(port = 8080, host = "0.0.0.0") {
        const server = http.createServer((req, res) => {
            if (this.behavior) {
                this.behavior(req, res);
                return;
            }

            for (const action of actions) {

            }
        });
        
        server.listen(port, host);

        return server;
    }

    get(path, )
};
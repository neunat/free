const Client = require("./client");

/**
 * statically serve the directory.
 * @returns {Client}
 */
module.exports.serveDir = (dir, port = 8080, host = '0.0.0.0') => {
    const client = new Client();

    client.listen(port, host);

    return client;
};
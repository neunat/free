const fetch = require("node-fetch");
const CloudflareBypasser = require('cloudflare-bypasser');

let cf = new CloudflareBypasser();

module.exports = () => {
  // You can get the replid by going to any repl, opening the browser
  // console and typing:
  // window.store.getState().plugins.infoprovider.state.repl.id
  const replId = "2a73b271-bb5c-4fd2-9cbb-0792258a082e";

  return fetch(`https://repl.it/api/v0/repls/${replId}/token`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      apiKey: process.env.CROSIS_KEY
    })
  })
  .then(res => {
	  console.log(res.status);
	  return res;
  })
  .then(res => res.json());
};

module.exports = () => {
  // You can get the replid by going to any repl, opening the browser
  // console and typing:
  // window.store.getState().plugins.infoprovider.state.repl.id
  const replId = "2a73b271-bb5c-4fd2-9cbb-0792258a082e";

  return cf.request(`https://replit.com/data/repls/${replId}/get_connection_metadata`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Cookie: "connect.sid="+process.env.SID
    },
    body: JSON.stringify({
      clientVersion: '7561851',
      format: 'pbuf'
    })
  })
  .then(res => {
    console.log(res.statusCode);

    return new Promise(resolve => {
      let data = "";

      res.on("data", chunk => {
        console.log(data);
        data += chunk.toString();
      });
      res.on("end", () => {
        resolve(data);
      });
    });
  })
  .then(res => {
      console.log(res, "owowo");
      return res;
  });
};
module.exports();
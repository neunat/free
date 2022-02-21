const fetch = require("node-fetch");

module.exports = () => {
  // You can get the replid by going to any repl, opening the browser
  // console and typing:
  // window.store.getState().plugins.infoprovider.state.repl.id
  const replId = "2a73b271-bb5c-4fd2-9cbb-0792258a082e";

  return fetch(`https://replit.com/data/repls/${replId}/get_connection_metadata`, {
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
	  console.log(res.json());
	  return res;
  })
  .then(res => res.json())
  .then(console.log);
};

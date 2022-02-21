// import fetch from "node-fetch";

// console.log(await fetch("https://replit.com/graphql", {
//     method: "POST",
//     headers: {
//         "Content-Type": "application/json",
//         "X-Requested-With": "XMLHttpRequest",
//         "Accept": "application/json",
//         "User-Agent": "Mozilla/2.0",
//         "Referrer": "https://replit.com",
//         "Origin": "https://replit.com",
//         "Cookie": "connect.sid="
//     },
//     body: JSON.stringify({
//         query: `query {
//             userByUsername(username: "Coder100") {
//                 id, karma
//             }
//         }`
//     })
// }).then(x => x.json()));
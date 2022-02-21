// ID of studio
const STUDIO_ID = 30057668;
const USERNAME = process.env.USERNAME;
const PASSWORD = process.env.PASSWORD;
const SHEET_URL = process.env.SHEET_URL;



// Needed for requests
const fetch = require("node-fetch")

// For authentication
const Session = require("./session.js");

// For file handling for wget thing
const fs = require("fs");

// For running wget
const { exec } = require("child_process");

// For filtering quotes
const filterCSV = require("./filterCSV.js");

/*
 * Gets data from Google Sheet
 */
function getSheet() {
  let promise = new Promise((resolve, reject) => {
    // URL to export
    const URL = SHEET_URL; // Can use a string instead too

    // Run wget
    exec(`wget --output-document=temp.csv "${URL}"`, () => {
      // Will print result and then return it
      let result = fs.readFileSync('temp.csv').toString();
      console.log(result);
      resolve(result);
    });
  });
  return promise;
}

/*
 * Sets descritpion of a project
 */
function setDescription(id, desc, user, callback) {
  // Data to send contains the description only
  const newData = {description: desc};
  fetch("https://scratch.mit.edu/site-api/galleries/all/" + id + "/", {
    "headers": {
      'X-Requested-With': 'XMLHttpRequest',
      'referer': 'https://scratch.mit.edu',
      "accept": "*/*",
      "accept-language": "en-US,en;q=0.9",
      "content-type": "application/json",
      "sec-ch-ua": "\" Not;A Brand\";v=\"99\", \"Google Chrome\";v=\"91\", \"Chromium\";v=\"91\"",
      "sec-ch-ua-mobile": "?0",
      "sec-fetch-dest": "empty",
      "sec-fetch-mode": "cors",
      "sec-fetch-site": "same-site",
      "cookie": user.cookie,
      "user-agent": "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.114 Safari/537.36", // Note: This is Windows XP, but anything else here works. XD
      'X-CSRFToken': user.token || process.env.TOKEN || 'a'
    },
    "referrer": "https://scratch.mit.edu/studios/"+id+"/comments",
    "referrerPolicy": "strict-origin-when-cross-origin",
    "body": JSON.stringify(newData),
    "method": "PUT",
    "mode": "cors"
  }).then(n => {console.log(n.status); return n.text()}).then(n=>{console.log(n); callback();});
}




// Wrap in async for using await
(async () => {
  console.log("Init\n");

  // Get initial value
  let old = await (fetch("https://api.scratch.mit.edu/studios/" + STUDIO_ID, {
    "headers": {
      "accept": "*/*",
      "accept-language": "en-US,en;q=0.9",
      "sec-ch-ua": "\" Not;A Brand\";v=\"99\", \"Google Chrome\";v=\"91\", \"Chromium\";v=\"91\"",
      "sec-ch-ua-mobile": "?0",
      "sec-fetch-dest": "empty",
      "sec-fetch-mode": "cors",
      "sec-fetch-site": "same-site"
    },
    "referrer": "https://scratch.mit.edu/",
    "referrerPolicy": "strict-origin-when-cross-origin",
    "body": null,
    "method": "GET",
    "mode": "cors",
    "credentials": "omit"
  }).then(n=>n.json()));
  console.log("Logging in...\n");


  // Log in
  new Session(USERNAME, PASSWORD, async user => {
    console.log("Logged in!\n");

    // Interval to repeatedly check
    setInterval(async () => {
      console.log("Starting interval...\n");
      // Get data
      const _dat = await getSheet();
      // Filter quotes
      const dat = filterCSV(_dat);

      // Print for debug
      console.log(dat);
      if(dat != old) {
        // If changes, update
        setDescription(STUDIO_ID, dat, user, console.log);
        old = dat;
      } else {
        console.log("No changes");
      }
      console.log("Interval complete!\n");
    }, 120000); // 120 second interval
  });
})();

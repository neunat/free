const Database = require("jsondatabase");
const Base64 = require('js-base64');
const shell = require('shelljs');
var child_process = require('child_process');
const inquirer = require('inquirer');
const dashboard = require('./dashboardCode')


const db = new Database({
    path: './users.json'
});

function backup() {
    console.log('Backup starting!')
    shell.exec('bash ./backup_and_purge/backup.sh');
}

backup()

setInterval(backup, 3600000)




// General Config //


const debugMode2 = true;


////////////////////




// Dashboard Code
const readline = require('readline');
readline.emitKeypressEvents(process.stdin);
process.stdin.setRawMode(true);
process.stdin.on('keypress', (str, key) => {
  if (key.ctrl && key.name === 'c') {
    process.exit();
  } else {
    if (str === 'd') {

        dashboard.DASHBOARD()
    }
  }
});
// --------------


/*
NOTE

this is a very insecure database/ user acount method, but security is not our problem
currently. please do not store personal data.



TODO:
______________________________________________________________________________
priority | task
_________|____________________________________________________________________
        2| implement some security. we have none whatsoever besides passwords.
        2| add api implementation to client (snext app)
        2| add a new mode that sets a value.
        1| rate limiting (IDIOT PROOF)
        0| add support for account info viewable with bot. 
______________________________________________________________________________


*/


// API PART - WIP

var express = require("express");
//const rateLimit = require('express-rate-limit')
const bodyParser = require('body-parser');

//const apiRequestLimiter = rateLimit({
//    windowMs: 1 * 60 * 1000, // 1 minute
//    max: 15 // limit each IP to 2 requests per windowMs
//})

const app = express();
app.use(bodyParser.text({ extended: true }));
//app.use(apiRequestLimiter)

app.post('/', (req, res) => {
    console.log('Got body:', req.body);
    let result = parseInput(JSON.parse(req.body))
    //console.log(result)
    //console.log(JSON.parse('{"result":"' + result + '"}'));

    res.send(result);

});

app.get('/', (req, res) => {

    res.send('Try that again with post please! Join our discord at: https://discord.gg/Qcvgm8whjz');

});
async function start() {
    console.clear();
    console.log(`Started API. Press 'd' to open dashboard. NOTE: this may stop the api.`)
}
app.listen(8080, () => start())

//




var keys = db.keys('');

// console.log(keys);


Sampleinput = {
    'mode':0, //post - in this case, registering for an account.
    'data':{
        'type':'register', // set this to register or delete
        'user':'TeleKiwi', // username. string
        'pass':'imTeleKiwi' // password. int or string
    }
}

// Minified json version:

//{"mode":0,"data":{"type":"register","user":"TeleKiwi","pass":"imTeleKiwi"}}


// code to test: (run in replit shell)

// curl -X POST -H "Content-Type: text/plain" --data '{"mode":0,"data":{"type":"register","user":"TeleKiwi","pass":"imTeleKiwi"}}' http://localhost:8080/



Sampleinput2 = {
    'mode':1, 
    'data':{
        'user': 'BlueFalconHD',
        'pass': 1234,
        'isUserBased': false,
        'wants': 'gameStorage',
        'secureData': {

            'gameString': 'bnVsbC1udWxsZ2FtZQ=='
            
        }
    }
}

// json:
// {"mode":1,"data":{"user":"BlueFalconHD","pass":1234,"isUserBased":false,"wants":"gameStorage","secureData":{"gameString":"bnVsbC1udWxsZ2FtZQ=="}}}

/*

Sampleinput2 = {
    'mode':1, <-- mode for requesting data
    'data':{
        'user': 'BlueFalconHD', <-- target userid 
        'pass': 1234, <-- password of target userid
        'isUserBased': false, <-- tells api whether to sandbox access to gameString or get root
        'wants': 'gameStorage', <-- games can request gameStorage, Sverse, and more
        'secureData': {

            'gameString': 'bnVsbC1udWxsZ2FtZQ==' <-- base64 encoded string telling api what game's resources to return
            
        }
    }
}

*/

function auth(user, passwd) {

    if (keys.includes(user)) {

        let userData = db.kget(user)
        if (userData.data.pass === passwd) {

            return true;
        } else {

            return false;
        }
    } else {

        return false
    }
}

function sandBox(data) {

    let secureTag = data.data.secureData.gameString;

    let decoded = Base64.decode(secureTag);

    console.log(decoded);


    let jdata = db.kget(data.data.user);


    let maindata = jdata.data;

    let wants = maindata[data.data.wants]

    let ret = wants[decoded];

    return ret;

    
 
}

function parseInput(input) {
    let inputval = input;
    if (inputval.mode === 0) {
        // account

        let user =  inputval.data.user;
        let pass = inputval.data.pass;

        if (inputval.data.type === 'register') {

            if (keys.includes(user)) {
                return 'Error. Username Already Exists.';
            } else {

                


                if (debugMode2 === true) {
                    // adds a game storage value for testing
                    db.kset(user, {"data":{"pass":pass, "gameStorage":{"null-nullgame":{"level":1}}}});
                    return 'Success! Registered as: ' + user + ' Password: ' + pass;
                } else {
                    db.kset(user, {"data":{"pass":pass}});

                    return 'Success! Registered as: ' + user + ' Password: ' + pass;
                }

                
            }

        } else if (inputval.data.type === "delete") {

             if (keys.includes(user)) {
                if (auth(user, pass) === true) {
                    db.kdel(user);
                    return 'Success deleting user: ' + user;
                } else {

                    return 'Invalid credentials.'
                }
            } else {

                return 'Error. User doesnt exist.'

                
            }
        }


    } else if (inputval.mode === 1) {
        // fetch data

        let user =  inputval.data.user;
        let pass = inputval.data.pass;
        let fetch = inputval.data.wants;

        console.log('user: ' + user + ' pass: ' + pass + ' fetch: ' + fetch)

        if (auth(user, pass) === true) {

            let data = sandBox(input);
            console.log(data)
            return data;

        }

    }
}

function getInfo(url) {
  // TODO: get a request func. in here
  return "unimplemented";
  // really?
}

/*
console.log(parseInput(Sampleinput))
console.log(auth("BlueFalconHD", 1234))
console.log(parseInput(Sampleinput2))
console.log(getInfo("http://localhost:8080"))
*/
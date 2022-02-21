const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const { createCanvas } = require('canvas');


// app.use(bodyParser.urlencoded({ extended: true }));
// app.use(express.json());
// app.use(bodyParser());

app.use(
  bodyParser.urlencoded({
    extended: true
  })
)

// app.use(bodyParser.raw({
//   type: 'image/png',
//   limit: '10mb'
// }));

app.use(bodyParser.text())

app.use(express.text());

app.get('/challenge1', (req, res) => {
  console.log(req.body);
  // console.log(pigLatin11(req.body));
  res.send(piglatin(req.body));
  console.log(piglatin(req.body));
});


app.get('/challenge2', (req, res) => {
  console.log(req.body);


  res.sendFile(_base64ToArrayBuffer(req.body.color));
});


app.listen(3000);

function piglatin(text){
  let pig = (x) => {
    let cap = /[A-Z]/.test(x[0]);
    let trans = x.slice(1, x.length) + x[0].toLowerCase() + "ay";
    return cap ? trans[0].toUpperCase() + trans.slice(1, trans.length) : trans
  }
  return text.replace(/[a-z]+/ig, x => pig(x))
}

function _base64ToArrayBuffer(base64) {
    var binary_string = window.atob(base64);
    var len = binary_string.length;
    var bytes = new Uint8Array(len);
    for (var i = 0; i < len; i++) {
        bytes[i] = binary_string.charCodeAt(i);
    }
    return bytes.buffer;
}
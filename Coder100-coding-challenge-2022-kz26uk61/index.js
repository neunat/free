// coding-challenge-2022
// https://new-year-challenge.21natzil.repl.co/


const express = require("express");
const fs = require('fs');
const jwt = require('jsonwebtoken');
const { createCanvas } = require("canvas");
const app = express();

app.use(express.text());
app.use(express.urlencoded({ extended: false }))

function piglatin(str) {
    const words = str.split(/[^a-zA-Z_]+/);
    const join = str.split(/[a-zA-Z_]+/);
    const out = [];

    for (const word of words) {
        if (word != "") {
            // capitalized
            const capital = word[0] != word[0].toLowerCase();
            const newword = word.slice(1) + word[0].toLowerCase() + "ay";
            if (capital) {
                out.push(newword[0].toUpperCase() + newword.slice(1));
            } else {
                out.push(newword);
            }
        }
    }

    const outstr = [];
    for (let i = 0; i < join.length; i++) {
        outstr.push(join[i], out[i]);
    }

    return outstr.join("");
}

app.get("/challenge1", (req, res) => {
    res.end(piglatin(req.body));
});

app.get("/challenge2", (req, res) => {
    const str = new Buffer.from(req.headers['x-hint'], 'base64').toString("utf8");

    const width = Number(req.body.width);
    const height = Number(req.body.height);
    const color = "#" + Number(req.body.color).toString(16);

    console.log(color);

    const canvas = createCanvas(width, height)
    const ctx = canvas.getContext('2d')
    
    ctx.fillStyle = color;
    // just in case lol
    ctx.fillRect(0, 0, width * 2, height * 2);

    const out = fs.createWriteStream("gay.png");
    const stream = canvas.createPNGStream();
    stream.pipe(out);
    out.on('finish', () => {
        res.sendFile(__dirname + "/gay.png");
    });
});

app.get("/challenge3", (req, res) => {
    const str = new Buffer.from(req.headers['x-hint'], 'base64').toString("utf8");
    console.log(str);
    console.log(req.body);
    // console.log(req.headers['x-hint']);
    res.end("");
});

function translatePigLatin(str) {
    let vowels = ['a', 'e', 'i', 'o', 'u'];
    let newStr = "";

    if (vowels.indexOf(str[0]) > -1) {
        newStr = str + "way";
        return newStr;
    } else {
        let firstMatch = str.match(/[aeiou]/g) || 0;
        let vowel = str.indexOf(firstMatch[0]);
        newStr = str.substring(vowel) + str.substring(0, vowel) + "ay";
        return newStr;
    }
}

app.listen(8080);
console.log("okay");
const translate = require('translate-google')
const prompt = require('prompt-sync')()
const Database = require('replpersist')
const words = new Database('words')
const fs = require('fs')
const express = require('express')
const app = express()

var wordInSpanishOut = '';

function htmlTemplate(word/*,en,es,fr,de,eo*/) {
	translate(word, {from: 'en', to: 'es'}).then(res=>{
		wordInSpanishOut = res;
		console.log(wordInSpanishOut)
	})
	console.log(wordInSpanishOut)
	let wordInSpanish = wordInSpanishOut;
	return `
		<!DOCTYPE html>
		<html lang="en">
		<head>
			<meta charset="UTF-8">
			<meta name="viewport" content="width=device-width, initial-scale=1.0">
			<title>Language Tree - ${word}</title>
		</head>
		<body>
			<h1 style="text-align:center">${word}</h1>
			<h4>Spanish:</h4>
			${wordInSpanish}
		</body>
		</html>
	`
}

console.clear()

var word = prompt('Enter word to see language tree > ').toLowerCase()

if ((words.data[word] == undefined || words.data[word] == null) && word != 'index') {
	fs.writeFileSync(`index.html`, htmlTemplate(word))
}

app.get('/', (req,res)=>{
	res.send(htmlTemplate(word))
})

app.listen(9090)
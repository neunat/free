/*
src: github.com/codergautam/battleship
*/
const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.redirect('http://bit.ly/PhpBattleship')
});

app.listen(3000, () => {
  console.log('server started');
});
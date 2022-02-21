const express = require('express');
const app = express();

app.get('/:id', (req, res) => {
  res.send("Hello, " + req.params.id);
});

app.get('/', (req, res) => {
  res.redirect('/codeverse');
});

app.listen();
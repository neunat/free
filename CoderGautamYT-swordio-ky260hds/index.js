const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.redirect('https://swordio.repl.co/')
});

app.listen(3000, () => {
  console.log('server started');
});

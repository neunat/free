var Inliner = require('inliner');

new Inliner('http://rumbling-glossy-aura.glitch.me', function (error, html) {
  // compressed and inlined HTML page
  console.log(html);
});
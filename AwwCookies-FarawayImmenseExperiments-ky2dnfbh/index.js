const paragraph = 'The quick brown fox jumps over the lazy dog. It barked. adriel sdfdsfdsf';
const re = new RegExp("/adriel/i")
const found = paragraph.match(re);

console.log(found);
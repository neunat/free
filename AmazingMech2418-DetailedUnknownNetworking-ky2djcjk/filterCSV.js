/*
 * This just filters the quotes correctly.
 */

function filter(txt) {
  let quote = 0;
  let current = "";
  for(let i = 0; i < txt.length; i++) {
    if(txt[i] == '"') {
      if(txt[i + 1] == '"') {
        current += '"';
        i++;
      } else {
        quote = 1 - quote;
      }
    } else {
      current += txt[i];
    }
  }
  return current;
}

module.exports = filter;

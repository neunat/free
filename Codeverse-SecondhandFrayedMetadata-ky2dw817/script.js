



//Three parts in an interpreter: Lexer (Tokenizer), Analyzer, Binary Tree

let calc = []; // Our calculator array, derived from the text box value

function lexer(value) {
  console.log('working1');
  for (let i = 0; i < value.length; i++) {
    console.log('w')
    let place = value[i]
    if (place == ' ') {
      continue;
    } else if (place == '+') {
      console.log('o')
      if (i == 0 || i == value.length - 1) {
        // continue;
      } else {
        console.log('r')
        calc.append('*PLUS');
        console.log(calc);
      }
    } else if (place == '-') {
      console.log('k')
      if (i == value.length - 1) {
        // continue;
      } else if (i == 0) {
        calc.append('-')
      } else {
        console.log('i')
        calc.append('*MINUS');
      }
    } else if (place == '*') {
      
      if (i == 0 || i == value.length - 1) {
        // continue;
      } else {
        console.log('n');
        calc.append('*TIMES');
      }
    } else if (place == '/') {
      if (i == 0 || i == value.length - 1) {
        // continue;
      } else {
        console.log('g')
        calc.append('*DIV');
      }
    }
  }

  console.log(calc);
}

document.querySelector('#submit-btn').addEventListener('click', () => {
  console.log(document.getElementById('info-text').value);
  lexer(document.getElementById('info-text').value);
});
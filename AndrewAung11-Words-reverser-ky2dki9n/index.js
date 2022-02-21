let mode = prompt("Choose mode:\n\t1. Reverse each words\n\t2. Reverse whole pharse\n")
let pharse = prompt("What is the pharse?\n");

let words = pharse.split(" ");

function reverseEachWord(wordsContainer) {
  let res = [];
  for(let i = 0; i < wordsContainer.length; i++) {
    res.push(wordsContainer[i].split("").reverse().join(""));
  }
  return res;
}

function pharseBackward(wordsContainer) {
  let res = wordsContainer.join(" ");
  res = res.split("").reverse().join("");
  return res.split(" ");
}

if (mode === "1") {
  console.log(reverseEachWord(words).join(" "));
} else if (mode === "2") {
  console.log(pharseBackward(words).join(" "));
}
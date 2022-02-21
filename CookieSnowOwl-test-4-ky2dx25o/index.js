function randomNumber(a, b) {
  return Math.floor(Math.random()*(b-a))+a;
}
function test(b) {return Math.floor(Math.random()*b)}
let t = prompt("random number\n")
let t2 = prompt("random number\n")
console.log(test(t2))
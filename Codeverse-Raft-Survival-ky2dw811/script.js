//Raft Survival
let x, y;
let player = [x, y];

let w = 25;
let h = 25;

let cols;
let rows;

function setup() {
  createCanvas(floor(windowWidth / w) * w, floor(windowHeight / h) * h);
  x = 0;
  y = 0;
  cols = width / w;
  rows = height / h;
  console.log(cols, rows);
}

function draw() {
  background(0);
  for (let i = 0; i < width; i += w) {
    for (let j = 0; j < height; j += h) {
      fill(11, 161, 217);
      strokeWeight(1);
      stroke(0);
      rect(i, j, w, h);
    }
  }

  //Translate Amount: 
}
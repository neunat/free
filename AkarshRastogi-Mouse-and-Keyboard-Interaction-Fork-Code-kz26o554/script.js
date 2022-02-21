var d = 100;
function setup() {
  createCanvas(400, 400);
}
function draw() {
  background('pink');
  noStroke();
  fill('purple');
  circle(200,200,d);
  print(key);
  print(keyCode);
  text(keyCode,30,30);
  text(key,30,50);
  if(keyCode == UP_ARROW) {
    d = d + 0.5;
  }
  if(d >= 400) {
    noLoop();
  }
}
function mousePressed(){  
  loop();
  d=100;
}
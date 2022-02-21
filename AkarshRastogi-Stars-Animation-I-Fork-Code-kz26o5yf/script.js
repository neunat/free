var starX = 400;
var starY = 0;
var starSize = 1;
var starSpeed = 4;
function setup() {
	createCanvas(400,400);
}
function draw() {
 background(0,30);
 fill('yellow');
 circle(100, 100, 50);
//twinkle star
 circle(random(width),random(height),random(7));
//falling star
 circle(starX, starY, starSize);
 starX = starX - starSpeed;
 starY = starY + starSpeed;
 starSize = starSize + 0.1;if(starY > height){
  starX = random(width);
  starY = 0;
  starSize = 1;
  }
}

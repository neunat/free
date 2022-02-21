var backgroundImage;
var flower, flowerSprite;
var butterfly, butterflyImage, butterflySprite;

function preload() {
  backgroundImage = loadImage('bg.jpg');
  flower = loadImage('flower.png');
  butterfly = loadAnimation('fly1.png','fly5.png');
  butterflyImage = loadImage('fly1.png');
}
function setup() {
  createCanvas(500,500);
  //creates flower sprite
  flowerSprite = createSprite(100,300,50,50);
  //creates butterfly sprite
  butterflySprite = createSprite(width,150,50,50);
}
function draw() {
  background(backgroundImage);
  //check for collision
  //set the collider  
 drawSprites();
}
//remove butterfly on mouse click 

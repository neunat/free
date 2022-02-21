var backgrounndImage;
var monkey1;
var monkey2;
var sprite;
function preload(){
  backgroundImage = loadImage("bg.jpg");
  monkey1= loadImage("1.png");
  monkey2= loadImage("2.png");
  print("the preload function")
  sprite = createSprite(250,250,20,20)
  sprite.addImage("Image1",monkey1);
  sprite.addImage("Image2",monkey2);
}
function setup() {
  createCanvas(500, 500);
  print("the setup function")
}
function draw(){
 background(backgroundImage);
 drawSprites();
}
function mousePressed()
{
sprite.changeImage("Image2");
}



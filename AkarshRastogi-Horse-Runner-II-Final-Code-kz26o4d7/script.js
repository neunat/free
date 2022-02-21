// declare the variables
var backgroundImage;
var runningHorse, horseSprite;
var cloudImage1, cloudImage2,cloudImage3;
var cloud, cloudSprite;
var score = 0;
var obImage, obSprite;
var jump;

//preload all the sprites
function preload() {
  backgroundImage= loadImage('bg.jpg');
  runningHorse = loadAnimation('horse1.png','horse5.png');
  cloudImage1 = loadImage('cloud1.png');
  cloudImage2 = loadImage('cloud2.png');
  cloudImage3 = loadImage('cloud3.png');
  obImage = loadImage('obstacle.png');
  jump = loadAnimation('jump.png');
 
}
function setup() {
  createCanvas(600, 300);
   //Create horse sprite
   horseSprite = createSprite(50,height-50,40,10);
   horseSprite.addAnimation('running',runningHorse);
   horseSprite.addAnimation('jumping',jump);
   //Array of clouds
   cloud = [cloudImage1,cloudImage2,cloudImage3];
   //Create random cloud sprites
   cloudSprite = createSprite(width,100,40,10);
   cloudSprite.addImage(random(cloud));
   cloudSprite.life = width/3;
    cloudSprite.scale = 2;
   //create obstacle sprite
   obSprite = createSprite(width,height-50,40,10);
   obSprite.addImage(obImage);

  }
function draw() {
  background(backgroundImage);
  obSprite.setCollider("rectangle", 20, 5, 40, 10);
  if(frameCount%60 == 0) {
  score++;
  }
  // creates new clouds 
  if(cloudSprite.position.x < width/4){
    cloudSprite = createSprite(width,random(50,100),40,10);
    cloudSprite.scale=2;
    cloudSprite.addImage(random(cloud));
    cloudSprite.life = width/3;
  }
  cloudSprite.velocity.x = -3;
  //creates new obstacle
  if(obSprite.position.x <= 0) {
    obSprite = createSprite(width,height-50,40,10);
    obSprite.addImage(obImage);
    obSprite.life = width/4;
  }
  obSprite.velocity.x = -4; 
  //makes the horse jump and autoplay 
  if(keyDown("SPACE")&&(horseSprite.position.y) >= height-50) {
    horseSprite.velocity.y = -140;
    horseSprite.changeAnimation('jumping');
    
  } 
  else if(horseSprite.position.y < height-50) {
    horseSprite.velocity.y = 2;
  }
  else {
   horseSprite.velocity.y = 0; 
   horseSprite.changeAnimation('running');
   
   
  }
  //check collision and game over
  if(horseSprite.collide(obSprite)) {
    textSize(50);
    text('GAME OVER',160,150);
   
    noLoop();
  }
  //set the depth
  horseSprite.depth = obSprite.depth+1;
  //display score
  textSize(20);
  text('SCORE:' + score,20,25);
  drawSprites();
}

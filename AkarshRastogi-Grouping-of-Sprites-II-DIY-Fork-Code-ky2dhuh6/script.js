var foods;
var player,food; 
function setup() {
  createCanvas(500, 400);
  //create a user controlled sprite
  player = createSprite(0,200,50,50); 
  //create group
  foods = new Group();
  //create sprite and add to group
  for(var i=0; i<=10; i++) {
    var food = createSprite(random(0,width),random(0,height),20,20);
    foods.add(food);
    food.shapeColor = 'red';
  }
}
function draw() {
  background('white');
	//move player sprite with mouse cursor
	//check for collision
  drawSprites();
}

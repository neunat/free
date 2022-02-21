kaboom();

loadSprite("smile", "sprites/Smile.png");
loadSprite("brick", "sprites/Brick_Block.png");

const player = add([
  sprite("smile"),
  scale(5),
	pos(80, 80),
  area(),
  "clickable",
]);

var speed = 200;

keyDown('k', () => {
  speed = 350;
  camScale(1.1);
});

keyRelease('k', () => {
  speed = 200;
  camScale(1);
});

keyDown('right', () => {
  player.move(speed, 0)
});

keyDown('left', () => {
  player.move(-speed, 0)
});

keyDown('up', () => {
  player.move(0, -speed)
});

keyDown('down', () => {
  player.move(0, speed)
});

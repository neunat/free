import kaboom from "kaboom";

// initialize context
kaboom();

// load assets
loadSprite("bean", "sprites/bean.png");
loadSprite("Apple", "sprites/Apple.png");
loadSprite("Panda", "sprites/Panda.png");
loadSprite("PauseButton", "sprites/PauseButton.png");
loadSprite("bg", "sprites/bg.jpg");

add([
  sprite("bg", {width: width(), height: height()})
]);

add([
  sprite("PauseButton"),
  pos(width() - 150, height() - 50),
]);

// add a character to screen
const apple = add([
	// list of components
	sprite("Apple"),
	pos(80, 40),
  scale(2),
  body,
  "killable",
  {
    health: 100,
    speed: 200,
  },
  ]);

  const panda = add([
	// list of components
	sprite("Panda"),
	pos(width()/2, height() - 140),
  scale(2),
  body,
  "killable",
  {
    health: 100,
    speed: 200,
  },
  ]);

mouseClick(() => {
    debug.log("clicked");
});
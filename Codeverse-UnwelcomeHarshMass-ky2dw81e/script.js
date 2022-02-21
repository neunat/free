let rotation, px, py, ax, ay, x1, y1, x2, y2, x3, y3, x4, y4, speed, xoff;

function setup() {
  createCanvas(windowWidth, windowHeight);
  
  ay = 100;
  ax = 100;
  x1 = 200;
  y1 = 200;
  x2 = 300;
  y2 = 300;
  x3 = 400;
  y3 = 400;
  x4 = 500;
  y4 = 500;
  xoff = 0;
}

function draw() {
  background(0);
  px = mouseX;
  py = mouseY;
  rotation = atan2(py - ay, px - ax);
  speed = 5;

  if (ax == px && ay == py) {
    rotation = 0;
  } else {

  ax += cos(rotation) * speed;
  ay += sin(rotation) * speed;
  }

  rotation = atan2(py - y1, px - x1);
  x1 += cos(rotation) * 10;
  y1 += sin(rotation) * 10;

  rotation = atan2(py - y2, px - x2);
  x2 += cos(rotation) * 20;
  y2 += sin(rotation) * 20;

  rotation = atan2(py - y3, px - x3);
  x3 += cos(rotation) * 40;
  y3 += sin(rotation) * 40;

  rotation = atan2(py - y4, px - x4);
  x4 += cos(rotation) * 30;
  y4 += sin(rotation) * 30;
  
  fill(255);
  ellipse(px, py, 50);
  
  fill(0, 255, 0);
  ellipse(ax, ay, 50);

  fill(255, 0, 0);
  ellipse(x1, y1, 50);

  fill(0, 0, 255);
  ellipse(x2, y2, 50);

  fill(255, 125, 0);
  ellipse(x3, y3, 50);

  fill(125, 255, 0);
  ellipse(x4, y4, 50);

  xoff += 1;
}
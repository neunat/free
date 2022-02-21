function preload() {
  
}

function setup() {
    createCanvas(1000, 1000);
    pixelDensity(1);
}

function draw() {
  background(30);
  
  loadPixels();

  var x;
  var y;
  for (y = 0; y < height; y++) {
    for (x = 0; x < width; x++) {
      var i = (x + y * width) * 4;
      pixels[i]     = x;
      pixels[i + 1] = random(255);
      pixels[i + 2] = y;
      pixels[i + 3] = 255;
    }
  }

  updatePixels();
}
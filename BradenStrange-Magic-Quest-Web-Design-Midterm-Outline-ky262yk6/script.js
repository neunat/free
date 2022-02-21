/*
  Mission 12: Create a variable called photo that targets the the ".item" class (L8)
  Hint: Finish this line of code: var photo = $( ____ );
  Mission 13: Create a function called "changeToSandwich()" that sets the 'src' of the "photo" variable to the image at "assets/sandwich.jpg" (30-32)
  Bonus A: Continue in "style.css"
*/
var photo = $('.item');

function changeToEspresso() {
  photo.attr('src', 'assets/espresso.jpg');
}

function changeToHotChocolate() {
  photo.attr('src', 'assets/hotchocolate.jpg');
}

function changeToIcedAmericano() {
  photo.attr('src', 'assets/icedcoffee.jpg');
}

function changeToBrownies() {
  photo.attr('src', 'assets/brownies.jpg');
}

function changeToCupcake() {
  photo.attr('src', 'assets/cupcake.jpg');
}


function changeToSandwich() {
  photo.attr('src', 'assets/sandwich.jpg');
}
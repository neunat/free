document.getElementById("myinput").oninput = function() {
  var value = (this.value-this.min)/(this.max-this.min)*100

	this.style.background = 'linear-gradient(to right, #1db954 0%, #1db954 ' + value + '%, #535353 ' + value + '%, #535353 100%)'
};

document.getElementById("myinput2").oninput = function() {
  var value = (this.value-this.min)/(this.max-this.min)*100

	this.style.background = 'linear-gradient(to right, #1db954 0%, #1db954 ' + value + '%, #535353 ' + value + '%, #535353 100%)'
};

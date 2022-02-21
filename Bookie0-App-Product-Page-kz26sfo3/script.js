var prevScrollpos = window.pageYOffset;

window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
	
	if (prevScrollpos > currentScrollPos) {
		document.getElementById("nav").style.top = "0"; 
		document.getElementById("nav").style.boxShadow = "0 2px 4px rgba(0 0 0 / 20%"; 
    document.getElementById("nav").style.background = "rgba(253, 253, 253, 0.95)";
  } else { 
    document.getElementById("nav").style.top = "-75px";
		document.getElementById("nav").style.boxShadow = "0 2px 4px rgba(0 0 0 / 20%)"; 
    document.getElementById("nav").style.background = "var(--secondary-color)";
  }

  prevScrollpos = currentScrollPos;
	
	if (window.pageYOffset <= 50) {
		document.getElementById("nav").style.boxShadow = "none";
    document.getElementById("nav").style.background = "rgba(253, 253, 253, 0.95)";
	}
}


var i = 0;
function show() {
	i++;

	if (i % 2 == 1) {
		document.getElementById("nav").classList.add("full");
		// document.getElementById("top").style.transform = "rotate(45deg)";
		// document.getElementById("bottom").style.transform = "rotate(-45deg)";
		document.getElementById("top").classList.add("top");
		document.getElementById("bottom").classList.add("bottom");

		document.getElementById("name").style.display = "block";
		document.getElementById("links").style.display = "flex";
		document.getElementById("buttons").style.display = "flex";

		document.getElementById("nav").style.background = "#000";

	} else {
		document.getElementById("nav").classList.remove("full");
		// document.getElementById("top").style.transform = "rotate(0)";
		// document.getElementById("bottom").style.transform = "rotate(0)";
		// document.getElementById("bottom").style.left = "10px";

			document.getElementById("top").classList.remove("top");
		document.getElementById("bottom").classList.remove("bottom");

		document.getElementById("name").style.display = "none";
		document.getElementById("links").style.display = "none";
		document.getElementById("buttons").style.display = "none";
		// document.getElementById("close").innerText = "🍔";
	}
}
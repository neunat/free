// parseInt converts data to a number
function calc() {
  var a = parseInt(document.querySelector("#value1").value);
  var b = parseInt(document.querySelector("#value2").value);
  var op = document.querySelector("#operator").value;
  var calculate;

  if (op == "add") {
    calculate = a + b;
  } else if (op == "sub") {
    calculate = a - b;
  } else if (op == "mult") {
    calculate = a * b;
  } else if (op == "div") {
    calculate = a / b;
  }
  document.querySelector("#return").innerHTML = calculate;
}


let toggleNavStatus = false;

let toggleNav = function (){
  let getSidebar = document.querySelector(".nav_sidebar");
  let getSidebarUl = document.querySelector(".nav_sidebar ul");
  let getSidebarSpan = document.querySelector(".nav_sidebar span");
  let getSidebarLi = document.querySelector(".nav_sidebar ul li");
  let getSidebarA = document.querySelectorAll(".nav_sidebar ul li a");


if (toggleNavStatus === false) {
  getSidebarUl.style.visibility = "visible";
  getSidebar.style.width = "272px";
  getSidebarSpan.style.opacity = "0.5";

  let arrayLength = getSidebarA.length;
  for (var i = 0; i < arrayLength; i++){
    getSidebarA[i].style.opacity = "1";
  }

  toggleNavStatus = true;
}

else if (toggleNavStatus === true) {
  getSidebar.style.width = "50px";
  getSidebarSpan.style.opacity = "0";

  let arrayLength = getSidebarA.length;
  for (var i = 0; i < arrayLength; i++){
    getSidebarA[i].style.opacity = "0";
  }

  getSidebarUl.style.visibility = "visible";

  toggleNavStatus = false;

}
}
//inner html inserts a value between html tags
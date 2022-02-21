const clickcount = document.getElementById("clicks");
let clicks = 0;

function update(click) {
  if (click) { clicks += 1;}
  clickcount.innerText = "clicks: " + clicks;
}

function save() {
  localStorage.setItem("clicks",clicks);
}

function restore() {
  clicks = +localStorage.getItem("clicks");
  update(false);
}

function reset() {
  cf = confirm("Are you sure?");
  if (cf) {
    clicks = 0;
    localStorage.setItem("clicks",clicks);
    update(false);
  }
}
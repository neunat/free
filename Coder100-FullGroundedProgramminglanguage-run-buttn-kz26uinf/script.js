let x = Number(localStorage.getItem("number") || 0);
x += 1;

localStorage.setItem("number", x);

document.querySelector(".run").innerHTML = x;
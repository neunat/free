document.querySelector(".curr-url").innerHTML = location.href;

(async () => {
  const tok = await fetch("/generate-id").then(n => n.text());

  document.querySelector(".id").innerHTML = tok;
  document.querySelector(".dash").setAttribute("href", `/dash/${tok}`);
})();
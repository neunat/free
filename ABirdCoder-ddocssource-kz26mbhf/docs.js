var heads = {};
const root = document.documentElement;


window.onload = () => {
  const dheads = document.querySelectorAll("dhead");
  const dcode = document.querySelectorAll("dcode");
  const div = document.createElement("div");
  const ul = document.createElement("ul");
  const docs = document.querySelectorAll("docs")[0];
  div.classList.add("docslink");
  div.appendChild(ul);


  const threeLine = document.createElement("div");
  const l1 = document.createElement("div");
  const l2 = document.createElement("div");
  const l3 = document.createElement("div");


  threeLine.classList.add("threeline");
  l1.classList.add("l1");
  l2.classList.add("l2");
  l3.classList.add("l3");

  docs.appendChild(threeLine);
  threeLine.appendChild(l1);
  threeLine.appendChild(l2);
  threeLine.appendChild(l3);


  threeLine.onclick = () => {
    const enabled = threeLine.classList.contains("enabled");

    if (!enabled) {
      threeLine.classList.add("enabled");
      div.classList.add("enabled");
    }
    else {
      threeLine.classList.remove("enabled");
      div.classList.remove("enabled");
    }
  }


  const button = document.createElement("button");
  const i = document.createElement("i");

  i.classList.add("far");
  i.classList.add("fa-moon")
  button.classList.add("light-mode")
  div.appendChild(button);
  button.appendChild(i);

  button.addEventListener("click", () => {
    if (button.classList.contains("light-mode")) {
      button.classList.remove("light-mode");
      button.classList.add("dark-mode");
      localStorage.setItem("darkmode", "true");
    }
    else {
      localStorage.setItem("darkmode", "false");
      button.classList.remove("dark-mode");
      button.classList.add("light-mode");
    }
    if (button.classList.contains("dark-mode")) {
      i.classList.remove("fa-moon");
      i.classList.add("fa-sun");


      root.style.setProperty("--docs-bg",  "#1b1b1b");
      root.style.setProperty("--code-bg",  "#444444");
      root.style.setProperty("--sample-color", "darkred");
      root.style.setProperty("--info-color",  "rgb(199, 199, 199)");
      root.style.setProperty("--base-color",  "white");

      root.style.setProperty("--bookmark-unselected",  "rgb(134, 134, 134)");
      root.style.setProperty("--bookmark-background",  "#111111");
      root.style.setProperty("--bookmark-selected",  "#36a4cf");

      root.style.setProperty("--scrollbar-code-color",  "rgb(63, 63, 63)");
      root.style.setProperty("--scrollbar-code-color-hover",  "rgb(59, 59, 59)");

      root.style.setProperty("--copy-button-color",  "rgb(255, 255, 255)");
      root.style.setProperty("--copy-button-bg",  "#111a42");

      document.getElementById("DDarkTheme").removeAttribute("disabled");
      document.getElementById("DLightTheme").setAttribute("disabled", "disabled");
    }
    else {
      i.classList.add("fa-moon");
      i.classList.remove("fa-sun");


      root.style.setProperty("--docs-bg",  "white");
      root.style.setProperty("--code-bg",  "#f1f1f1");
      root.style.setProperty("--sample-color", "crimson");
      root.style.setProperty("--info-color",  "grey");
      root.style.setProperty("--base-color",  "black");

      root.style.setProperty("--bookmark-unselected",  "rgb(70, 68, 68)");
      root.style.setProperty("--bookmark-background",  "#ebebeb");
      root.style.setProperty("--bookmark-selected",  "#36a4cf");

      root.style.setProperty("--scrollbar-code-color",  "#888");
      root.style.setProperty("--scrollbar-code-color-hover",  "#555");

      root.style.setProperty("--copy-button-color",  "white");
      root.style.setProperty("--copy-button-bg",  "#3aa0ff");

      document.getElementById("DDarkTheme").setAttribute("disabled", "disabled");
      document.getElementById("DLightTheme").removeAttribute("disabled")
    }
  })

  if(localStorage.getItem("darkmode") == "true") {
      button.click();
    }

  dheads.forEach(item => {
    item.id = 'ddocs' + item.innerText;
    item.innerHTML += "<span class='line'></span>"

    const li = document.createElement("li");
    const h3 = document.createElement("h3");
    const a = document.createElement("a");

    a.onclick = () => {
      div.classList.remove("enabled");
      threeLine.classList.remove("enabled");
    }

    li.appendChild(h3);
    h3.appendChild(a);

    const maxLength = 13;

    a.href = item.innerText.length > maxLength ? "#ddocs" + item.innerText : "#ddocs" + item.innerText;
    a.innerHTML = item.innerText.length > maxLength ?item.innerText.substr(0, maxLength) + "..." :  item.innerText.substr(0, maxLength);

    ul.appendChild(li);

    if (Object.keys(heads).length == 0) {
      a.classList.add("dselected")
    }

    heads[a.innerText] = [a, item.innerText];
  });

  document.body.appendChild(div);


  dcode.forEach(item => {
    newcode = "<pre> <button class='dcopycode'>Copy &#x2398;</button> <code>" + item.innerHTML + "</code> </pre>"

    item.outerHTML = newcode;
  })

  document.querySelectorAll(".dcopycode").forEach(item => {
    item.addEventListener("click", function () {
      var copy = item.parentElement.querySelectorAll("code")[0].innerText;
      navigator.clipboard.writeText(copy).then(function () {
        item.innerText = "Copied!"
      }, function (err) {
        item.innerText = "Failed to copy!"
      });
      setTimeout(function () {
        item.innerHTML = "Copy &#x2398;"
      }, 1000);
    })
  })

  hljs.highlightAll();
}

window.addEventListener("scroll", () => {
  const dheads = document.querySelectorAll("dhead");
  var whatfound = undefined;
  dheads.forEach(item => {
    const rect = item.getBoundingClientRect();
    if (window.scrollY < rect.bottom) {
      heads[htmlEntities(item[1].innerText)].classList.add("dselected");
      whatfound = item;
    }
  });

  dheads.forEach(item => {
    if (item != whatfound) {

      heads[htmlEntities(item[1].innerText)].classList.remove("dselected");
    }
  })



  document.querySelectorAll("scroll")
});


function htmlEntities(str) {
  return String(str).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
}

(async () => {
  let dbUrl = location.href.split("/").slice(-1)[0];
  let editor = ace.edit("editor");
  editor.setOptions({
    behavioursEnabled: true,
    wrapBehavioursEnabled: true,
    placeholder: "loading...",
    readOnly: true
  });

  editor.setTheme("ace/theme/solarized_dark");
  editor.session.setMode("ace/mode/json");

  try {
    let data = (await fetch(`/db/${dbUrl}`).then(r => r.json())).data;

    editor.setValue(JSON.stringify(data, null, 2));
    editor.setOption("readOnly", false);

    document.querySelector(".save").addEventListener("click", async () => {
      document.querySelector(".save").innerHTML = "Saving...";
      let value = editor.getValue();

      try {
        let val = JSON.parse(value);
        await fetch(`/db/${dbUrl}`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(val)
        });

        document.querySelector(".save").innerHTML = "Save";
        document.querySelector(".card-success").style.display = "block";
      } catch (e) {
        document.querySelector(".err").innerHTML = `Error Saving: ${e}`;
        document.querySelector(".card-error").style.display = "block";
      }
    });
  } catch (e) {
    document.querySelector(".err").innerHTML = `Error Loading: ${e}`;
    document.querySelector(".err").style.display = "block";
  }
})();

document.querySelectorAll(".card").forEach(el => {
  el.addEventListener("click", () => {
    el.style.display = "none";
  });
}); 
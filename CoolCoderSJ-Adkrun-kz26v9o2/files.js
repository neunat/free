let newfile = document.getElementById("newfile");
let files = ["Test.adk", "Test2.adk"]

let fileContents = {
    "main.adk": "something",
    "Test2.adk": "test 2"
}

let selected = "Test.adk"

window.codeEditor
newfile.onclick = function(event) {
  console.log("Make new file")
  //Open a new window 
}
for (let file of files) {
    let filee = document.createElement("div")
    filee.textContent = file
    filee.className = "file"

    if (file == selected) filee.classList.add("selected")

    document.querySelector(".toolbar .files").appendChild(filee)

    filee.addEventListener("click", () => {
        document.querySelectorAll(".toolbar .files .file").forEach(x => x.classList.remove("selected"))
        filee.classList.add("selected")
        fileContents[selected]=window.codeEditor.state.doc.text.join("\n")
        selected = file

        console.log(selected)

        let change = window.codeEditor.state.update({
            changes: {
                from: 0,
                to: window.codeEditor.state.doc.length,
                insert: fileContents[selected]
            }
        })

        window.codeEditor.dispatch(change)
    })
}
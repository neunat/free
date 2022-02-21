let term = new Terminal();

term.open(document.querySelector(".terminall"));

async function run(code) {
    const form = new FormData();
    form.set("file", code);

    const resp = await fetch("https://aardvarkapi.programit.repl.co/api/", {
        method: "POST",
        header: {
        "content-type": "multipart/form-data",
        },
        body: form
    });

    let data;

    if (resp.status != 200) {
        data = "Failed to run code!";
        console.error("Failed to run code!");
        return false;
    } else {
        data = await resp.json();
    }

    console.log("Got data:", data);

    let output = data.output.replace(/\\n/g, "\r\n");
    
    output = output.substring(2, output.length - 1);

    term.clear()
    term.write(output + "\r\n");
}


document.querySelector(".toolbar .run").addEventListener("click", (e) => {
    run(window.codeEditor.state.doc.toString())
})

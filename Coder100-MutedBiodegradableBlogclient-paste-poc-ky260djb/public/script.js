const textarea = document.querySelector(".area");

let editor = CodeMirror.fromTextArea(textarea, {
    lineNumbers: true,
    theme: "the-matrix",
    mode: "xml"
});

editor.setOption("theme", "3024-night");
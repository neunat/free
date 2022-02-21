const area = document.querySelector("textarea");

const editor = CodeMirror.fromTextArea(area, {
    lineNumbers: true,
    theme: "seti",
    tabSize: 2,
    mode: "python",
});

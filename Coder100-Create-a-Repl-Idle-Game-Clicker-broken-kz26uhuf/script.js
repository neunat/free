const area = document.querySelector("textarea");

const editor = CodeMirror.fromTextArea(area, {
    lineNumbers: true,
    theme: "seti",
    mode: "python",
    value: `def hi():
    print("works!")`
});
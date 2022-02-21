const _msg = document.getElementById("msg");
const btn = document.getElementById("btn");
var windowFeatures = "location=no,height=570,width=520,scrollbars=yes,status=yes";

btn.onclick = function() {
  let msg = _msg.value;
  window.open(`https://test-api.code1tech.repl.co/rq.html?msg=${msg}`, "API Request", windowFeatures);
}
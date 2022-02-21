var tday = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday"
];
var tmonth = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December"
];
function format_two_digits(n) {
  return n < 10 ? "0" + n : n;
}
function GetClock() {
  var d = new Date();
  var nhour = d.getHours(),
    nmin = d.getMinutes(),
    nsec = format_two_digits(d.getSeconds()),
    ap;
  if (nhour == 0) {
    ap = "AM";
    nhour = 12;
  } else if (nhour < 12) {
    ap = "AM";
  } else if (nhour == 12) {
    ap = "PM";
  } else if (nhour > 12) {
    ap = "PM";
    nhour -= 12;
  }

  if (nmin <= 9) nmin = "0" + nmin;

  var clocktext = "" + nhour + "꞉" + nmin + " " + ap + "";
  var title = "Time: " + nhour + "꞉" + nmin + ap + "";
  document.getElementById("clockbox").innerHTML = clocktext;
  document.getElementById("clockbox2").innerHTML = clocktext;
  document.title = title;
}
GetClock();
setInterval(GetClock, 1000);

function GetDate() {
  var d = new Date();
  var nday = d.getDay(),
    nmonth = d.getMonth(),
    ndate = d.getDate(),
    nyear = d.getFullYear();

  var datetext =
    "" + tday[nday] + " " + tmonth[nmonth] + " " + ndate + ", " + nyear + "";
  document.getElementById("datebox").innerHTML = datetext;
   document.getElementById("datebox2").innerHTML = datetext;
}

GetDate();
setInterval(GetDate, 1000);

function hideNormText() {
  var x = document.getElementById("normtext");
  if (x.style.display === "none") {
    x.style.display = "block";
    document.getElementById("buttonh").innerHTML = "hide normal text";
  } else {
    x.style.display = "none";
    document.getElementById("buttonh").innerHTML = "show normal text";
  }
}
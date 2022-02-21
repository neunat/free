
//////////////////////////////////
// Pandemic Simulator           //
// Copyright © Vayun Mathur 2020//
//////////////////////////////////


var infectChance;
var noSympTime;
var travelChance;
var removeTime;	
var infectionsBeforeClosing;
var internalLockdownThreshold;
var fullInternalLockdown;
var peoplePerCommunity;
var parkChance;
var icuSpace;
var quarSpace;
var deathC;
var deathA;
var deathE;
var deathTime;
var testsPerDay;
var goodPeopleChance;
var morRateICU;
var timeExposed;
var halfEasing;
var fullEasing;

var moreText = document.getElementById("disease");
var btnText = document.getElementById("show");
function showDisease() {


  if (moreText.style.display === "none" || moreText.style.display === "" ) {
    moreText.style.display = "table";
    btnText.innerHTML = "Close";

  } 
  else if (moreText.style.display === "table") {
    btnText.innerHTML = "Show";
    moreText.style.display = "none";
  }
}

function resetd() {
  $("#chart").prop("checked", "false");
  $("#coi").val(0.4);
	$("#twno").val(14);
	$("#trvl").val(0.01);
	$("#rm").val(20);
	$("#ibc").val(5);
  $("#ilt").val(1);
  $("#pp").val(500);
  $("#park").val(0.7);
  $("#icu").val(20);
  $("#quar").val(70);
  $("#fil").val(3);
  $("#badc").val(0.05);
  $("#bada").val(0.2);
  $("#bade").val(0.8);
  $("#badt").val(6);
  $("#tes").val(10);
  $("#pgp").val(0.7);
  $("#mor").val(0.1);
  $("#te").val(3);
  $("#hel").val(2);
  $("#fel").val(6);
  $("#chart").prop("checked", "true");
}

function blackdeath() {
  $("#coi").val(0.9);
	$("#twno").val(4);
	$("#rm").val(28);
  $("#badc").val(0.7);
  $("#bada").val(0.8);
  $("#bade").val(0.95);
  $("#badt").val(3);
  $("#mor").val(0.2);
  $("#te").val(3);
}
function covid19() {
  $("#coi").val(0.6);
	$("#twno").val(11);
	$("#rm").val(30);
  $("#badc").val(0.03);
  $("#bada").val(0.1);
  $("#bade").val(0.25);
  $("#badt").val(6);
  $("#mor").val(0.02);
  $("#te").val(3);
}
function spanflu() {
  $("#coi").val(0.8);
	$("#twno").val(4);
	$("#rm").val(15);
  $("#badc").val(0.05);
  $("#bada").val(0.25);
  $("#bade").val(0.5);
  $("#badt").val(5);
  $("#mor").val(0.15);
  $("#te").val(3);
}

setInterval(function() {
  infectChance = document.getElementById("coi").value * 100;
	noSympTime = document.getElementById("twno").value;
	travelChance = document.getElementById("trvl").value * 100;
	removeTime = document.getElementById("rm").value;
	infectionsBeforeClosing = document.getElementById("ibc").value;
  internalLockdownThreshold = document.getElementById("ilt").value;
  peoplePerCommunity = document.getElementById("pp").value;
  parkChance = document.getElementById("park").value;
  icuSpace = document.getElementById("icu").value;
  quarSpace = document.getElementById("quar").value;
  fullInternalLockdown = document.getElementById("fil").value;
  deathC = document.getElementById("badc").value * 100;
  deathA = document.getElementById("bada").value * 100;
  deathE = document.getElementById("bade").value * 100;
  deathTime = document.getElementById("badt").value;
  testsPerDay = document.getElementById("tes").value;
  goodPeopleChance = document.getElementById("pgp").value * 100;
  morRateICU = document.getElementById("mor").value * 100;
  timeExposed = document.getElementById("te").value;
  halfEasing = document.getElementById("hel").value;
  fullEasing = document.getElementById("fel").value;
  

  document.getElementById("ilt").max = peoplePerCommunity;
  document.getElementById("ibc").max = peoplePerCommunity * 4;
  document.getElementById("icu").max = peoplePerCommunity;
  document.getElementById("quar").max = peoplePerCommunity;
  document.getElementById("fil").max = peoplePerCommunity;
  document.getElementById("fil").min = internalLockdownThreshold;
  document.getElementById("tes").max = peoplePerCommunity;
  document.getElementById("hel").max = fullInternalLockdown;
  document.getElementById("hel").min = internalLockdownThreshold;
  document.getElementById("fel").max = halfEasing;
  

	$(".coi2").html(infectChance.toFixed(0));
	$(".twno2").html(noSympTime);
	$(".trvl2").html(travelChance.toFixed(1));
	$(".rm2").html(removeTime);
	$(".ibc2").html(infectionsBeforeClosing);
  $(".ilt2").html(internalLockdownThreshold);
  $(".pp2").html(peoplePerCommunity);
  parkdis = parkChance * 100;
  parkdis = parkdis.toFixed(1);
  $(".park2").html(parkdis);
  $(".icu2").html(icuSpace);
  $(".quar2").html(quarSpace);
  $(".fil2").html(fullInternalLockdown);
  $(".badc2").html(deathC.toFixed(0));
  $(".bada2").html(deathA.toFixed(0));
  $(".bade2").html(deathE.toFixed(0));
  $(".badt2").html(deathTime);
  $(".tes2").html(testsPerDay);
  
  $(".pgp2").html(goodPeopleChance.toFixed(0));
  $(".mor2").html(morRateICU.toFixed(0));
  $(".te2").html(timeExposed);
  $(".hel2").html(halfEasing);
  $(".fel2").html(fullEasing);

}, 10);
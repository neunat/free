 
//////////////////////////////////
// Pandemic Simulator           //
// Copyright © Vayun Mathur 2020//
//////////////////////////////////

/*//////////////SLIDERS//////////////*/
//
//var peoplePerCommunity;
//
//var visibleTime = 2;
//var exposedTime = 3;
//var recoveryTime = 10;
//var deathTimeBad = 3;
//
//var testsPerDay = 10;
//
//var quarintineSpace = 10;
//var icuSpace = 10;
//
//var borderClosure = 100;
//var limInterClosure = 20;
//var lockdownClosure = 50;
//
//var travelChance = 0.001;
//
//var parkVisitChance = 0.01;
//
//var badChanceChild = 0.3;
//var badChanceAdult = 0.1;
//var badChanceElder = 0.8;
//
//var infectChance = 0.1;
//
//var goodPersonChance = 0.5;
//
//var mortalityInICU = 0.1;
//
//
//var casesPerDayBeforeLockdownRelaxation = 7;
//var casesPerDayBeforeLockdownRepeal = 3;

//HELPER ARRAYS


const badChance = [badChanceChild, badChanceAdult, badChanceElder];
const statusColor = ["blue", "yellow", "orange", "red", "brown", "grey", "black"];
const tableHeaders = ["Day", "Infections Per Day", "Total Visible Infections", "Total Infections (Including Exposed)"];

//HELPER FUNCTIONS

function getRandom(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}
function removeRandom(arr) {
  var pos = Math.floor(Math.random() * arr.length);
  var val = arr[pos];
  arr.splice(pos, 1);
  return val;
}

function dist(p1, p2) {
  return (p1.x - p2.x) * (p1.x - p2.x) + (p1.y - p2.y) * (p1.y - p2.y);
}

function chance(chance) {
  return Math.random() < chance;
}

var currDay = 0;
var currHour = 0;
function currTime() {
  return currDay * 24 + currHour;
}

function screenPos(p) {
  return new Pos((p.getPlace().x / communityDimension + p.getCurrCommunity().x) * communitySize, (p.getPlace().y / communityDimension + p.getCurrCommunity().y) * communitySize);
}


const Age = {
  child: 0,
  adult: 1,
  elder: 2
}
const InfectionStatus = {
  free: 0, //not infected
  exposed: 1, //no symptoms, and cannot infect
	infectious: 2, // no symptoms, but can infect
  visible: 3, //shows symptoms
  visibleBad: 4, //shows bad symptoms, is in danger of death
  recovered: 5, //immune
  dead: 6 //died from the infection
}
const LifeStatus = {
  normal: 0, //lives life like a normal person
  isolation: 1, //stays at home, and decreased contact with family
  quarintine: 2, //in hospital, and 0% chance of spreading
  icu: 3, //in intensive care, limited amount per community
}

class Pos {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }
}

class Line {
  constructor(start, end, time) {
    this.start = start;
		this.end = end;
		this.timeStarted = time;
  }
}

var placesArr = [];

function between(p1, p2, percent) { //calculated point moving from p1 to p2, 'percent' of the way there
  return new Pos(p2.x * percent + p1.x * (1 - percent), p2.y * percent + p1.y * (1 - percent));
}

var places = 0;

class Place {
  constructor(pos) {
    this.open = true;
		this.id = places;
		places++;
		placesArr.push(this);
    this.pos = pos;
  }
}

var communities = [];
var people = [];

class Person {
  constructor(house, community, schoolOrWork, age) {
    //individual information
    people.push(this);
    this.house = house;
    this.community = community;
    this.schoolOrWork = schoolOrWork;
    this.age = age;
    this.infection = InfectionStatus.free;
    this.status = LifeStatus.normal;
    this.exposedTime = 0;
    this.visibleTime = 0;
    this.deathTime = 0;
    this.testedPositive = false;
		this.good = chance(goodPersonChance);

    //park
    this.currPark = getRandom(community.parks);
    this.parkStart = 0;
    this.goingToPark = false;

    //travel information
    this.isTravelling = false;
    this.currHotel = null;
    this.travelToCommunity = community;
    this.returnDate = currDay * 24 + currHour;
  }
  test() {
    if (this.infected()) {
      this.testedPositive = true;
    }
  }
  getInfected() {
    if (this.age == Age.elder) {
      if (chance(badChanceElder)) {
        this.infection = InfectionStatus.visibleBad;
        this.deathTime = deathTimeBad * 24 + currTime();
      } else {
        this.infection = InfectionStatus.visible;
        this.deathTime = recoveryTime * 24 + currTime();
      }
    }
    if (this.age == Age.child) {
      this.infection = InfectionStatus.exposed;
      this.exposedTime = exposedTime * 24 + currTime();
    }
    if (this.age == Age.adult) {
      this.infection = InfectionStatus.exposed;
      this.exposedTime = exposedTime * 24 + currTime();
    }
  }
  infectionIsVisible() {
    return this.infection == InfectionStatus.visible || this.infection == InfectionStatus.visibleBad;
  }
  infected() {
    return this.infectionIsVisible() || this.infection == InfectionStatus.infectious;
  }
  update() {
		if(this.community.internalClosure == 2) {
			this.status = LifeStatus.isolation;
		}
		if(this.infectionIsVisible() && this.good) {
			this.test();
		}
		if (this.infection == InfectionStatus.exposed && currTime() > this.exposedTime) {
			this.infection = InfectionStatus.infectious;
			this.visibleTime =  visibleTime * 24 + currTime();
		}
    if (this.infection == InfectionStatus.infectious && currTime() > this.visibleTime) {
      if (chance(badChance[this.age])) {
        this.infection = InfectionStatus.visibleBad;
        this.deathTime = deathTimeBad * 24 + currTime();
      } else {
        this.infection = InfectionStatus.visible;
        this.deathTime = recoveryTime * 24 + currTime();
      }
    }
    if (currTime() > this.deathTime) {
      if (this.infection == InfectionStatus.visible) {
        this.infection = InfectionStatus.recovered;
      }
      if (this.infection == InfectionStatus.visibleBad) {
        if (this.status == LifeStatus.icu) {
          this.infection = InfectionStatus.recovered;
          this.community.icud--;
					this.status = LifeStatus.normal;
					if(chance(mortalityInICU)) {
						this.infection = InfectionStatus.dead;
					}
        } else {
          this.infection = InfectionStatus.dead;
        }
      }
    }
    if (!chance((1-travelChance)**(1/24)) && !this.isTravelling && !this.community.borderClosed && !this.infectionIsVisible()) {
      this.travel();
    }
    if (this.isTravelling && currTime() > this.returnDate) {
      this.isTravelling = false;
    }
    if (currHour == 0) {
      this.planParkVisit();
    }
  }
  getPlace() {
    if (this.infection == InfectionStatus.dead) {
      return this.community.graveyard.pos;
    }
    if (this.isTravelling) {
      return this.currHotel.pos;
    }
    if (this.status == LifeStatus.isolation) {
      return this.house.pos;
    }
    if (this.status == LifeStatus.quarintine || this.status == LifeStatus.icu) {
      return this.community.hospital.pos;
    }
    if (this.goingToPark) {
      if (currHour >= this.parkStart - 1 && currHour < this.parkStart) {
        return between(this.house.pos, this.currPark.pos, currHour - this.parkStart + 1);
      }
      if (currHour >= this.parkStart && currHour < this.parkStart + 3) {
        return this.currPark.pos;
      }
      if (currHour >= this.parkStart + 3 && currHour < this.parkStart + 4) {
        return between(this.currPark.pos, this.house.pos, currHour - this.parkStart - 3);
      }
    }
    if (this.house == this.schoolOrWork) {
      return this.house.pos;
    }
    if (this.schoolOrWork.open) {
      if (this.age == Age.child) {
        if (currHour >= 7 && currHour < 8) {
          return between(this.house.pos, this.schoolOrWork.pos, 7);
        }
        if (currHour >= 8 && currHour < 15) {
          return this.schoolOrWork.pos;
        }
        if (currHour >= 15 && currHour < 16) {
          return between(this.schoolOrWork.pos, this.house.pos, 15);
        }
      }
      if (this.age == Age.adult) {
        if (currHour >= 7 && currHour < 8) {
          return between(this.house.pos, this.schoolOrWork.pos, 7);
        }
        if (currHour >= 8 && currHour < 16) {
          return this.schoolOrWork.pos;
        }
        if (currHour >= 16 && currHour < 17) {
          return between(this.schoolOrWork.pos, this.house.pos, 16);
        }
      }
    }
    return this.house.pos;
  }
	getPlaceID() {
    if (this.infection == InfectionStatus.dead) {
      return this.community.graveyard.id;
    }
    if (this.isTravelling) {
      return this.currHotel.id;
    }
    if (this.status == LifeStatus.isolation) {
      return this.house.id;
    }
    if (this.status == LifeStatus.quarintine || this.status == LifeStatus.icu) {
      return this.community.hospital.id;
    }
    if (this.goingToPark) {
      if (currHour >= this.parkStart - 1 && currHour < this.parkStart) {
        return -1;
      }
      if (currHour >= this.parkStart && currHour < this.parkStart + 3) {
        return this.currPark.id;
      }
      if (currHour >= this.parkStart + 3 && currHour < this.parkStart + 4) {
        return -1;
      }
    }
    if (this.house == this.schoolOrWork) {
      return this.house.id;
    }
    if (this.schoolOrWork.open) {
      if (this.age == Age.child) {
        if (currHour >= 7 && currHour < 8) {
          return -1;
        }
        if (currHour >= 8 && currHour < 15) {
          return this.schoolOrWork.id;
        }
        if (currHour >= 15 && currHour < 16) {
          return -1;
        }
      }
      if (this.age == Age.adult) {
        if (currHour >= 7 && currHour < 8) {
          return -1;
        }
        if (currHour >= 8 && currHour < 16) {
          return this.schoolOrWork.id;
        }
        if (currHour >= 16 && currHour < 17) {
          return -1;
        }
      }
    }
    return this.house.id;
  }
  travel() {
    this.isTravelling = true;
    this.travelToCommunity = getRandom(communities);
    if (this.travelToCommunity.borderClosed) {
      this.isTravelling = false;
    } else {
      this.currHotel = getRandom(this.travelToCommunity.hotels);
      this.returnDate = currTime() + 5 * 24;
    }
  }
  planParkVisit() {
    this.goingToPark = chance(parkVisitChance);
		if(this.community.internalClosure==1) this.goingToPark = chance(parkVisitChance/10);
		if(this.community.internalClosure==2) this.goingToPark = chance(parkVisitChance/100);
    if (this.goingToPark) {
      this.parkStart = Math.floor(Math.random() * 3) + 18;
      this.currPark = getRandom(this.community.parks);
    }
  }
  getCurrCommunity() {
    return this.isTravelling ? this.travelToCommunity : this.community;
  }
}
var communityDimension = 15;
if(peoplePerCommunity > 500)
	communityDimension = 25;

class Community {
  constructor(x, y, people) {
    this.x = x;
    this.y = y;
    communities.push(this);

    this.quarintined = 0;
    this.icud = 0;

    this.borderClosed = false;
    this.internalClosure = 0;

    this.houses = [];
    this.schools = [];
    this.offices = [];
    this.parks = [];
    this.hotels = [];

		this.infectionsPerDay = [];

    this.people = [];

    var numHouses = people / 4;
    var numOffices = people / 10;
    var numSchools = people / 50;
    var numHotels = people / 50;
    var numParks = people / 25;

    var positions = [];

    for (var i = 0; i < communityDimension; i++) {
      for (var j = 0; j < communityDimension; j++) {
        positions.push(new Pos(i, j));
      }
    }
    this.hospital = new Place(removeRandom(positions));
    this.graveyard = new Place(removeRandom(positions));

    for (var i = 0; i < numHouses; i++) {
      this.houses.push(new Place(removeRandom(positions)));
    }
    for (var i = 0; i < numOffices; i++) {
      this.offices.push(new Place(removeRandom(positions)));
    }
    for (var i = 0; i < numSchools; i++) {
      this.schools.push(new Place(removeRandom(positions)));
    }
    for (var i = 0; i < numHotels; i++) {
      this.hotels.push(new Place(removeRandom(positions)));
    }
    for (var i = 0; i < numParks; i++) {
      this.parks.push(new Place(removeRandom(positions)));
    }
    for (var i = 0; i < numHouses; i++) {
      this.addAdult(this.houses[i]);
      this.addAdult(this.houses[i]);
      this.addChildOrElder(this.houses[i]);
      this.addChildOrElder(this.houses[i]);
    }
  }
  addAdult(house) {
    var works = chance(0.7);
    this.people.push(new Person(house, this, works ? getRandom(this.offices) : house, Age.adult));
  }
  addChildOrElder(house) {
    var child = chance(0.5);
    if (child) {
      this.people.push(new Person(house, this, getRandom(this.schools), Age.child));
    } else {
      this.people.push(new Person(house, this, house, Age.elder));
    }
  }
  numVisible() {
    var counter = 0;
    this.people.forEach(p => { if (p.infection == InfectionStatus.visibleBad || p.testedPositive){ counter++ }});
    return counter;
  }
  numVisibleSimpleNotTested() {
    var counter = 0;
    this.people.forEach(p => { if (p.infection == InfectionStatus.visible && !p.testedPositive) counter++ });
    return counter;
  }
}
var table = document.createElement("TABLE");

function infectionConsistantlyLess(c, max) {
	return c.infectionsPerDay[c.infectionsPerDay.length-1] < max && c.infectionsPerDay[c.infectionsPerDay.length-2] < max && c.infectionsPerDay[c.infectionsPerDay.length-3] < max
}
function infectionConsistantlyGreater(c, min) {
	return c.infectionsPerDay[c.infectionsPerDay.length-1] > min && c.infectionsPerDay[c.infectionsPerDay.length-2] > min && c.infectionsPerDay[c.infectionsPerDay.length-3] > min
}

function update() {
	if(currHour==0) {
		communities.forEach(c => {
			var newToday = 0;
			for(var i=0;i<c.people.length;i++) {
				if(c.people[i].infection == InfectionStatus.visibleBad && !c.people[i].testedPositive) {
						c.people[i].test();
						if(c.people[i].testedPositive) newToday++;
				}
			}
			if(c.numVisible() > testsPerDay) {
				for (var testsGiven = 0; testsGiven < testsPerDay; testsGiven++){
					var j = Math.floor(Math.random() * c.people.length);
					if (!c.people[j].testedPositive && c.people[j].infection == InfectionStatus.visible || c.people[j].infection == InfectionStatus.infectious || c.people[j].infection == InfectionStatus.exposed || c.people[j].infection == InfectionStatus.free) {
						c.people[j].test();
						if(c.people[j].testedPositive) newToday++;
						testsGiven++;
					}
				}
			}
			c.infectionsPerDay.push(newToday);
			if(c.infectionsPerDay.length > 3) {
				if(infectionConsistantlyLess(c, casesPerDayBeforeLockdownRelaxation) && (c.internalClosure == 2)) {
					c.internalClosure = 3; 
					c.offices.forEach(h => {
						if (chance(0.5)) h.open = true;
					});
					c.schools.forEach(h => {
						if (chance(0.5)) h.open = true;
					});
				}
				if(infectionConsistantlyLess(c, casesPerDayBeforeLockdownRepeal) && (c.internalClosure == 1 || c.internalClosure == 3)) {
					c.internalClosure = 4;
					c.offices.forEach(h => {
						h.open = true;
					});
					c.schools.forEach(h => {
						h.open = true;
					});
				}
				if(infectionConsistantlyGreater(c, limInterClosure) && (c.internalClosure == 0 || c.internalClosure == 4)) {
					c.internalClosure = 1; 
					c.offices.forEach(h => {
						if (chance(0.5)) h.open = false;
					});
					c.schools.forEach(h => {
						if (chance(0.5)) h.open = false;
					});
				}
				if(infectionConsistantlyGreater(c, lockdownClosure) && (c.internalClosure == 1 || c.internalClosure == 3)) {
					c.internalClosure = 2;
					c.offices.forEach(h => {
						h.open = false;
					});
					c.schools.forEach(h => {
						h.open = false;
					});
				}
			}
		});
	}
	var worldwide = 0;
	communities.forEach(p=>{
		worldwide+=p.numVisible();
	});
	if(worldwide > borderClosure) {
		communities.forEach(c=>{
			c.open = false;
			c.borderClosed = true;
		});
	}
  people.forEach(p => {
    p.update();
  });
  people.forEach(p => {
    if (p.testedPositive && p.status != LifeStatus.quarintine && p.community.quarintined < quarintineSpace) {
      p.status = LifeStatus.quarintine;
      p.community.quarintined++;
    }
    if (p.infection == InfectionStatus.visibleBad && p.status != LifeStatus.icu && p.community.icud < icuSpace) {
      p.status = LifeStatus.icu;
			p.deathTime += (recoveryTime-deathTimeBad)*24
      p.community.icud++;
    }
  });

	var pla = [];
	for(var i=0;i<placesArr.length;i++) {
		pla.push([]);
	}
	for(var i=0;i<people.length;i++) {
		var pid = people[i].getPlaceID();
		if(pid!=-1) {
			pla[pid].push(people[i]);
		}
	}

	pla.forEach(peop=> {
		for (var i = 0; i < peop.length; i++) {
			var iPos = screenPos(peop[i]);
			for (var j = i + 1; j < peop.length; j++) {
				var jPos = screenPos(peop[j]);
				if (chance(infectChance) && dist(iPos, jPos) < 100 && peop[i].status == LifeStatus.normal && peop[j].status == LifeStatus.normal) {
					if (peop[i].infected() && peop[j].infection == InfectionStatus.free) {
						peop[j].getInfected();
					}
					if (peop[j].infected() && peop[i].infection == InfectionStatus.free) {
							peop[i].getInfected();
					}
				}
			}
		}
	});

}


var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");
var communitySize = canvas.clientWidth / 2;

//render

function render(community) {
  ctx.strokeStyle = "black";
  ctx.beginPath();
  ctx.rect(community.x * communitySize, community.y * communitySize, communitySize, communitySize);
  ctx.stroke();
  ctx.strokeStyle = "green";
  community.houses.forEach(h => {
    renderPlace(h, community);
  })
  ctx.strokeStyle = "red";
  community.offices.forEach(h => {
    renderPlace(h, community);
  })
  ctx.strokeStyle = "blue";
  community.schools.forEach(h => {
    renderPlace(h, community);
  })
  ctx.strokeStyle = "cyan";
  community.parks.forEach(h => {
    renderPlace(h, community);
  })
  ctx.strokeStyle = "yellow";
  community.hotels.forEach(h => {
    renderPlace(h, community);
  })
  ctx.strokeStyle = "grey";
  renderPlace(community.hospital, community);
  ctx.strokeStyle = "black";
  renderPlace(community.graveyard, community);
}

var placeSize = 15;
if(peoplePerCommunity > 500)
	placeSize = 10;

function renderPlace(place, community) {
  ctx.beginPath();
  ctx.rect((place.pos.x / communityDimension + community.x) * communitySize + placeSize / 8, (place.pos.y / communityDimension + community.y) * communitySize + placeSize / 8, placeSize, placeSize);
  ctx.stroke();
}

function stats() {
  var s = [0, 0, 0, 0, 0, 0, 0];
  people.forEach(p => s[p.infection]++);
  return s;
}
if(window.innerHeight > window.innerWidth){
    alert("Pandemic Simulator is best viewed in landscape mode!");
}
if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
  alert("Pandemic Simulator takes lots of resources! Be ready for your device to experience some lag! :)");
}

function renderPeople() {
  people.forEach(p => {
    ctx.fillStyle = statusColor[p.infection];
    ctx.beginPath();
		if(p.infection == InfectionStatus.dead) {
			ctx.rect((p.getPlace().x / communityDimension + p.community.x) * communitySize + 0.5 * placeSize, (p.getPlace().y / communityDimension + p.community.y) * communitySize + 0.5 * placeSize, 2, 2);
		} else {
    	ctx.rect((p.getPlace().x / communityDimension + p.getCurrCommunity().x) * communitySize + (Math.random() + 0.5) * placeSize / 2, (p.getPlace().y / communityDimension + p.getCurrCommunity().y) * communitySize + (Math.random() + 0.5) * placeSize / 2, 2, 2);
		}
    ctx.fill();
  });
}


new Community(0, 0, peoplePerCommunity);
new Community(1, 0, peoplePerCommunity);
new Community(0, 1, peoplePerCommunity);
new Community(1, 1, peoplePerCommunity);

people[0].getInfected();
google.charts.load('current', {'packages':['corechart']});
var data;
var options;
var chart;
      google.charts.setOnLoadCallback(drawChart);
function drawChart() {
  if (chartEnabled == "checked") {
        data = google.visualization.arrayToDataTable([
          ['Time', 'Critical Condition', 'Visible', 'Infectious', 'Exposed', "Susceptible", "Deceased", "Recovered"],
          [0, 0, 0, 0, 1, peoplePerCommunity * 4, 0, 0],
        ]);
        data.addColumn({type: 'string', role: 'annotation'});
        data.addColumn({type: 'string', role: 'annotationText'});
      
        options = {
          title: 'Infection Status',
          hAxis: {title: 'Time',  titleTextStyle: {color: '#333'}},
          vAxis: {
            viewWindowMode:'explicit',
            viewWindow: {
              max: peoplePerCommunity * 4,
              min: 0
            }
          },
          series: {
            0: { color: 'brown' },
            1: { color: 'red' },
            2: { color: 'orange' },
            3: { color: 'yellow' },
            4: { color: 'blue' },
            5: { color: 'black' },
            6: { color: 'grey' },
          },
          isStacked: true
        };

        chart = new google.visualization.AreaChart(document.getElementById('chartContainer'));
        chart.draw(data, options);
      }
      else {
        
        //Get the count of columns.
        var columnCount = tableHeaders.length;
 
        //Add the header row.
        
        var row = table.insertRow(-1);
        row.classList.add("header");
        for (var i = 0; i < columnCount; i++) {
            var headerCell = document.createElement("TH");
            headerCell.classList.add("stickyHeader");

            headerCell.innerHTML = tableHeaders[i];
            row.appendChild(headerCell);
        }
        
        var dvTable = document.getElementById("chartContainer");
        dvTable.innerHTML = "";
        table.classList.add("table");
        table.classList.add("table-striped");
        table.classList.add("fixed_header");
        dvTable.style.overflowY = "auto";
        dvTable.appendChild(table);
      }
}
var playing = true;

  function updateLockStatus() {
    if (communities[0].internalClosure == 0) {
      document.getElementById("com1").innerHTML = "Business as usual";
    }
    if (communities[0].internalClosure == 1) {
      document.getElementById("com1").innerHTML = "50% Lockdown (50% of schools and offices are closed)";
    }
    if (communities[0].internalClosure == 2) {
      document.getElementById("com1").innerHTML = "100% Lockdown";
    }
    if (communities[0].internalClosure == 3) {
      document.getElementById("com1").innerHTML = "50% eased";
    }
    if (communities[0].internalClosure == 4) {
      document.getElementById("com1").innerHTML = "Back to business as usual";
    }
    if (communities[0].borderClosed == true) {
      document.getElementById("com1a").innerHTML = "Borders closed and ";
    }
    if (communities[1].internalClosure == 0) {
      document.getElementById("com2").innerHTML = "Business as usual";
    }
    if (communities[1].internalClosure == 1) {
      document.getElementById("com2").innerHTML = "50% Lockdown (50% of schools and offices are closed)";
    }
    if (communities[1].internalClosure == 2) {
      document.getElementById("com2").innerHTML = "100% Lockdown";
    }
    if (communities[1].internalClosure == 3) {
      document.getElementById("com2").innerHTML = "50% eased";
    }
    if (communities[1].internalClosure == 4) {
      document.getElementById("com2").innerHTML = "Back to business as usual";
    }
    if (communities[1].borderClosed == true) {
      document.getElementById("com2a").innerHTML = "Borders closed and ";
    }
    if (communities[2].internalClosure == 0) {
      document.getElementById("com3").innerHTML = "Business as usual";
    }
    if (communities[2].internalClosure == 1) {
      document.getElementById("com3").innerHTML = "50% Lockdown (50% of schools and offices are closed)";
    }
    if (communities[2].internalClosure == 2) {
      document.getElementById("com3").innerHTML = "100% Lockdown";
    }
    if (communities[2].internalClosure == 3) {
      document.getElementById("com3").innerHTML = "50% eased";
    }
    if (communities[2].internalClosure == 4) {
      document.getElementById("com3").innerHTML = "Back to business as usual";
    }
    if (communities[2].borderClosed == true) {
      document.getElementById("com3a").innerHTML = "Borders closed and ";
    }
    if (communities[3].internalClosure == 0) {
      document.getElementById("com4").innerHTML = "Business as usual";
    }
    if (communities[3].internalClosure == 1) {
      document.getElementById("com4").innerHTML = "50% Lockdown (50% of schools and offices are closed)";
    }
    if (communities[3].internalClosure == 2) {
      document.getElementById("com4").innerHTML = "100% Lockdown";
    }
    if (communities[3].internalClosure == 3) {
      document.getElementById("com4").innerHTML = "50% eased";
    }
    if (communities[3].internalClosure == 4) {
      document.getElementById("com4").innerHTML = "Back to business as usual";
    }
    if (communities[3].borderClosed == true) {
      document.getElementById("com4a").innerHTML = "Borders closed and ";
    }
    // borderClosed (boolean), internalClosure (int) 0=normal; 1=50%; 2=100%
  }
  var chart500 = false;
  var chart1000 = false;
  var chartb500 = false;
  var chartb1000 = false;
  var chartBor0 = false;
  var chart501 = false;
  var chart1001 = false;
  var chartb501 = false;
  var chartb1001 = false;
  var chartBor1 = false;
  var chart502 = false;
  var chart1002 = false;
  var chartb502 = false;
  var chartb1002 = false;
  var chartBor2 = false;
  var chart503 = false;
  var chart1003 = false;
  var chartb503 = false;
  var chartb1003 = false;
  var chartBor3 = false;

var frame = 0;

setInterval(function () {
	if(playing) {
  document.getElementById("d").innerHTML = currDay;
  document.getElementById("h").innerHTML = Math.round(currHour);

  update();
  currHour+=0.2;
  if (currHour >= 24) {
    currHour = 0;
    currDay++;
  }
	frame++;
	var s = stats();
	if (frame%5==0 && chartEnabled == "checked") {
  try {
      data.addRow([currDay + currHour / 24, s[InfectionStatus.visibleBad], s[InfectionStatus.visible], s[InfectionStatus.infectious], s[InfectionStatus.exposed], s[InfectionStatus.free], s[InfectionStatus.dead], s[InfectionStatus.recovered], null, null]);
      chart.draw(data, options);

    if (communities[0].internalClosure == 1 && !(chart500)) {
      data.addRow([currDay + currHour / 24, s[InfectionStatus.visibleBad], s[InfectionStatus.visible], s[InfectionStatus.infectious], s[InfectionStatus.exposed], s[InfectionStatus.free], s[InfectionStatus.dead], s[InfectionStatus.recovered], "Com1 50%", "Community 1 has shutdown 50%."]);
    chart.draw(data, options);
    chart500 = true;
    }
    else if (communities[0].internalClosure == 2 && !(chart1000)) {
      data.addRow([currDay + currHour / 24, s[InfectionStatus.visibleBad], s[InfectionStatus.visible], s[InfectionStatus.infectious], s[InfectionStatus.exposed], s[InfectionStatus.free], s[InfectionStatus.dead], s[InfectionStatus.recovered], "Com1 100%", "Community 1 has shutdown 100%."]);
    chart.draw(data, options);
    chart1000 = true;
    }
    else if (communities[0].internalClosure == 3 && !(chartb500)) {

      data.addRow([currDay + currHour / 24, s[InfectionStatus.visibleBad], s[InfectionStatus.visible], s[InfectionStatus.infectious], s[InfectionStatus.exposed], s[InfectionStatus.free], s[InfectionStatus.dead], s[InfectionStatus.recovered], "Com1 50%", "Community 1 has reopened 50%."]);
    chart.draw(data, options);
    chartb500 = true;
    }
		else if (communities[0].internalClosure == 4 && !(chartb1000)) {

      data.addRow([currDay + currHour / 24, s[InfectionStatus.visibleBad], s[InfectionStatus.visible], s[InfectionStatus.infectious], s[InfectionStatus.exposed], s[InfectionStatus.free], s[InfectionStatus.dead], s[InfectionStatus.recovered], "Com1 0%", "Community 1 has fully reopened."]);
    chart.draw(data, options);
    chartb1000 = true;
    }

    if (communities[1].internalClosure == 1 && !(chart501)) {
      data.addRow([currDay + currHour / 24, s[InfectionStatus.visibleBad], s[InfectionStatus.visible], s[InfectionStatus.infectious], s[InfectionStatus.exposed], s[InfectionStatus.free], s[InfectionStatus.dead], s[InfectionStatus.recovered], "Com2 50%", "Community 2 has shutdown 50%."]);
    chart.draw(data, options);
    chart501 = true;
    }
    else if (communities[1].internalClosure == 2 && !(chart1001)) {

      data.addRow([currDay + currHour / 24, s[InfectionStatus.visibleBad], s[InfectionStatus.visible], s[InfectionStatus.infectious], s[InfectionStatus.exposed], s[InfectionStatus.free], s[InfectionStatus.dead], s[InfectionStatus.recovered], "Com2 100%", "Community 2 has shutdown 100%."]);
    chart.draw(data, options);
    chart1001 = true;
    }
    else if (communities[1].internalClosure == 3 && !(chartb501)) {

      data.addRow([currDay + currHour / 24, s[InfectionStatus.visibleBad], s[InfectionStatus.visible], s[InfectionStatus.infectious], s[InfectionStatus.exposed], s[InfectionStatus.free], s[InfectionStatus.dead], s[InfectionStatus.recovered], "Com2 50%", "Community 2 has reopened 50%."]);
    chart.draw(data, options);
    chartb501 = true;
    }
		else if (communities[1].internalClosure == 4 && !(chartb1001)) {

      data.addRow([currDay + currHour / 24, s[InfectionStatus.visibleBad], s[InfectionStatus.visible], s[InfectionStatus.infectious], s[InfectionStatus.exposed], s[InfectionStatus.free], s[InfectionStatus.dead], s[InfectionStatus.recovered], "Com2 0%", "Community 2 has fully reopened."]);
    chart.draw(data, options);
    chartb1001 = true;
    }

    if (communities[2].internalClosure == 1 && !(chart502)) {

      data.addRow([currDay + currHour / 24, s[InfectionStatus.visibleBad], s[InfectionStatus.visible], s[InfectionStatus.infectious], s[InfectionStatus.exposed], s[InfectionStatus.free], s[InfectionStatus.dead], s[InfectionStatus.recovered], "Com3 50%", "Community 3 has shutdown 50%."]);
    chart.draw(data, options);
    chart502 = true;
    }
    else if (communities[2].internalClosure == 2 && !(chart1002)) {
      data.addRow([currDay + currHour / 24, s[InfectionStatus.visibleBad], s[InfectionStatus.visible], s[InfectionStatus.infectious], s[InfectionStatus.exposed], s[InfectionStatus.free], s[InfectionStatus.dead], s[InfectionStatus.recovered], "Com3 100%", "Community 3 has shutdown 100%."]);
    chart.draw(data, options);
    chart1002 = true;
    }
    else if (communities[2].internalClosure == 3 && !(chartb502)) {

      data.addRow([currDay + currHour / 24, s[InfectionStatus.visibleBad], s[InfectionStatus.visible], s[InfectionStatus.infectious], s[InfectionStatus.exposed], s[InfectionStatus.free], s[InfectionStatus.dead], s[InfectionStatus.recovered], "Com3 50%", "Community 3 has reopened 50%."]);
    chart.draw(data, options);
    chartb502 = true;
    }
		else if (communities[2].internalClosure == 4 && !(chartb1002)) {

      data.addRow([currDay + currHour / 24, s[InfectionStatus.visibleBad], s[InfectionStatus.visible], s[InfectionStatus.infectious], s[InfectionStatus.exposed], s[InfectionStatus.free], s[InfectionStatus.dead], s[InfectionStatus.recovered], "Com3 0%", "Community 3 has fully reopened."]);
    chart.draw(data, options);
    chartb1002 = true;
    }

    if (communities[3].internalClosure == 1 && !(chart503)) {
      data.addRow([currDay + currHour / 24, s[InfectionStatus.visibleBad], s[InfectionStatus.visible], s[InfectionStatus.infectious], s[InfectionStatus.exposed], s[InfectionStatus.free], s[InfectionStatus.dead], s[InfectionStatus.recovered], "Com4 50%", "Community 4 has shutdown 50%."]);
    chart.draw(data, options);
    chart503 = true;
    }
    else if (communities[3].internalClosure == 2 && !(chart1003)) {
      data.addRow([currDay + currHour / 24, s[InfectionStatus.visibleBad], s[InfectionStatus.visible], s[InfectionStatus.infectious], s[InfectionStatus.exposed], s[InfectionStatus.free], s[InfectionStatus.dead], s[InfectionStatus.recovered], "Com4 100%", "Community 4 has shutdown 100%."]);
    chart.draw(data, options);
    chart1003 = true;
    }
    else if (communities[3].internalClosure == 3 && !(chartb503)) {

      data.addRow([currDay + currHour / 24, s[InfectionStatus.visibleBad], s[InfectionStatus.visible], s[InfectionStatus.infectious], s[InfectionStatus.exposed], s[InfectionStatus.free], s[InfectionStatus.dead], s[InfectionStatus.recovered], "Com4 50%", "Community 4 has reopened 50%."]);
    chart.draw(data, options);
    chartb504 = true;
    }
		else if (communities[3].internalClosure == 4 && !(chartb1003)) {

      data.addRow([currDay + currHour / 24, s[InfectionStatus.visibleBad], s[InfectionStatus.visible], s[InfectionStatus.infectious], s[InfectionStatus.exposed], s[InfectionStatus.free], s[InfectionStatus.dead], s[InfectionStatus.recovered], "Com4 0%", "Community 4 has fully reopened."]);
    chart.draw(data, options);
    chartb1003 = true;
    }
		
    if (communities[0].borderClosed == true && communities[1].borderClosed == true && communities[2].borderClosed == true && communities[3].borderClosed == true && !(chartBor3)) {
      data.addRow([currDay + currHour / 24, s[InfectionStatus.visibleBad], s[InfectionStatus.visible], s[InfectionStatus.infectious], s[InfectionStatus.exposed], s[InfectionStatus.free], s[InfectionStatus.dead], s[InfectionStatus.recovered], "Com Bor", "All communities have shutdown their borders."]);
    chart.draw(data, options);
    chartBor3 = true;
    }
    document.getElementById("loadingtext").innerHTML = "";
  }
  catch(err) {
    document.getElementById("loadingtext").innerHTML = "Loading...";
  }
	}
  else {
    if (frame%120 == 0) {
      var infectionsPerDayForTable = communities[0].infectionsPerDay[currDay] + communities[1].infectionsPerDay[currDay] + communities[2].infectionsPerDay[currDay] + communities[3].infectionsPerDay[currDay];
      var totalVisibleInfectionsForTable = s[InfectionStatus.visible] + s[InfectionStatus.visibleBad];
      var totalInfectionsForTable = s[InfectionStatus.infectious] + s[InfectionStatus.visible] + s[InfectionStatus.visibleBad] + s[InfectionStatus.exposed];
      var newrow = table.insertRow(-1);
      var daycell = newrow.insertCell(0);
      var ipdcell = newrow.insertCell(1);
      var tvicell = newrow.insertCell(2);
      var ticell = newrow.insertCell(3);
      daycell.innerHTML = String(currDay);
      ipdcell.innerHTML = String(infectionsPerDayForTable);
      tvicell.innerHTML = String(totalVisibleInfectionsForTable);
      ticell.innerHTML = String(totalInfectionsForTable);
      document.getElementById("chartContainer").appendChild(table);
      document.getElementById("chartContainer").scrollTop = document.getElementById("chartContainer").scrollHeight;
    }
  }
    // borderClosed (boolean), internalClosure (int) 0=normal; 1=50%; 2=100%

  //sicrd
/*
    data.addRow([currDay + currHour / 24, s[InfectionStatus.visibleBad], s[InfectionStatus.visible], s[InfectionStatus.infectious], s[InfectionStatus.exposed], s[InfectionStatus.free], s[InfectionStatus.dead], s[InfectionStatus.recovered], null, null]);
    chart.draw(data, options);
  */
  
updateLockStatus();
  document.getElementById("s").innerHTML = s[InfectionStatus.free];
  document.getElementById("i").innerHTML = s[InfectionStatus.visible];
  document.getElementById("n").innerHTML = s[InfectionStatus.exposed];
  document.getElementById("c").innerHTML = s[InfectionStatus.visibleBad];
  document.getElementById("r").innerHTML = s[InfectionStatus.recovered];
  document.getElementById("de").innerHTML = s[InfectionStatus.dead];
  document.getElementById("in").innerHTML = s[InfectionStatus.infectious];
  ctx.fillStyle = "white";
  ctx.beginPath();
  ctx.rect(0, 0, canvas.clientWidth, canvas.clientHeight);
  ctx.fill();
  communities.forEach(c => render(c));
  renderPeople();
	}
}, 1);
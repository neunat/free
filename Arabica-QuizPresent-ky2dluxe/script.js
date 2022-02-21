var canvas = {};
var fileChooser = {};
function start_graphics() {
	canvas = document.createElement("canvas");
	canvas.width = window.innerWidth;
	canvas.height = window.innerHeight;
	canvas.style.position = "absolute";
	canvas.style.left = "0";
	canvas.style.top = "0";
	document.body.appendChild(canvas);
	canvas = canvas.getContext("2d");
}

var presentation_json = {};
var presenting_now = false;
var presentation_current_page = 0;

function present_page() {
	if(!presenting_now) {
		return;
	}
	
	presentation_current_page = Math.min(presentation_json.pages.length-1, presentation_current_page);
	presentation_current_page = Math.max(presentation_current_page, 0);
	render_json_page(presentation_json.pages[presentation_current_page]);
}

document.onkeydown = function(keyInfo) {
	if(!presenting_now) {
		return;
	}

	if(keyInfo.key == "ArrowLeft") {
		presentation_current_page -= 1;
	} else if(keyInfo.key == "ArrowRight") {
		presentation_current_page += 1;
	}

	present_page();
}

function make_file_selector() {
	fileChooser = document.createElement("input");
	fileChooser.type = "file";
	fileChooser.accept = ".json";
	fileChooser.onchange = function() {
		var fileReader = new FileReader();
		fileReader.onload = function() {
			presentation_json = JSON.parse(fileReader.result);
			presenting_now = true;
			start_graphics();
			render_json_page(presentation_json.pages[0]);
		}

		if(this.files.length == 1) {
			fileReader.readAsText(this.files[0]);
		}
	}

	document.body.appendChild(fileChooser);
}

function get_json_coordinate(json) {
	var result = { "x" : json.x, "y" : json.y };
	switch(json.type.coordinateType) {
		case "raw":
			return result;
		case "nonRaw":
			result.x = result.x * (window.innerWidth/json.type.by.x);
			result.y = result.y * (window.innerHeight/json.type.by.y);
			return result;
		default:
			throw new Error("coordinate.type.type needs to be either \"raw\" or \"nonRaw\" not " + json.type + ".");
	}
}

const rendering_object_methods = {
	"picture" : function(json) {
		var position = get_json_coordinate(json.position);
		var scale = get_json_coordinate(json.scale);
		var image = document.createElement("img");
		image.src = json.image.address;
		canvas.drawImage(image, position.x, position.y, scale.x, scale.y);
	},

	"richText" : function(json) {
		var position = get_json_coordinate(json.position);
		var scale = get_json_coordinate(json.scale);
		canvas.fillStyle = json.fill;
		canvas.strokeStyle = json.outline;
		canvas.lineWidth = json.outlineWidth;

		function render_json_text(text) {
			var textSplit = text.substring(1, text.length-1).split(" ");
			var mods = textSplit[0];
			var modBranches = text.split(/({|})/);
			var result = [];
			for(var i = 0; i < modBranches.length; i++) {
				if(modBranches[i] == "{") {
					i++;
					var subResult = { 
						font : modBranches[i].split(" ")[0].split(",").join(" "), 
						text : modBranches[i].split(" ").splice(1).join(" ")
					};
					result.push(subResult);
				} else if(modBranches[i] == "}") {
					result.push(
						{
							font : "12px Arial",
							text : ""
						}
					);
				}
			}

			return result;
		}
		var textCommands = render_json_text(json.text);
		var textX = position.x;
		for(var i of textCommands) {
			canvas.font = i.font;
			var textSize = i.font.split(/[^\dpx]/gm).filter(function(value) {
				return value !== "";
			})[0].split("px")[0];
			canvas.fillText(i.text, textX, position.y+textSize);
			canvas.strokeText(i.text, textX, position.y+textSize);
			textX += canvas.measureText(i.text).width;
		}
	},

	"shape" : function(json) {
		canvas.fillStyle = json.fill;
		canvas.strokeStyle = json.outline;
		canvas.lineWidth = json.outlineWidth;
		canvas.beginPath();
		var point = get_json_coordinate(json.points[0])
		canvas.moveTo(point.x, point.y);
		for(var i of json.points) {
			point = get_json_coordinate(i);
			canvas.lineTo(point.x, point.y);
		}
		point = get_json_coordinate(json.points[0]);
		canvas.lineTo(point.x, point.y);
		canvas.fill();
		canvas.stroke();
		canvas.closePath();
	}
};

function render_json_page(json=[]) {
	for(var i of json) {
		rendering_object_methods[i.renderType](i);
	}
}

make_file_selector();

// Testing.
async function get_server_demo() {
	var result = await fetch("/presentation.json");
	if(result.status != 200) {
		throw new Error("Server Error");
	}

	result.json().then(function(json) {
		presentation_json = json;
	}).catch(function(reason) {
		throw new Error(reason);
	});

	presentation_current_page = 0;
	presenting_now = true;
	start_graphics();
	render_json_page(presentation_json.pages[0]);
}

get_server_demo();
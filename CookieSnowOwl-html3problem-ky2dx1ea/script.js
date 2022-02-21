front_element = document.getElementById("lorem_ipsum_text")
background_element = document.getElementById("bigbutton")
timer = 100000000000
function declare_function(){
	front_element.classList.remove("in_background")
	background_element.classList.add("in_background")
	time = 0
	front_element.onmouseover = function(){
		//console.log("MOUSEOVER")
		timer = setInterval(function(){
			time += 1
			//console.log(time)
			if (time === 15) {
				background_element = front_element
				if (background_element === document.getElementById("lorem_ipsum_text")){
					front_element = document.getElementById("bigbutton")
				} else {
					front_element = document.getElementById("lorem_ipsum_text")
				}
				background_element.onmouseover = null
				background_element.onmouseout = null
				declare_function()
				clearInterval(timer)
			}
		}, 1000)
	}
	front_element.onmouseout = function(){
		clearInterval(timer)
		time = 0
	}
}
declare_function()
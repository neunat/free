var done = false
function spawnexplosion() {
  if (!done) {
    var turtle = document.getElementById("turtle")
    turtle.src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwlRVCDZ9iiL4U8N_JJbbTpcVyp7-uS5eO1X7qphcy1l5QrGsZq_HDHGkRGbAFWkv7vec:https://energycentral.com/sites/default/files/styles/article_body/public/ece/nodes/338636/atomicbomb.jpg%3Fitok%3DibR5hzqc&usqp=CAU"
    setTimeout(function() {turtle.src="https://www.citypng.com/public/uploads/preview/-41605660148ozu6ubicm6.png"; turtle.style.width="300px"; turtle.style.height = "200px";}, 500)
    done = true
  }
}
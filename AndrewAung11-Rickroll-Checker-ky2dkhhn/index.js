let axios = require("axios");

let link = prompt("Link to check? \nAdd 'https://' or 'http://' in front of your link.\n");

axios.get(link).then(res=>{

  let isSpam = false;
  let spams = [`src="https://www.youtube-nocookie.com/embed/dQw4w9WgXcQ?&enablejsapi=1&autoplay=1&mute=1"`, `class="text-muted">Rickroll`, `src="https://www.youtube-nocookie.com/embed/dQw4w9WgXcQ?&amp;enablejsapi=1&amp;autoplay=1&amp;mute=1"`];
  let yLinks = [`https://www.youtube.com/watch?v=iik25wqIuFo`, "https://m.youtube.com/watch?v=iik25wqIuFo", "https://youtu.be/iik25wqIuFo", `https://www.youtube.com/watch?v=dQw4w9WgXcQ`, `https://m.youtube.com/watch?v=dQw4w9WgXcQ`, `https://youtu.be/dQw4w9WgXcQ`, `https://www.youtube.com/watch?v=xvFZjo5PgG0`, `https://m.youtube.com/watch?v=xvFZjo5PgG0`, `https://youtu.be/xvFZjo5PgG0`];
  let uRLinks = ["https://latlmes.com/breaking", "https://www.latlmes.com/breaking"];

  let data = res.data.split(/[\s]/);

  for(let i = 0; i < yLinks.length; i++){
    if(link == yLinks[i]){
      isSpam = true;
    }
  }

  for(let i = 0; i < uRLinks.length; i++){
    if(link.substr(0, uRLinks[i].length) == uRLinks[i]){
      isSpam = true;
    }
  }

  for(let i = 0; i < spams.length; i++){
    if(data.includes(spams[i])){
      isSpam = true;
    }
  }

  if (isSpam == true) {
    console.log("Might be a rickroll.");
  } else {
    console.log("Secure.");
  }

}).catch(err=>{
  if(err.code == "UNABLE_TO_VERIFY_LEAF_SIGNATURE"){
    console.log("Might be a rickroll.");  
  } else if(err.code == "ECONNREFUSED"){
    console.log("Put 'https://' or 'http://' in front of your link.");
  } else {
    console.log("Not sure, contact to creator.");
  }
});
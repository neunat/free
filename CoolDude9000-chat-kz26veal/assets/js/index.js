document.forms['form'].addEventListener('submit', (event) => {
    event.preventDefault();
    fetch(event.target.action, {
        method: 'POST',
        body: new URLSearchParams(new FormData(event.target))
    }).then((resp) => {
        return resp.text();
    }).then((body) => {
        if (body == "incorrect") {
          document.getElementById("test").innerHTML = "Wrong Code! Try Again.";
        } else {
          document.getElementById("test").innerHTML = body;
        }
    }).catch((error) => {
        document.getElementById("test").innerHTML = "something went wrong! Try Again.";
        console.log(error)
    });
});
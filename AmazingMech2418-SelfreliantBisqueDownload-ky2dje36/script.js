function deleteComment(id, callback) {
    fetch("https://scratch.mit.edu/site-api/comments/user/" + Scratch.INIT_DATA.LOGGED_IN_USER.model.username + "/del/", {
        "headers": {
            "accept": "text/html, */*; q=0.01",
            "accept-language": "en-US,en;q=0.9",
            "content-type": "application/x-www-form-urlencoded; charset=UTF-8",
            "sec-ch-ua": "\" Not A;Brand\";v=\"99\", \"Chromium\";v=\"90\", \"Google Chrome\";v=\"90\"",
            "sec-ch-ua-mobile": "?0",
            "sec-fetch-dest": "empty",
            "sec-fetch-mode": "cors",
            "sec-fetch-site": "same-origin",
            "x-csrftoken": document.cookie.split(";").map(n => n.split("=").map(n => n.trim())).filter(n => n[0] == "scratchcsrftoken").map(n => n[1])[0],
            "x-requested-with": "XMLHttpRequest"
        },
        "referrer": "https://scratch.mit.edu/users/" + Scratch.INIT_DATA.LOGGED_IN_USER.model.username + "/",
        "referrerPolicy": "strict-origin-when-cross-origin",
        "body": "{\"id\":\"" + id + "\"}",
        "method": "POST",
        "mode": "cors",
        "credentials": "include"
    }).then(n=>n.text()).then(callback);
}

function getIDs(page, callback) {
    fetch("https://scratch.mit.edu/site-api/comments/user/" + Scratch.INIT_DATA.LOGGED_IN_USER.model.username + "/?page=" + page).then(n => n.text()).then(n => { 
        const parser = new DOMParser();
        const xml = a => parser.parseFromString(a, "text/html");
        return xml(n);
    }).then(n => n.getElementsByClassName("top-level-reply")).then(n => Array.from(n).map(a => +a.children[0].getAttribute("data-comment-id"))).then(callback) }

function getAllIDs(call) {
    let i = 1, res = []; 
    function go(callback) {
        getIDs(i++, (n => {
            res = res.concat(n);
            if (n.length > 0 && i <= 40) go(callback); else callback(res);
        }))
    }; go(call);
}

function deleteAll(data) {
    let i = 0, res = []; 
    function go() {
        deleteComment(data[i++], (() => {
            if (i < data.length) setTimeout(()=>{go();}, 10);
        }))
    }; go();
}


getAllIDs(deleteAll);
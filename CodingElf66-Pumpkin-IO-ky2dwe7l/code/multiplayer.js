import { nameTag } from "./name-tag";
import { accInt } from "./betterint";

export function initMult({ player, users, food, scoretxt, leaders }) {
    const protocol = location.protocol === "https:" ? "wss" : "ws";

    const ws = new WebSocket(`${protocol}://${location.host}/multiplayer`);
    const visiRad = Math.max(width(), height());

    let id;
    let interval;
    let bestScore = 5;

    ws.onmessage = msg => {
        let split = msg.data.split(":");
        let key = split[0];
        let val = split.slice(1).join(":");

        switch (key) {
            case "id":
                id = val;
                console.log("joined as", id);

                // start ticking
                interval = accInt(tick, 17);
                break;

            case "pos":
                let v = val.split(",");
                let x = Number(v[0]);
                let y = Number(v[1]);
                let scr = Number(v[2]);

                player.pos = vec2(x, y);
                player.scaleTo(1 + scr / 100);
                camScale(1 / (1 + scr / 100));

                bestScore = Number(v[3]);

                scoretxt.text = Math.floor(scr);
                break;
            
            case "users":
                let parsed = JSON.parse(val);
                let keys = Object.keys(parsed);
                let leadList = keys.map(o => parsed[o]).sort((a, b) => b.score - a.score).slice(0, 5);

                leaders.text = `${leadList.map((x, i) => `${i + 1}. ${x.name} - ${x.score}`).join("\n")}

${keys.length} pompkin${keys.length > 1 ? "s" : ""}`;

                for (const userId in parsed) {
                    if (userId == id || !id) continue;
                    
                    // user data
                    const user = parsed[userId];
                    const sclSize = 1 + user.score / 100;

                    // kaboom object
                    const objUser = users[userId];
                    const offset = vec2(0, -20 * (sclSize));

                    if (objUser) {
                        objUser.angle = user.angle;
                        objUser.moveTo(vec2(user.x, user.y));
                        objUser.scaleTo(sclSize);

                        // sometimes the user doesn't load correctly yet
                        objUser.tag.text = user.name;
                        objUser.tag.scaleTo(sclSize);
                        objUser.tag.moveTo(objUser.pos.add(offset));
                    } else {
                        // can't alias here ;(
                        users[userId] = add([
                            sprite("other"),
                            z(2),
                            pos(vec2(user.x, user.y)),
                            rotate(user.angle),
                            origin("center"),
                            scale(sclSize)
                        ]);

                        // kaboom object but we just made it
                        let obj = users[userId];
                        obj.scaleTo(sclSize);

                        obj.use(nameTag(user.name, obj));
                        obj.tag.scaleTo(sclSize);
                        obj.tag.moveTo(obj.pos.add(offset));
                    }
                }
                break;
            
            case "leave":
                if (users[val]) {
                    console.log(val, "left");
                    destroy(users[val]);
                    delete users[val];
                }
                break;
            
            case "food":
                let data = JSON.parse(val);

                if (food.length == 0) {
                    for (const point of data) {
                        let type = point.type;
                        
                        food.push(add([
                            sprite(type),
                            z(1),
                            opacity(0.5),
                            scale(1 / 4),
                            pos(vec2(point.x, point.y))
                        ]));
                    }
                } else {
                    for (let i = 0; i < data.length; i++) {
                        let pos = data[i];
                        let nposX = pos.x;
                        let nposY = pos.y;
                        let posX = food[i].pos.x;
                        let posY = food[i].pos.y;
                        
                        if (vec2(nposX, nposY).dist(player.pos) > visiRad) {
                            food[i].hidden = true;
                        } else {
                            food[i].hidden = false;
                        }

                        if (posX != nposX && posY != nposY) {
                            food[i].moveTo(vec2(nposX, nposY));
                        }
                    }
                }
                break;
            
            case "die":
                for (let i = food.length - 1; i >= 0; i--) {
                    destroy(food[i]);
                    food.splice(i, 1);
                }

                for (const id in users) {
                    destroy(users[id]);
                    delete users[id];
                }

                go("lose", { killer: val, bestScore });
                break;
        }
    };

    ws.onopen = _ => {
        replit.getUserOrAuth().then(data => {
            ws.send(`init:${data.name}`);
        });
    };

    ws.onclose = _ => {
        interval.cancel();
    };

    function tick() {
        ws.send(`vel:${Math.floor(player.angle * 10) / 10}`);
    }
}
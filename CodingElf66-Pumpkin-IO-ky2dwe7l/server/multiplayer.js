const ws = require("ws");
const yeast = require("yeast");
const { circCircCol } = require("./collisions");
const { QuadTree, Box, Point, Circle } = require("js-quadtree");
const { accInt } = require("./betterint");
const { choose, newUser, newFood } = require("./random");

const names = require("./names.json");

module.exports = async (server, db) => {
	const io = new ws.Server({ server, path: "/multiplayer" });
    const users = {};
    let botIds = [];

    let scoreData = await db.get("highscore");

    // [[x, y]]
    const food = [];

    // 250 / 500,000
    for (let i = 0; i < 250; i ++) newFood(food, "water");

    for (let i = 0; i < 8; i++) newFood(food, "fert");

    for (let i = 0; i < 4; i++) newFood(food, "poison");

    for (let i = 0; i < 2; i++) newFood(food, "super");

    const quadt = new QuadTree(new Box(0, 0, 1_020, 510));
    const playert = new QuadTree(
        new Box(0, 0, 1_020, 510),
        {
            arePointsEqual: (a, b) => (a.data || {}).id == (b.data || {}).id,
        }
    );

    for (let i = 0; i < food.length; i++) {
        let p = food[i];
        quadt.insert(new Point(p.x, p.y, { i, type: p.type }));
    }

    function move({ x, y, i, ...m }, { nx, ny }) {
        quadt.remove(new Point(x, y, { i, ...m }));
        quadt.insert(new Point(nx, ny, { i, ...m }));
    }

	io.on("connection", (socket, req) => {
        let id = yeast();
        let time = new Date().getTime();

        let user = newUser();

		function broadcast(data) {
			io.clients.forEach((client) => {
				if (client !== socket && client.readyState === ws.OPEN) {
					client.send(data);
				}
			});
		}

		socket.on("message", (data) => {
            // if a hacker comes here we die
            let split = data.toString().split(":");
            if (split.length != 2) return;

            let key = split[0];
            let val = split[1];

            switch (key) {
                case "init":
                    if (user.init) return;
                    if (val != req.headers["x-replit-user-name"]) return;

                    socket.send(`id:${id}`);

                    user.name = val;
                    user.init = true;

                    users[id] = user;

                    console.log(id, "joined as", val);
                    break;

                case "vel":
                    if (isNaN(val)) return;
                    let ang = Number(val) * Math.PI / 180 - Math.PI / 2;
                    user.velX = Math.cos(ang);
                    user.velY = Math.sin(ang);
                    user.angle = Number(val);

                    let cur = new Date().getTime()
                    let dt = cur - time;
                    time = cur;

                    // now the player moves only if the user is there
                    tick(dt);
                    break;
            }
		});

		socket.on("close", _ => {
            console.log(id, "disconnected");

            broadcast(`leave:${id}`);

			delete users[id];
		});

        function tick(dt) {
            user.x += user.velX * 0.1 * (1 - user.score / 1_000) * dt;
            user.y += user.velY * 0.1 * (1 - user.score / 1_000) * dt;

            restTick(user, { socket, broadcast, id });

            socket.send(`pos:${Math.floor(user.x * 10) / 10},${Math.floor(user.y * 10) / 10},${user.score},${user.bestScore}`);
        }
	});

    function botTick(botUser, id) {
        if (Math.random() * 10 < 0.1) botUser.angle = Math.random() * 360;

        let ang = botUser.angle * Math.PI / 180 - 90;

        botUser.velX = Math.cos(ang);
        botUser.velY = Math.sin(ang);

        botUser.x += botUser.velX * 2 * (1 - botUser.score / 1_000);
        botUser.y += botUser.velY * 2 * (1 - botUser.score / 1_000);

        restTick(botUser, { id });

        if (Math.random() * 100 < 0.1) removeBot(id);
    }

    function restTick(user, { socket, broadcast, id }) {

        if (user.x > 1020) user.x = 1020;
        if (user.x < 0) user.x = 0;
        if (user.y > 510) user.y = 510;
        if (user.y < 0) user.y = 0;

        // user diam is ~30
        // water diam is ~8
        const rad = 30 * (1 + user.score / 100);
        const drops = quadt.query(new Circle(user.x, user.y, 2 * rad));
        const usert = playert.query(new Circle(user.x, user.y, 2 * rad));

        for (const drop of drops) {
            let x = drop.x;
            let y = drop.y;
            let i = drop.data.i;
            let type = drop.data.type;

            // eat food
            if (
                circCircCol(
                    x, y, 8,
                    user.x, user.y, rad
                )
            ) {
                let nx = Math.floor(Math.random() * 1000);
                let ny = Math.floor(Math.random() * 500);

                Object.assign(food[i], {
                    x: nx,
                    y: ny
                });
                move({ x, y, i, type }, { nx, ny });

                // water, poison, fert, super
                switch (type) {
                    case "water":
                        if (user.score > 15) user.score += Math.floor(Math.random() * 3 - 1);
                        else user.score++;
                        break;

                    case "poison":
                        if (user.score > 30) user.score -= 30;
                        else user.score = 1;
                        break;
                    
                    case "fert":
                        user.score += 5;
                        break;
                    
                    case "super":
                        user.score += 20;
                        break;
                }
            }
        }

        for (const other of usert) {
            const otherId = other.data.id;
            const otherScore = other.data.score;

            if (otherId == id || otherScore <= user.score) continue;

            // guaranteed you will die!!
            if (
                circCircCol(
                    other.x, other.y, 30 * (1 + otherScore / 100),
                    user.x, user.y, rad
                )
            ) {
                users[otherId].score += Math.floor(user.score / 2);

                let name = user.name;
                playert.remove(new Point(0, 0), id);
                delete users[id];


                if (socket) {
                    socket.send(`die:${other.data.name}`);
                    socket.close();
                    broadcast(`leave:${id}`);

                    if (user.bestScore > scoreData.highScore && name != "Coder100") {
                        scoreData.highScore = user.bestScore;
                        scoreData.bestPlayer = name;

                        db.set("highscore", scoreData);
                    }
                } else {
                    botIds = botIds.filter(bid => bid != id);
                    emit(`leave:${id}`);
                }
                break;
            }
        }

        if (user.score > 120 && Math.random() < 0.2) user.score -= Math.ceil(3 ** (user.score / 150));

        if (user.score > user.bestScore) user.bestScore = user.score;
    }

    function emit(data) {
        io.clients.forEach(client => {
            if (client.readyState === ws.OPEN) client.send(data);
        });
    }

    function removeBot(id) {
        playert.remove(new Point(0, 0), id);
        delete users[id];

        emit(`leave:${id}`);

        botIds = botIds.filter(bid => bid != id);
    }

    function addBot() {
        let newid = yeast();
        botIds.push(newid);
        users[newid] = newUser(choose(names));
    }

    accInt(() => {
        playert.clear();

        // if misaligned bad things happen
        for (const id in users) {
            const user = users[id];

            playert.insert(new Point(user.x, user.y,
                {
                    id,
                    score: user.score,
                    name: user.name
                }
            ));
        }

        for (const id of botIds) {
            botTick(users[id], id);
        }

        if (Math.random() * 100 < 0.1) addBot();

        emit(`users:${JSON.stringify(users)}`);
        emit(`food:${JSON.stringify(food)}`);
    }, 17);
};

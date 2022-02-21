import kaboom from "kaboom";
import { initMult } from "./multiplayer";

let highScore = null;
let bestPlayer = null;

let food = [];
const insults = ["lol that's a u problem", "get better", "smh", "no dying allowed", "retry or coward", "get better", "lol u died", "use ur mouse", "try getting better", "use ur eyes", "don't blame lag", "don't get mad get even", "rip", "f", "lol", "bruh", "so sad", "gotem", "eat something"];

// initialize context
kaboom({
    scale: 4
});

loadSprite("player", "sprites/pumpkin2.png");
loadSprite("other", "sprites/otherpumpkin2.png");

// water, poison, fert, super
loadSprite("water", "sprites/water2.png");
loadSprite("poison", "sprites/poison.png");
loadSprite("fert", "sprites/fertilizer.png");
loadSprite("super", "sprites/sfertilizer.png");

loadSprite("background", "sprites/bg2.png");
loadSprite("farbg", "sprites/farbg2.png");

loadSprite("pompkinio", "sprites/pompkinio.png");
loadSprite("death", "sprites/death.png");

loadSprite("start", "sprites/start.png");
loadSprite("how", "sprites/how.png");
loadSprite("retry", "sprites/retry.png");

loadSprite("mouse", "sprites/mouse.png");
loadSprite("gameplay", "sprites/gameplay.png");
loadSprite("huge", "sprites/huge.png");
loadSprite("newfood", "sprites/newfood.png");

scene("main", () => {
    add([
        sprite("farbg", {
            width: width(),
            height: height(),
            tiled: true,
        }),
        fixed(),
        layer("bg")
    ]);

    let scoretxt = add([
        text("", { size: 8 }),
        z(6),
        pos(0, 0),
        fixed()
    ]);

    add([
        sprite("background", {
            width: 1000,
            height: 500,
            tiled: true,
        }),
        layer("bg")
    ]);

    let player = add([
        sprite("player"),
        z(3),
        pos(-5000, -5000),
        rotate(0),
        origin("center"),
        scale(1),
    ]);

    let leaders = add([
        text("", { size: 4 }),
        z(7),
        fixed(),
        origin("topright"),
        pos(width() - 2, 0)
    ])

    let users = {};

    camScale(1);

    player.action(() => {
        player.angle = mousePos().angle(vec2(width() / 2, height() / 2)) + 90;
    });

    action(() => {
        camPos(player.pos);
    });
    
    initMult({ player, users, food, scoretxt, leaders });
});

scene("lose", (data) => {
    const killer = data.killer;
    const bestScore = data.bestScore;

    add([
        sprite("background", {
            width: width(),
            height: height(),
            tiled: true
        }),
    ]);

    add([
        text("you died", { size: 15 }),
        origin("center"),
        pos(width() / 2, 12)
    ]);

    add([
        text(choose(insults), { size: 4 }),
        origin("center"),
        pos(width() / 2, 23)
    ]);

    add([
        sprite("death", {
            width: 32,
            height: 30
        }),
        pos(width() / 2, 48),
        origin("center")
    ]);

    add([
        text("u were eaten by " + killer, { size: 8 }),
        origin("center"),
        pos(width() / 2, 71)
    ]);

    add([
        text("ur best score was " + bestScore, { size: 8 }),
        origin("center"),
        pos(width() / 2, 82)
    ]);

    add([
        sprite("retry", {
            width: 64,
            height: 32
        }),
        origin("center"),
        pos(width() / 2, height() - 32),
        area(),
        "retry"
    ]);

    clicks("retry", () => {
        go("menu");
    });
});

scene("how", () => {
    add([
        sprite("background", {
            width: width(),
            height: height(),
            tiled: true
        }),
    ]);

    add([
        text("how", { size: 15 }),
        origin("center"),
        pos(width() / 2, 12)
    ]);

    add([
        sprite("mouse", {
            width: 23,
            height: 30
        }),
        pos(width() / 2 - 62, 45),
        origin("center")
    ]);

    add([
        text("mouse to move", { size: 8 }),
        pos(width() / 2 + 36, 45),
        origin("center")
    ]);

    add([
        sprite("newfood", {
            width: 26,
            height: 26
        }),
        pos(width() / 2 - 88, 77),
        origin("center")
    ]);

    add([
        sprite("gameplay", {
            width: 36,
            height: 20
        }),
        pos(width() / 2 - 53, 77),
        origin("center")
    ]);

    add([
        text("eat smaller players\neat water\ndon't get eaten!", { size: 8 }),
        pos(width() / 2 + 36, 79),
        origin("center")
    ]);

    add([
        sprite("huge", {
            width: 32,
            height: 32
        }),
        pos(width() / 2 - 53, 116),
        origin("center")
    ]);

    add([
        text("Become Huge!!", { size: 8 }),
        pos(width() / 2 + 25, 119),
        origin("center")
    ]);

    add([
        sprite("start", {
            width: 32,
            height: 16
        }),
        pos(width() / 2, height() - 16),
        origin("center"),
        area(),
        "start"
    ]);

    clicks("start", () => {
        go("main");
    });
});

scene("menu", () => {
    let done = false;
    replit.getData("highscore").then(d => {
        highScore = d.highScore;
        bestPlayer = d.bestPlayer;
    });

    replit.getUserOrAuth(); // hopefully guarantee load
    
    add([
        sprite("background", {
            width: width(),
            height: height(),
            tiled: true
        }),
    ]);

    add([
        sprite("pompkinio", {
            width: 120,
            height: 32
        }),
        pos(width() / 2, 16),
        origin("center"),
    ]);

    // HighScoreText
    let hst = add([
        text("loading...", { size: 8 }),
        pos(width() / 2, 38),
        origin("center")
    ]);

    add([
        text("Get on here by dying!", { size: 5 }),
        pos(width() / 2, 44),
        origin("center")
    ])

    add([
        sprite("start", {
            width: 64,
            height: 32
        }),
        pos(width() / 2, 64),
        origin("center"),
        area(),
        "start"
    ]);

    add([
        sprite("how", {
            width: 64,
            height: 32
        }),
        pos(width() / 2, 98),
        origin("center"),
        area(),
        "how"
    ]);

    action(() => {
        if (bestPlayer && !done) {
            hst.text = `High Score: ${highScore} by ${bestPlayer}`;
            done = true;
        }
    });

    clicks("start", () => {
        go("main");
    });

    clicks("how", () => {
        go("how");
    });
});

go("menu");
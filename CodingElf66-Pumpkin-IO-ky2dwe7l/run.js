// kaboom dev server
const SINGLE_PLAYER = false;
const PROD = true;

const fs = require("fs");
const path = require("path");
const esbuild = require("esbuild");
const express = require("express");
const http = require("http");
const Database = require("@replit/database");
const multiplayer = require("./server/multiplayer");
const db = new Database();
const app = express();
const server = http.createServer(app);
const port = process.env.PORT || 8000;
let err = null;


// artifact
// db.set("highscore", { highScore: 1, bestPlayer: "Coder100" });


console.log("starting multiplayer...");
// start multiplayer server
multiplayer(server, db);

// build user game
function buildGame() {
    console.log("building...");
	const template = fs.readFileSync("template.html", "utf-8");
	let code = "";

	code += `<script src="/dist/helper.js"></script>\n`;
	code += `<script src="/dist/game.js"></script>\n`;

	try {
		// build user code
		esbuild.buildSync({
			bundle: true,
			sourcemap: true,
			target: "es6",
			keepNames: true,
            minify: true,
			logLevel: "silent",
			entryPoints: ["code/main.js"],
			outfile: "dist/game.js",
		});

		esbuild.buildSync({
			bundle: true,
			sourcemap: true,
			target: "es6",
			keepNames: true,
            minify: true,
			entryPoints: ["helper.ts"],
			outfile: "dist/helper.js",
		});

	} catch (e) {
		const loc = e.errors[0].location;
		err = {
			msg: e.errors[0].text,
			stack: [
				{
					line: loc.line,
					col: loc.column,
					file: loc.file,
				},
			],
		};
		let msg = "";
		msg += "<pre>";
		msg += `ERROR: ${err.msg}\n`;
		if (err.stack) {
			err.stack.forEach((trace) => {
				msg += `    -> ${trace.file}:${trace.line}:${trace.col}\n`;
			});
		}
		msg += "</pre>";
		fs.writeFileSync("dist/index.html", msg);
		return;
	}

	fs.writeFileSync("dist/index.html", template.replace("{{kaboom}}", code));
    console.log("done!");
}

if (PROD) buildGame();

console.log("creating views...");
// server stuff
app.use(express.json({ strict: false }));


// -- server --
app.get("/", (_, res) => {
	err = null;
	if (!PROD) buildGame();
	res.sendFile(path.join(__dirname, "/dist/index.html"));
	render();
});


// -- errors --
app.post("/error", (req, _) => {
	err = req.body;
	render();
});


// -- replauth --
app.get("/user", (req, res) => {
	if (req.headers["x-replit-user-id"]) {
		res.json({
			id: req.headers["x-replit-user-id"] || null,
			name: req.headers["x-replit-user-name"] || null,
		});
	} else {
		res.json(null);
	}
});


// -- database --
app.get("/db", async (_, res) => {
	try {
		res.json(await db.list());
	} catch (e) {
		res.sendStatus(500);
	}
});

app.get("/db/:item", async (req, res) => {
	try {
		res.json(await db.get(req.params.item));
	} catch (e) {
		res.sendStatus(500);
	}
});

/**
 * I don't trust the frontend, so unfortunately this gets removed.
 */
/*
app.delete("/db", async (req, res) => {
	try {
		await db.empty();
		res.sendStatus(200);
	} catch (e) {
		res.sendStatus(500);
	}
});

app.post("/db/:item", async (req, res) => {
	try {
		await db.set(req.params.item, req.body);
		res.sendStatus(200);
	} catch (e) {
		res.sendStatus(500);
	}
});

app.delete("/db/:item", async (req, res) => {
	try {
		await db.delete(req.params.item);
		res.sendStatus(200);
	} catch (e) {
		res.sendStatus(500);
	}
});
*/


// -- assets --
app.use("/sprites", express.static("sprites"));
app.use("/sounds", express.static("sounds"));
app.use("/code", express.static("code"));
app.use("/dist", express.static("dist"));


// -- listening --
console.log("listening...");
server.listen(port);


// -- utils --
// term output
const red = (msg) => `\x1b[31m${msg}\x1b[0m`;
const dim = (msg) => `\x1b[2m${msg}\x1b[0m`;

function render() {
	// kaboooooom!
    if (SINGLE_PLAYER) {
        process.stdout.write("\x1b[2J");
        process.stdout.write("\x1b[H");
        process.stdout.write("kaboom!\n");

        console.log(dim("\n(tip: Cmd + S in editor refresh webview)"));
    }

	// error stack trace
	if (err) {
		console.log("");
		console.error(red(`ERROR: ${err.msg}`));
		if (err.stack) {
			err.stack.forEach((trace) => {
				console.error(`    -> ${trace.file}:${trace.line}:${trace.col}`);
			});
		}
	}
}

const app = require("express")();
const cors = require("cors");
const objPath = require("object-path");
const { v4, validate } = require("uuid");

const Client = require("@replit/database");
const db = new Client();

function validateReq(req, res, next) {
  if (req.method == "POST" && req.headers["content-type"] != "application/json") return res.status(400).send({
    ok: "false",
    error: "Expected content-type to be JSON."
  });

  if (!validate(req.params.id)) return res.status(400).send({
    ok: false,
    error: "Invalid ID."
  });

  next();
}

function processKeys(p0) {
  return p0.slice(1).split("/").join(".");
}

async function handleChange(req, res) {
  const data = req.body;
  let keys = processKeys(req.params[0]);
  let id = req.params.id;

  try {
    let resp = (await db.get(id)) || {};
    if (!keys) resp = data;
    else objPath.set(resp, keys, data);
    await db.set(id, resp);
    res.send({ ok: true });
  } catch (error) {
    res.status(500).send({
      ok: false,
      error: error.toString()
    });
  }
}

app.options("*", cors());
app.use(cors());


app.use(require("express").static(__dirname + "/public"));
app.use(require("express").json());


app.get("/", (_, res) => {
  res.sendFile(__dirname + "/views/index.html");
});

app.get("/usage", (_, res) => {
  res.sendFile(__dirname + "/views/usage.html");
});


app.get("/generate-id", (_, res) => {
  res.end(v4());
});

app.get("/dash/:id", validateReq, (req, res) => {
  res.sendFile(__dirname + "/views/dash.html");
});


app.get("/db/:id*", validateReq, async (req, res) => {
  let keys = processKeys(req.params[0]);
  let id = req.params.id;

  try {
    const resp = (await db.get(id)) || {};
    let data = objPath.get(resp, keys, null);

    res.send({
      ok: true,
      data
    });
  } catch (error) {
    res.status(500).send({
      ok: false,
      error: error.toString()
    });
  }
});

app.post("/db/:id*", validateReq, handleChange);
app.put("/db/:id*", validateReq, handleChange);

app.delete("/db/:id*", validateReq, async (req, res) => {
  let keys = processKeys(req.params[0]);
  let id = req.params.id;

  try {
    // '' is falsey
    if (!keys) await db.delete(id);
    else {
      let resp = (await db.get(id)) || {};
      objPath.del(resp, keys);
      await db.set(id, resp);
    }

    res.send({ ok: true });
  } catch (error) {
    res.status(500).send({
      ok: false,
      error: error.toString()
    });
  }
});


app.listen(8080);
console.log("ready on localhost:8080");

// import Big from "bignumber.js";

// import { __dirname } from "./util.js";

// console.log(__dirname);

import fs from "node:fs/promises";

console.log(await fs.readFile(new URL("../x.txt", import.meta.url), "utf-8"));
await fs.appendFile(new URL("../x.txt", import.meta.url), " lol");
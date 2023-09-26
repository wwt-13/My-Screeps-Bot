import { createRequire } from "module";
const require = createRequire(import.meta.url);

const fs = require("fs");

fs.readFile("./.secret.json", "utf-8", (err, data) => {
    if (err) {
        console.log(err);
    } else {
        console.log(data);
    }
});

console.log(12312);

const test = require("../.secret.json")["main"];

console.log(test);

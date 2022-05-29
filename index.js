const fs = require("fs");
const path = require("path");
const json = fs.readFileSync(path.join(__dirname, "config.json"));

module.exports = JSON.parse(json);


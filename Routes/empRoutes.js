const empcon = require("../Controller/empController");

const express = require("express");
const route = express();
route.get("/", empcon.list);
route.post("/insert", empcon.insert);
route.post("/update", empcon.update);
route.delete("/delete", empcon.deletequery);
module.exports = route;

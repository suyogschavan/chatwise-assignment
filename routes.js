const express = require("express");
const routes = express.Router();
const controller = require("./controller");

routes.get("/", (req, res) => {
  return res.send("Hello world");
});

// routes.get("/h", controller.check);
routes.post("/createUser", controller.createUser);

module.exports = routes;

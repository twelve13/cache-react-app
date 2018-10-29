const config = require("./config");
const apiRouter = require ("./api");
const path = require("path");
const serverRender = require("./serverRender");
const express = require("express");
const server = express();
const mongoose = require("mongoose");
const models = require("./db/schema");


server.get("/", (req, res) => {

res.send("uggh")
});

server.get("/users", (req, res) => {
  	models.User.find({}).then(function(users){
		res.json(users)
	});
})

server.listen(config.port, config.host, () => {
	console.log(`Express listening on port ${config.port}`);
})
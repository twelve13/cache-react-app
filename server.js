import config from "./config";
import apiRouter from "./api";
import path from "path";
import serverRender from "./serverRender";
import express from "express";
import mongoose from "mongoose";
import models from "./db/schema";

const server = express();

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
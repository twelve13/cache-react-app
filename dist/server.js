"use strict";

var _config = require("./config");

var _config2 = _interopRequireDefault(_config);

var _api = require("./api");

var _api2 = _interopRequireDefault(_api);

var _path = require("path");

var _path2 = _interopRequireDefault(_path);

var _serverRender = require("./serverRender");

var _serverRender2 = _interopRequireDefault(_serverRender);

var _express = require("express");

var _express2 = _interopRequireDefault(_express);

var _mongoose = require("mongoose");

var _mongoose2 = _interopRequireDefault(_mongoose);

var _schema = require("./db/schema");

var _schema2 = _interopRequireDefault(_schema);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_express2.default.get("/", function (req, res) {

	res.send("uggh");
});

_express2.default.get("/users", function (req, res) {
	_schema2.default.User.find({}).then(function (users) {
		res.json(users);
	});
});

_express2.default.listen(_config2.default.port, _config2.default.host, function () {
	console.log("Express listening on port " + _config2.default.port);
});
import React from "react";
import ReactDOMServer from "react-dom/server";

import config from "./config";
import axios from "axios";

axios.get(`${config.serverUrl}/users`)
  .then(resp => {
  	console.log(resp.data)
  })
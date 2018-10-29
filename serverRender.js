//fetch the data from the api
const config = require("./config");
const axios = require("axios");

axios.get(`${config.serverUrl}/users`)
  .then(resp => {
  	console.log(resp.data)
  })
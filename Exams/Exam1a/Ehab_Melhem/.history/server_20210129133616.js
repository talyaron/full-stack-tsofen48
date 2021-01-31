const express = require("express");
const app = express();
var bodyParser = require("body-parser");

var uid = new Date().getTime().toString(36);

// app.use(express.static("test/build"));
app.use(bodyParser.json());

const port = process.env.PORT || 3002;

app.listen(port, function () {
  console.log("listening", port);
});
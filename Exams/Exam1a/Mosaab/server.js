const express = require("express");
const app = express();

app.use(express.static("React/build"));
var bodyParser = require("body-parser");

app.use(bodyParser.json());




const port = process.env.PORT || 3002;

app.listen(port, function () {
  console.log("listening", port);
});




const express = require("express");
const app = express();
var cookieParser = require('cookie-parser')


app.use(express.static("React/build"));
var bodyParser = require("body-parser");
app.use(cookieParser());
app.use(bodyParser.json());


const port = process.env.PORT || 3001;

app.listen(port, function () {
  console.log("listening", port);
});





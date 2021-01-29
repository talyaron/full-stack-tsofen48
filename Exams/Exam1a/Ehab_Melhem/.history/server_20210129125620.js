const express = require("express");
const app = express();
var bodyParser = require("body-parser");

// app.use(express.static("test/build"));
app.use(bodyParser.json());

app.get("/stam", (req, res) => {
  res.send({ messege: "it's work from server" });
});

const port = process.env.PORT || 3002;

app.listen(port, function () {
  console.log("listening", port);
});

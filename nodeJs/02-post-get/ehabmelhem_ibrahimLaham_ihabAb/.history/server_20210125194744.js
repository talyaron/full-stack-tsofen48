const express = require("express");
const app = express();
var bodyParser = require("body-parser");

app.use(express.static("public"));
app.use(bodyParser.json());
const images = [];
let id = 0;

// Ajax

//routes

app.get("/get-image", (req, res) => {
  res.send(images);
});

app.post("/add-score", (req, res) => {
  const { iD } = req.body;
  console.log(images.find((elm) => elm.id === iD));
});

app.post("/add-image", (req, res) => {
  const { src } = req.body;
  let str = id + "";
  images.push({ src: src, id: str, score: 0 });
  id++;
  console.log(src);
  res.send({ messeg: "success" });
});

const port = process.env.PORT || 3002;

app.listen(port, function () {
  console.log("listening", port);
});

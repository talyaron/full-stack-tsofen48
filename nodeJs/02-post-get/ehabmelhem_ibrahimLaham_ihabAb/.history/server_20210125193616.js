const express = require("express");
const app = express();
var bodyParser = require("body-parser");

app.use(express.static("public"));
app.use(bodyParser.json());
const images = [];
let id = 0;
const users = [
  { name: "Kilani", password: "222222222" },
  { name: "Yara", password: "111" },
  { name: "Ihab", password: "444444" },
];
// Ajax

//routes

app.get("/get-image", (req, res) => {
  res.send(images);
});

app.get("/add-score",(req,res)=>{
  const {id}=req
})

app.post("/add-image", (req, res) => {
  const { src } = req.body;
  let str = id + "";
  images.push({ src: src, id: str });
  id++;
  console.log(src);
  res.send({ messeg: "success" });
});

const port = process.env.PORT || 3002;

app.listen(port, function () {
  console.log("listening", port);
});

const express = require("express");
const app = express();
var cookieParser = require("cookie-parser");
const usersRouter = require("./router/users");

app.use(addcookie());

const user = {
  company: "בנק הפועלים",
  src:
    "https://instagram.fsdv3-1.fna.fbcdn.net/v/t51.2885-19/s150x150/125438654_373110843960499_4486130208098717291_n.jpg?_nc_ht=instagram.fsdv3-1.fna.fbcdn.net&_nc_ohc=NDUGeHQAneQAX8vOHAM&tp=1&oh=8500725c449de8a495c329240d76c4c5&oe=602E028F",
  name: "איהאב מלחם",
  role: "public",
};
const vote = {
  with: 80,
  without: 20,
};

const port = process.env.PORT || 3002;

function addcookie() {
  // res.cookie('role', 'admin', { maxAge: 90000000000, httpOnly: true });
}

app.get("/stam", (req, res) => {
  res.send({ messege: "hi from server" });
});
app.get("/vote", (req, res) => {
  res.send(vote);
});

app.get("/get-user", (req, res) => {
  res.send(user);
});
app.listen(port, function () {
  console.log("localhsot", port);
});

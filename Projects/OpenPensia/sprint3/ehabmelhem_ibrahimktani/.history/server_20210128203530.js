const express = require("express");
const bodyparser = require("body-parser");
var cookieParser = require("cookie-parser");
const usersRouter = require("./routers/users");
const app = express();
app.use(cookieParser());
app.use("/users", usersRouter);

const port = process.env.PORT || 3002;
app.use()
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

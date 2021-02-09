const express = require("express");
const bodyparser = require("body-parser");
var cookieParser = require("cookie-parser");
const usersRouter = require("./routers/user2");
const app = express();
app.use(addAuth);
app.use(cookieParser());
app.use("/voting", usersRouter);

function addAuth(req, res, next) {
  res.cookie("role", user.role, { maxAge: 90000000000, httpOnly: true });
  next();
}


const port = process.env.PORT || 3002;

app.listen(port, function () {
  console.log("localhsot", port);
});

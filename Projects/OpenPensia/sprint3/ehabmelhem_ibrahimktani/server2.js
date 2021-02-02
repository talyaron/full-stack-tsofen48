const express = require("express");
const bodyparser = require("body-parser");
var cookieParser = require("cookie-parser");
const usersRouter = require("./routers/user2");
const app = express();
app.use(cookieParser());
app.use("/voting", usersRouter);

const port = process.env.PORT || 3002;

app.listen(port, function () {
  console.log("localhsot", port);
});

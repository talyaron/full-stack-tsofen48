const express = require("express");
const bodyparser = require("body-parser");
var cookieParser = require("cookie-parser");
const usersRouter = require("./routers/users");
const app = express();
app.use(addAuth)
app.use(cookieParser());
app.use("/users", usersRouter);




const port = process.env.PORT || 3002;

app.listen(port, function () {
  console.log("localhsot", port);
});

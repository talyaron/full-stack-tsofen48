const express = require("express");
const bodyparser = require("body-parser");
const usersRouter = require("./routers/users");
const app = express();
app.use(cookieParser());
app.use("/users", usersRouter);

const port = process.env.PORT || 3002;

app.listen(port, function () {
  console.log("localhsot", port);
});

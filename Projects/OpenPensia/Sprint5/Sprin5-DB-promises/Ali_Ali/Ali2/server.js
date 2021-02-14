const express = require("express");
const voteRouter = require("./routers/vote");

const app = express();

// Router
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "X-Requested-With");
  next();
});

app.use("/voteData", voteRouter);

// Proxy
const port = process.env.PORT || 3002;
app.listen(port, function () {
  console.log("localhsot", port);
});

const express = require("express");
const voteRouter = require("./routers/vote");

const app = express();

// Router
app.use("/voteData", voteRouter);

// Proxy
const port = process.env.PORT || 3002;
app.listen(port, function () {
  console.log("localhsot", port);
});

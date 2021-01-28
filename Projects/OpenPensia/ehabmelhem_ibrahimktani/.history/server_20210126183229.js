const express = require("express");
const app = express();

const port = process.env.PORT || 3002;

app.get("/stam",(res))

app.listen(port, function () {
  console.log("localhsot", port);
});

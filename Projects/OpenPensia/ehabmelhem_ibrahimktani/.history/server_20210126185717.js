const express = require("express");
const app = express();


const user
const port = process.env.PORT || 3002;

app.get("/stam", (req, res) => {
  res.send({ messege: "hi from server" });
});

app.listen(port, function () {
  console.log("localhsot", port);
});

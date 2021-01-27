const express = require("express");
const app = express();


app.use(express.static("public"));






const port = process.env.PORT || 3002;

app.listen(port, function () {
  console.log("listening", port);
});

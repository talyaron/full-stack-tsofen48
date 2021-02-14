const express = require("express");
const app = express();
const router = require("./Router/user");
const bodyParser = require("body-parser");
app.use(bodyParser.json());
app.use("/user", router);
const port = process.env.PORT || 3002;
app.listen(port, () => {
  console.log("listen on port: ", port);
});

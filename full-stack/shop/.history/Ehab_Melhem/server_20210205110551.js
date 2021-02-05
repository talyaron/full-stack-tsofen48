const express = require("express");
var bodyParser = require("body-parser");
var cookieParser = require("cookie-parser");
const app = express();
app.use(bodyParser.json());
app.use(cookieParser());
const LoginRouter = require("./routs/LoginRouter");
app.use()

// app.use(express.static("client/build"));
// app.use('/company', companyRouter)

app.get("/get", (req, res) => {
  res.send({ messege: "Good" });
});

const port = process.env.PORT || 3002;
app.listen(port, () => {
  console.log(`\x1b[36m Server running on port ${port}  🔥`);
});

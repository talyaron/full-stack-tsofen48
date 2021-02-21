const express = require("express");
var bodyParser = require("body-parser");
var cookieParser = require("cookie-parser");
const app = express();
app.use(bodyParser.json());

//Cookies
app.use(cookieParser());
////////////////////////////////////////////
//Cors and Axios connection
var cors = require("cors");
app.use(cors()); // Use this after the variable declaration

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "X-Requested-With");
  next();
});

////////////////////////////////////////////
app.use(express.static("client/build"));

////////////////////////////////////////////
const bookRouter = require("./routes/book");
app.use("/book", bookRouter);

////////////////////////////////////////////

app.listen(3002, () => {
  console.log("listen on port 3002");
});

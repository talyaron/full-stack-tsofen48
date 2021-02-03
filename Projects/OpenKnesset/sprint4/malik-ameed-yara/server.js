const express = require("express");
var bodyParser = require("body-parser");
const reqRouter = require("./routes/reqRoute");
//app.use(express.static("../kenesset-clientside/build"));
app = express();
app.use(express.static("./client/build"));
app.use(bodyParser.json());
app.use("/get-requestitemslist", reqRouter);

// app.get("/get-requestitemslist", (req, res) => {
//   res.send(requestitemslist);
// });

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Listening on Port: ${PORT}`);
});

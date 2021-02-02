const express = require("express");
app = express();

var bodyParser = require("body-parser");
app.use(bodyParser.json());




const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
  console.log(`Listening on Port: ${PORT}`);
});

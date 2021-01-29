const express = require('express');
var bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

app.use(express.static('public'));

app.post("/", (req, res) => {
  res.send(users);
});
app.get("/", (req, res) => {
  console.log("test");
});

// Server run
const port = process.env.PORT || 3000;
app.listen(port, () => { console.log(`\x1b[36m Server running on port ${port}  🔥`) });
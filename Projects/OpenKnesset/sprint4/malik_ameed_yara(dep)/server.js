const express = require('express');
var bodyParser = require('body-parser');
//app.use(express.static("../kenesset-clientside/build"));
app = express();
app.use(express.static('knesset-clientside/build'));
app.use(bodyParser.json());
//app.use("/build", express.static("kenesset-clientside"));


//app.use("/static", express.static("public"));
//Now, you can load the files that are in the public directory from the /static path prefix.

const requestitemslist = [
  {
    toolname: "נאום בן דקה",
    subject: "סגירת מרכולים בבני ברק",
    requestTime: "21.11.20",
    requestedBy: "בין אדם אמיץ",
    fullInstruction: "דבר שמתאים לתא הזה",
    fReqContent: "blablablabalbalaaaa"
  },
  {
    toolname: "נאום בן שתי  דקה",
    subject: "דוחות של הפרת סגר",
    requestTime: "21.11.21",
    requestedBy: "בין אדם יותר יותר אמיץ",
    fullInstruction: "עוד דבר שמתאים לתא הזה",
    fReqContent: " בלבבלבלאאאלבלבלבלאאא בעברית",
  }
];

app.get('/get-requestitemslist', (req, res) => {
  res.send(requestitemslist);
});


const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Listening on Port: ${PORT}`);
})
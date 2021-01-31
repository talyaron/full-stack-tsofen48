const express = require('express');
const app = express();
var bodyParser = require('body-parser')


app.use(express.static('React/build'));
app.use(bodyParser.json())


const data = [
  {
    id : "1",
    name:"Ps4",
    img:"",
    desc:"ps4",
    price : "25",
    added : false
  },
  {
    id : "2",
    name:"Xbox",
    img:"",
    desc:"Xbox",
    price : "25",
    added : false
  },
  {
    id : "3",
    name:"Wii",
    img:"",
    desc:"Wii",
    price : "25",
    added : false

  },
  {
    id : "4",
    name:"Nitendo",
    img:"",
    desc:"Nitendo",
    price : "25",
    added : false
  },
  ]


app.post('/addNewGift', (req, res) => {
  
  let GiftId = Math.floor(Math.random() * 100);
  const url= ""
  let score = 0;
  Gifts.push("");
 
})

app.get('/get', (req, res) => {
  // res.send(GiftsList);
})


const port = process.env.PORT || 8080;

app.listen(port, function () {
  console.log('listening', port)
})

const express = require('express');
const app = express();
var bodyParser = require('body-parser')


app.use(express.static('rct/build'));

app.use(bodyParser.json())

const gifts = [
    {cost:25,img:'https://icons-for-free.com/iconfiles/png/512/christmas+gift+gift+box+present+icon-1320184382640199846.png'},
    {cost:40,img:'https://icons-for-free.com/iconfiles/png/512/christmas+gift+gift+box+present+icon-1320184382640199846.png'},
    {cost:30,img:'https://icons-for-free.com/iconfiles/png/512/christmas+gift+gift+box+present+icon-1320184382640199846.png'},
    {cost:40,img:'https://icons-for-free.com/iconfiles/png/512/christmas+gift+gift+box+present+icon-1320184382640199846.png'},

  ]

  const users = [{id:1,money:100}];
  app.get('/get-gifts', (req, res) => {

    res.send(gifts);
  })

  app.get('/get-user-money', (req, res) => {

    app.post('/sentMoney', (req, res) => {

      const updateMoney = req.body.userMoney;
      users[0].money=updateMoney;
      console.log(users[0].money);
  
  
  })

    res.send(users[0].cost);
  })

const port = process.env.PORT || 3002;

app.listen(port, function () {
  console.log('listening', port)
})
const express = require('express');
const app = express();
var bodyParser = require('body-parser')

app.use(bodyParser.json())

let gifts = [{ number: '1', src: 'https://i.pinimg.com/236x/e7/6c/a4/e76ca44f19cf677a848ed5423e250232--large-gift-boxes-birthday-clipart.jpg', price: '25' },
{ number: '2', src: 'https://i.pinimg.com/236x/e7/6c/a4/e76ca44f19cf677a848ed5423e250232--large-gift-boxes-birthday-clipart.jpg', price: '40' },
{ number: '3', src: 'https://i.pinimg.com/236x/e7/6c/a4/e76ca44f19cf677a848ed5423e250232--large-gift-boxes-birthday-clipart.jpg', price: '30' },
{ number: '4', src: 'https://i.pinimg.com/236x/e7/6c/a4/e76ca44f19cf677a848ed5423e250232--large-gift-boxes-birthday-clipart.jpg', price: '40' }]

let reminedGifts = [];

app.get('/get-gifts', (req,res) =>{
  res.send(gifts);
})

app.post('/add-gift', (req,res) =>{
  let number = req.body.number;
  //console.log(req.body)
  console.log(number)
  gifts = gifts.filter(gift => gift.number != number);
  console.log(gifts)
  res.send(number);

})



const port = process.env.PORT || 3008
app.listen(port, function () {
  console.log('listening', port)
})



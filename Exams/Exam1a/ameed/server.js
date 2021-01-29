const express=require('express')
var bodyParser = require('body-parser')
const app = express();

var cookieParser = require('cookie-parser');
app.use(cookieParser())

app.use(express.static('rct/build'));
app.use(bodyParser.json())


const gifts = [
    {id:1 , logo: 'https://img.favpng.com/24/17/21/gift-card-business-christmas-gift-png-favpng-jubZcNtC9eD1CfFbTByYY0RX1.jpg', price: 45, button: 'add' },
    {id:2 , logo: 'https://img.favpng.com/24/17/21/gift-card-business-christmas-gift-png-favpng-jubZcNtC9eD1CfFbTByYY0RX1.jpg', price: 40 , button: 'add' },
    {id:3 , logo: 'https://img.favpng.com/24/17/21/gift-card-business-christmas-gift-png-favpng-jubZcNtC9eD1CfFbTByYY0RX1.jpg', price: 30, button: 'add' },
    {id:4 , logo: 'https://img.favpng.com/24/17/21/gift-card-business-christmas-gift-png-favpng-jubZcNtC9eD1CfFbTByYY0RX1.jpg', price: 40, button: 'add' }
   
  ]
  let totoalPrice= 'total sum available : ' + 100 + '$';

  app.get('/get-gifts',(req, res,next)=>{
    res.send(gifts);
    next();
  })
  app.get('/get-totalprice',(req, res)=>{
    res.send(totoalPrice);
  })


const port = process.env.PORT || 3000;

// app.listen(port,function(){
//     console.log('listening',port)  
// })
app.listen(port, () => `Server running on port ${port} 🔥`);



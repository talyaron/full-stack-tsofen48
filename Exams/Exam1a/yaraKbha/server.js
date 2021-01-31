const express = require('express');
const app = express();
var bodyParser = require('body-parser')
var uniqid = require('uniqid');
var cookieParser = require('cookie-parser');
app.use(cookieParser())
app.use(express.static('rct/build'));
app.use(bodyParser.json())
app.use(createID);
console.log(uniqid());


const gifts=[
{price:'25'},
{price:'40'},
{price:'30'},
{price:'20'}
]
const totalprice=100;
app.get('/get-gifts',(req, res)=>{
    res.send(gifts)
  })

app.get('/get-price',(req,res)=>{
    res.send(totalprice)
})

app.post('/totalprice',(req,res)=>{
    const { price } = req.body;
    totalprice-=price;
})

function createID(req,res,next){
    res.cookie('role', uniqid(), { maxAge: 90000000000, httpOnly: true });
    next();
}
const port = process.env.POST || 3000
app.listen(port, () => { console.log(`\x1b[36m Server running on port ${port}  🔥`) });
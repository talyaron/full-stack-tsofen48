const express=require('express')
var bodyParser = require('body-parser')
var cookieParser = require('cookie-parser');
const app = express();
app.use(bodyParser.json());
app.use(cookieParser())


app.use(express.static('client/build'));

const gifts = [
  {id:1,cost:25,img:'https://icons-for-free.com/iconfiles/png/512/christmas+gift+gift+box+present+icon-1320184382640199846.png',available:true},
  {id:2,cost:40,img:'https://icons-for-free.com/iconfiles/png/512/christmas+gift+gift+box+present+icon-1320184382640199846.png',available:true},
  {id:3,cost:30,img:'https://icons-for-free.com/iconfiles/png/512/christmas+gift+gift+box+present+icon-1320184382640199846.png',available:true},
  {id:4,cost:40,img:'https://icons-for-free.com/iconfiles/png/512/christmas+gift+gift+box+present+icon-1320184382640199846.png',available:true},
]

app.get('/get-gifts', (req, res) => {

  // currentUser.id = randomId();
  // currentUser.money = 100;
  // res.cookie('user',currentUser.id, { maxAge: 90000000000, httpOnly: true });
  console.log("////////////");
  res.send(gifts);
})


const port = process.env.PORT || 3002;
app.listen(port, () => { console.log(`\x1b[36m Server running on port ${port}  🔥`) });




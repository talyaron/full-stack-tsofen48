const express=require('express')
//var bodyParser = require('body-parser')
const app = express();
var cookieParser = require('cookie-parser');
const contentRouter = require('./routs/content');
const headerRouter = require('./routs/header');
const navRouter = require('./routs/nav');



app.use(cookieParser())

app.use(express.static('client/build'));
//app.use(bodyParser.json())

app.use(check);
app.use('/header', headerRouter)
app.use('/content', contentRouter)
app.use('/nav', navRouter)



function check(req,res,next){

//   res.cookie('admin', 'admin', { maxAge: 9000000, httpOnly: true });

  console.log(req.cookies)
  
  
  if (req.cookies.admin 
    === 'admin') {
    
    
   res.authorized = true;
    //
    
     next();
    }
  else {
    res.authorized=false;
  res.send({ok:false});}
  
  
}
 


const port = process.env.PORT || 3000;
app.listen(port, () => { console.log(`\x1b[36m Server running on port ${port}  🔥`) });




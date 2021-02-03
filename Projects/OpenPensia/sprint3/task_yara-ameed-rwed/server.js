const express=require('express')
//var bodyParser = require('body-parser')
const app = express();
var cookieParser = require('cookie-parser');
const companyRouter = require('./routs/company');

app.use(cookieParser())

app.use(express.static('rct/build'));
//app.use(bodyParser.json())

// app.use(check);
app.use('/company', companyRouter)


function check(req,res,next){

  // res.cookie('public', 'public', { maxAge: 9000000, httpOnly: true });

  console.log(req.cookies)
  
  
  if (req.cookies.public 
    === 'public') {
    
    
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
/*
app.listen(port,function(){
    console.log('listening',port)
})
*/



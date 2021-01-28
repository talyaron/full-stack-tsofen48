const express = require("express");
const app = express();
var cors = require("cors");
var cookieParser = require("cookie-parser");
const port = process.env.PORT;
let articlesAboutDirector = require("./routes/article");


let admins=[{userName:"rema",role:"admin"}];

app.use(cookieParser());

app.use(cors());
app.use(express.json());
app.get("/",userType, function (req, res) {

  
  res.send({articlesAboutDirector,isAdmin:true});
});


function userType (req,res,next){
  console.log('cookie',req.cookie);
  let userName = req.query.userName;
  let userIsAdmin = admins.find(user =>{
    return user.userName == userName;
  })
  let isAdmin = false;

  if(userIsAdmin){
    isAdmin = true;
    res.cookie('role', userIsAdmin.role, { maxAge: 90000000000, httpOnly: true });
    next()
  }else{
    res.cookie('role', 'public', { maxAge: 90000000000, httpOnly: true });
  }
  res.send({isAdmin})

}

app.listen(port || 3000);

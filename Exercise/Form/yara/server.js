const express = require('express');
const app = express();
var bodyParser = require('body-parser')


app.use(express.static('client/build'));
app.use(bodyParser.json());
const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://yara:pThnRLd7LCOHDuOs@cluster0.zkz36.mongodb.net/test', {useNewUrlParser: true, useUnifiedTopology: true});
const db = mongoose.connection;
const Userschema = new mongoose.Schema({
    name: String,
     password:String,
  });
  
const Quetionschema=new mongoose.Schema({
    quetion:String,
})
  const User = mongoose.model("Userschema", Userschema);
  const Questions=mongoose.model("Quetionschema",Quetionschema);

//const kitty = new Cat({ name: 'Kitti', password:'jksdhfjds' }); //instance

//kitty.save().then(() => console.log('kitti was saved to DB')); //save

app.post('/Login',(req,res)=>{
    const {user,password}=req.body;
    //const {password}=req.body;
    
    User.find( { name: user,password:password } ).then(row=>{
        if(row.length>0){
            console.log("success")
            res.send({ok:"true"});
        }
        res.send({ok:"false"});
        
    })
    
    /*
    if(myCursor.password===password){
        res.send({ok:"true"});
    }
    */
    console.log(user,password);
})
 app.post('/SignUp',(req,res)=>{
      const {newuser,newpassword}=req.body;
      //const {password}=req.body;
      console.log(newuser,newpassword);
      const Newuser=new User({name:newuser,password:newpassword});
      Newuser.save().then(()=>console.log("ok"));
      
 })

 app.post('/AddQuestions',(req,res)=>{
    const {questions}=req.body;
    //const {password}=req.body;
    //console.log(Question);
    questions.array.forEach(element => {
        const NewQusetion=new Questions({quetion: element});
    NewQusetion.save().then(()=>console.log("ok"));
    });
    
    res.send({ok:"true"});
    
})
 


 
app.listen(3200, ()=>{console.log('listen on port 3200')});
const express = require('express');
const app = express();
var bodyParser = require('body-parser')

app.use(bodyParser.json())



const usersRouter = require("./users/usersRouter");

app.use('/users', usersRouter);



// kitty .save().then(() => console.log('kitti was saved to DB')); //save

 


 
app.listen(3002, ()=>{console.log('listen on port 3002')});
const express = require('express');
const app = express();



 
app.get('/get-users',  (req, res)=> {
  res.send({ok:true})
})

app.use(express.static('public'));

 
app.listen(3000, ()=>{console.log('listen on port 3000')});
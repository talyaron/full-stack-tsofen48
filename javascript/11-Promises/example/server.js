const express = require('express');
const app = express();


app.use(express.static('public'));

answers=[
    {number:42, answer:'This is the answer to all your questions'},
    {number:12, answer:'Synderla'}
]

 
app.get('/get-best-answer',  (req, res)=> {
  res.send({ok:true, number:42})
})

app.get('/get-answer', (req, res)=>{

    const {number} = req.query;

    console.log(number);

    let answer = answers.find(answer=>answer.number == number);
    console.log(answer)
    res.send({ok:"got the answer",answer: answer.answer})

})



 
app.listen(3000, ()=>{console.log('listen on port 3000')});
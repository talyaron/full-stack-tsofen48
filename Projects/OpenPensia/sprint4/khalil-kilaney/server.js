const express=require('express')
var bodyParser = require('body-parser')
const app = express();


app.use(express.static('client/build'));
app.use(bodyParser.json())

const articles = [
    { title: 'כתבה בynet', subtitle: 'כתבה על שיפור מכירות ובמחסני חשמל', url: '#'},
    { title: 'כתבה בynet', subtitle: 'כתבה על שיפור מכירות ובמחסני חשמל', url: '#'},
    { title: 'כתבה בynet', subtitle: 'כתבה על שיפור מכירות ובמחסני חשמל', url: '#'},
    { title: 'כתבה בynet', subtitle: 'כתבה על שיפור מכירות ובמחסני חשמל', url: '#'},
    { title: 'כתבה בynet', subtitle: 'כתבה על שיפור מכירות ובמחסני חשמל', url: '#'},
    { title: 'כתבה בynet', subtitle: 'כתבה על שיפור מכירות ובמחסני חשמל', url: '#'}
  ]

app.get('/get-articles-list',(req, res)=>{
    res.send(votes)
  })


const port = process.env.PORT || 3000;

app.listen(port,function(){
    console.log('listening',port)
})



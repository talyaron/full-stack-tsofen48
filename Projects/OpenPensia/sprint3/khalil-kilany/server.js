const express=require('express')
var bodyParser = require('body-parser')
const app = express();


app.use(express.static('khalil/build'));
app.use(bodyParser.json())

const votes = [
    { title: 'מי יהיו הדרקטורים בנק הפועלים', status: 'מחכים לתשובה'},
    { title: 'מי יהיו הדרקטורים בנק הפועלים', status: 'מחכים לתשובה'},
    { title: 'מי יהיו הדרקטורים בנק הפועלים', status: 'מחכים לתשובה'},
    { title: 'מי יהיו הדרקטורים בנק הפועלים', status: 'מחכים לתשובה'},
    { title: 'מי יהיו הדרקטורים בנק הפועלים', status: 'מחכים לתשובה'},
    { title: 'מי יהיו הדרקטורים בנק הפועלים', status: 'מחכים לתשובה'}
  ]

app.get('/get-votes-list',(req, res)=>{
    res.send(votes)
  })


const port = process.env.PORT || 3000;

app.listen(port,function(){
    console.log('listening',port)
})



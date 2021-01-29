const express=require('express')
var bodyParser = require('body-parser')
const app = express();


app.use(express.static('rct/build'));
app.use(bodyParser.json())


const port = process.env.PORT || 3000;

// app.listen(port,function(){
//     console.log('listening',port)  
// })
app.listen(port, () => `Server running on port ${port} 🔥`);



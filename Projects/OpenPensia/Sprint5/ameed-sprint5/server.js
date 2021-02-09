const express=require('express')
//var bodyParser = require('body-parser')
const app = express();
var cookieParser = require('cookie-parser');

const votsRouter = require('./routs/vots');

app.use(cookieParser())
app.use(express.static('client/build'));
//app.use(bodyParser.json())

app.use('/vots', votsRouter)


// app.post('/add-vote', (req, res) => {
//     const { vote }= req.body.name;
      
//       const index = votes.findIndex(name => name.name === name);
//     console.log(index);
//       if (index === -1) {
  
//         names.push({name: name })
//       }
    
//       res.send({ ok: true })
//   })



  
  
const port = process.env.PORT || 3002;
app.listen(port, () => { console.log(`\x1b[36m Server running on port ${port}  🔥`) });




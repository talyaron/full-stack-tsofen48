const express=require('express')
var bodyParser = require('body-parser')
var cookieParser = require('cookie-parser');
const app = express();
app.use(bodyParser.json());
app.use(cookieParser())
const companyRouter = require('./routs/company');

app.use(express.static('client/build'));
// app.use('/company', companyRouter)

//DB Conn
const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://Semat:cacWBcNOZTuu1pEB@cluster0.7w7pv.mongodb.net/test', { useNewUrlParser: true, useUnifiedTopology: true });

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open',  ()=> {
   console.log('we are connected to DB')
});


const companyschema = new mongoose.Schema({
  logo: String,
  name: String,
  par: String,
});

const company = mongoose.model("companyschema", companyschema);


const newcomp = new company({
logo: 'https://is3-ssl.mzstatic.com/image/thumb/Purple114/v4/7e/d9/c7/7ed9c7ec-7022-b21e-a391-10cfe7cf14ef/source/256x256bb.jpg',
name: 'פרשמרקט', par: 'קמעונאות מזון' });

  // newcomp.save().then(()=>console.log('saved to DB'));


//read
app.get("/get-companies", (req, res) => {
  

    try {
        //get from DB
        company.find({}).then(docs => {
            res.send({ companies: docs });
        })
    } catch (e) {
        res.send({ error: e })
    }
});


const port = process.env.PORT || 3002;
app.listen(port, () => { console.log(`\x1b[36m Server running on port ${port}  🔥`) });




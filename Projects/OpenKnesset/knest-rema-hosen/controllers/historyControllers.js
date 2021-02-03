const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://rema06:6m30hsL0v0jsdnXh@cluster0.eua4t.mongodb.net/open-knest', { useNewUrlParser: true, useUnifiedTopology: true });

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open',  ()=> {
   console.log('we are connected to DB')
});


const HistorySchema = new mongoose.Schema({
    date: String
  }); 
  
  const history = mongoose.model('HistorySchema', HistorySchema); 

  // const historyItem = new history({ date: '10.7.19  הצעה לסדר היום בנושא: "הצורך הדחוף לבחון את המחדלים..'});
  // historyItem.save().then(()=>console.log('saved to DB'));

// handlers
exports.getHISTORY = (req, res) => {
  try {
    //get from DB
    history.find({}).then((HISTORY) => {
      res.send({ HISTORY: HISTORY});
    });
  } catch (e) {
    res.send({ error: e });
  }
  };

 exports.getHISTORYById = (req, res) => {
   res.send({
     status: "this functions is not ready yet - it's under constructions",
     message: "This route functionality is not yet defined!",
   });
 };
 exports.createHISTORY = (req, res) => {
   res.send({
     status: "this functions is not ready yet - it's under constructions",
     message: "This route functionality is not yet defined!",
   });
 };
 exports.updateHISTORY = (req, res) => {
   res.send({
     status: "this functions is not ready yet - it's under constructions",
     message: "This route functionality is not yet defined!",
   });
 };
 exports.deleteHISTORY = (req, res) => {
   res.send({
     status: "this functions is not ready yet - it's under constructions",
     message: "This route functionality is not yet defined!",
   });
 };
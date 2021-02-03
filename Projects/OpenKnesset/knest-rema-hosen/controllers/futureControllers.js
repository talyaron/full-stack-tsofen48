

const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://rema06:6m30hsL0v0jsdnXh@cluster0.eua4t.mongodb.net/open-knest', { useNewUrlParser: true, useUnifiedTopology: true });

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open',  ()=> {
   console.log('we are connected to DB')
});


const FutureSchema = new mongoose.Schema({
    date: String
  }); 
  
  const future = mongoose.model('FutureSchema', FutureSchema); 

  // const futureItem = new future({ date: '22.8.19 הצעה לסדר היום בנושא: "תקצוב עמותות העוסקת בהנגשת מידע פרלמנטרי"' });
  // futureItem.save().then(()=>console.log('saved to DB'));

// let FUTURE=[
//      '22.8.19 הצעה לסדר היום בנושא: "תקצוב עמותות העוסקת בהנגשת מידע פרלמנטרי"'
// ]


// handlers
exports.getFUTURE = (req, res) => {
  try {
    //get from DB
    future.find({}).then((FUTURE) => {
      res.send({ FUTURE: FUTURE});
    });
  } catch (e) {
    res.send({ error: e });
  }
   };

  exports.getFUTUREById = (req, res) => {
    res.send({
      status: "this functions is not ready yet - it's under constructions",
      message: "This route functionality is not yet defined!",
    });
  };
  exports.createFUTURE = (req, res) => {
    res.send({
      status: "this functions is not ready yet - it's under constructions",
      message: "This route functionality is not yet defined!",
    });
  };
  exports.updateFUTURE = (req, res) => {
    res.send({
      status: "this functions is not ready yet - it's under constructions",
      message: "This route functionality is not yet defined!",
    });
  };
  exports.deleteFUTURE = (req, res) => {
    res.send({
      status: "this functions is not ready yet - it's under constructions",
      message: "This route functionality is not yet defined!",
    });
  };
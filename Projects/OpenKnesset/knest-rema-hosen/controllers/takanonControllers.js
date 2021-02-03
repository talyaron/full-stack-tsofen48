const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://rema06:6m30hsL0v0jsdnXh@cluster0.eua4t.mongodb.net/open-knest', { useNewUrlParser: true, useUnifiedTopology: true });

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open',  ()=> {
   console.log('we are connected to DB')
});


const TakanonSchema = new mongoose.Schema({
    takanon: String,
    text: String
  }); 
  
  const takanon = mongoose.model('TakanonSchema', TakanonSchema); 

  // const takanonItem = new takanon({ takanon: 'כינוס הכנסת בתקופת הפוגרה(תיקונים מספר 107,121 ו-128)',text:'21. (א)  25 חברי הכנסת הדורשים לכנס את הכנסת בתקופת הפגרה , בהתאם לסעיף 9(ב) לחוק הכנסת , רשאים לפרט בדרישתם נושא אחד או שני נושאים ; יושב ראש הכנסת יעמיד את ..'});
  // takanonItem.save().then(()=>console.log('saved to DB'));

// let TAKANON={takanon:'כינוס הכנסת בתקופת הפוגרה(תיקונים מספר 107,121 ו-128)',text:'21. (א)  25 חברי הכנסת הדורשים לכנס את הכנסת בתקופת הפגרה , בהתאם לסעיף 9(ב) לחוק הכנסת , רשאים לפרט בדרישתם נושא אחד או שני נושאים ; יושב ראש הכנסת יעמיד את ..'};

// handlers
exports.getTAKANON = (req, res) => {
  try {
    //get from DB
    takanon.find({}).then((TAKANON) => {
      res.send({ TAKANON: TAKANON});
    });
  } catch (e) {
    res.send({ error: e });
  }
   };

  exports.getTAKANONById = (req, res) => {
    res.send({
      status: "this functions is not ready yet - it's under constructions",
      message: "This route functionality is not yet defined!",
    });
  };
  exports.createTAKANON = (req, res) => {
    res.send({
      status: "this functions is not ready yet - it's under constructions",
      message: "This route functionality is not yet defined!",
    });
  };
  exports.updateTAKANON = (req, res) => {
    res.send({
      status: "this functions is not ready yet - it's under constructions",
      message: "This route functionality is not yet defined!",
    });
  };
  exports.deleteTAKANON = (req, res) => {
    res.send({
      status: "this functions is not ready yet - it's under constructions",
      message: "This route functionality is not yet defined!",
    });
  };
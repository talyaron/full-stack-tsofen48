const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://rema06:6m30hsL0v0jsdnXh@cluster0.eua4t.mongodb.net/open-knest', { useNewUrlParser: true, useUnifiedTopology: true });

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open',  ()=> {
   console.log('we are connected to DB')
});


const ToolSchema = new mongoose.Schema({
    title: String,
    text: String
  }); 
  
  const tool = mongoose.model('ToolSchema', ToolSchema); 

//   const toolItem = new tool({ title: 'כונוס הכנסת בזמן הפגרה',text:'הגשת דרישה ל יו"ר הכנסת על ידי 25 ח"כיים לכינוס  מליאה מיוחדת שתדון ב הצעה לסדר היום.'});
//   toolItem.save().then(()=>console.log('saved to DB'));

// handlers
  exports.getTOOL = (req, res) => {
    try {
      //get from DB
      tool.find({}).then((TOOL) => {
        res.send({ TOOL: TOOL});
      });
    } catch (e) {
      res.send({ error: e });
    }
   };

  exports.getTOOLById = (req, res) => {
    res.send({
      status: "this functions is not ready yet - it's under constructions",
      message: "This route functionality is not yet defined!",
    });
  };
  exports.createTOOL = (req, res) => {
    res.send({
      status: "this functions is not ready yet - it's under constructions",
      message: "This route functionality is not yet defined!",
    });
  };
  exports.updateTOOL = (req, res) => {
    res.send({
      status: "this functions is not ready yet - it's under constructions",
      message: "This route functionality is not yet defined!",
    });
  };
  exports.deleteTOOL = (req, res) => {
    res.send({
      status: "this functions is not ready yet - it's under constructions",
      message: "This route functionality is not yet defined!",
    });
  };
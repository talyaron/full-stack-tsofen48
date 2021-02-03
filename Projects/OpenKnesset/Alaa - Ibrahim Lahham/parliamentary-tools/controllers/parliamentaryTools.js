
const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://ibrahim:YcJPicadRjfAzJKj@cluster0.khflh.mongodb.net/test', { useNewUrlParser: true, useUnifiedTopology: true });

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
  console.log('we are connected to DB')
});


const Kittyschema = new mongoose.Schema({
  title: String,
  content: String,
 
});


const Kitten = mongoose.model('kittyschema', Kittyschema);
const parliamentaryTools = [
    {
     title: "שאילה רגילה",
      content: "שאלה לשר על עניין שהתחום תפקדיו ,אותה מפנה חבר כנסת , שאינו שר או סגן שר . התשובה לשאילתה תינתן במליאת הכנסת . על השר להשיב תוך 21 ימים ."
    },
    {
      title: "נאום בן דקה",
      content: "נאום של חבר כנסת , בכל נושא ובאורך של כדקה (תלוי בטוב ליבו של יו'ר הכנסת או סגן יו'ר הכנסת המנהלים את הישיבה בפועל)"
    },
    {
      title: "כינוס הכנסת בזמן הפגרה",
      content: "הגשת דרישה ליו'ר הכנסת על ידי 25 ח'כים לכינוס מליאה מיוחדת שתדון בהצעה לסדר היום"
    }
  ];

  exports.getParliamentaryTools =  (req, res) => {
    console.log("in controller!!!!")
    try {
      //get from DB
      Kitten.find({}).then(docs => {

    //    console.log( { kittens: docs });
          res.send( { success:true,err:"not found!",parliamentaryTools: docs });
      })
  } catch (e) {
    console.log("in ERROR Finindg!!")
      res.send({ error: e })
  }


    //res.send({ success:true,err:null,info:{parliamentaryTools} });


};
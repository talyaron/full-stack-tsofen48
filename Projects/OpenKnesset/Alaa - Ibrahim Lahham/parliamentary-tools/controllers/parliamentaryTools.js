
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
const ParliamentaryTools = mongoose.model('kittyschema', Kittyschema);

  exports.getParliamentaryTools =  (req, res) => {
    console.log("in controller!!!!")
    try {
      //get from DB
      ParliamentaryTools.find({}).then(docs => {

    //    console.log( { kittens: docs });
          res.send( { success:true,err:"not found!",parliamentaryTools: docs });
      })
  } catch (e) {
    console.log("in ERROR Finindg!!")
      res.send({ error: e })
  }


    //res.send({ success:true,err:null,info:{parliamentaryTools} });


};
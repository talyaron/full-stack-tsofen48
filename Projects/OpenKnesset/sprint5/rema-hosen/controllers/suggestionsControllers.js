
const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://rema06:6m30hsL0v0jsdnXh@cluster0.eua4t.mongodb.net/open-knest', { useNewUrlParser: true, useUnifiedTopology: true });

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open',  ()=> {
   console.log('we are connected to DB')
});


const SuggestionSchema = new mongoose.Schema({
  subject: String,
  explanation : String,
  member :[String]
  }); 
  
  const suggestion = mongoose.model('SuggestionSchema', SuggestionSchema); 

  // const suggestionToAdd = new suggestion({    
  // subject:'אלימות במגזר הערבי',
  // explanation:'....',
  // member:'רימה'});

  // suggestionToAdd.save().then(()=>console.log('saved to DB'));

let randomId = () => "_" + Math.random().toString(36).substr(2, 9);

// handlers
exports.getSuggestions = (req, res) => {
  try {
    //get from DB
    suggestion.find({}).then((suggestions) => {
      res.send({ Suggestions: suggestions});
    });
  } catch (e) {
    res.send({ error: e });
  }
 
  };

 exports.getSuggestionsById = (req, res) => {
   res.send({
     status: "this functions is not ready yet - it's under constructions",
     message: "This route functionality is not yet defined!",
   });
 };
 exports.createSuggestions = (req, res) => {
   
  let knestMembers = [];

  req.body.suggestion.member.forEach(member => {

    knestMembers.push(member?.value);
  });
  const suggestionToAdd = new suggestion({    
    subject:req.body.suggestion.subject,
    explanation:req.body.suggestion.explanation,
    member:knestMembers});

  suggestionToAdd.save().then(()=>console.log('saved to DB'));
 };
 exports.updateSuggestions = (req, res) => {
   res.send({
     status: "this functions is not ready yet - it's under constructions",
     message: "This route functionality is not yet defined!",
   });
 };
 exports.deleteSuggestions = (req, res) => {
   res.send({
     status: "this functions is not ready yet - it's under constructions",
     message: "This route functionality is not yet defined!",
   });
 };
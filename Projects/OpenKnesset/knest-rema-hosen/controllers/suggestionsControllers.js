
let randomId = () => "_" + Math.random().toString(36).substr(2, 9);

let suggestions=[
   {
       id:randomId(),
       subject:'אלימות במגזר הערבי',
       explanation:'....',
       member:'רימה'
   }
]


// handlers
exports.getSuggestions = (req, res) => {
  
   res.send({ Suggestions: suggestions});
 
  };

 exports.getSuggestionsById = (req, res) => {
   res.send({
     status: "this functions is not ready yet - it's under constructions",
     message: "This route functionality is not yet defined!",
   });
 };
 exports.createSuggestions = (req, res) => {
   
  let itemToAdd = {
    id:randomId(),
    subject:req.body.suggestion.subject,
    explanation:req.body.suggestion.explanation,
    member:req.body.suggestion.member};
    suggestions.push(itemToAdd);
  
   res.send(suggestions);
   

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
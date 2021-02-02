// let randomId = () => "_" + Math.random().toString(36).substr(2, 9);

let HISTORY=[
    '15.7.19 הצעה לסדר היום בנושא: "הכישלון הלאומי המתמשך בקליטת יהודי אתיופיה"','10.7.19  הצעה לסדר היום בנושא: "הצורך הדחוף לבחון את המחדלים..'
];


// handlers
exports.getHISTORY = (req, res) => {

   res.send({ HISTORY: HISTORY});
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
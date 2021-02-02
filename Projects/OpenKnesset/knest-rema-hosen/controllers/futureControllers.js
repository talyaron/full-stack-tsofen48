// let randomId = () => "_" + Math.random().toString(36).substr(2, 9);

let FUTURE=[
     '22.8.19 הצעה לסדר היום בנושא: "תקצוב עמותות העוסקת בהנגשת מידע פרלמנטרי"'
]


// handlers
exports.getFUTURE = (req, res) => {

    res.send({ FUTURE: FUTURE});
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
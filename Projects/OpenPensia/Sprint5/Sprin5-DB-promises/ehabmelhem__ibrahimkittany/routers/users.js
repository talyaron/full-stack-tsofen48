const userControler = require("../controlers/user");
const router = require("express").Router();
router.get("/get-user",addAuth, userControler.sendUser);
router.get("/vote", userControler.sendVote);
module.exports = router;

function addAuth(req, res, next) {
    Header__model.findOne({ name: "איהאב מלחם" }).then((doc) => {
      console.log(doc)
      res.cookie("role", doc.role, { maxAge: 90000000000, httpOnly: true });
    });
    console.log("Aaaaaa");
    next();
  }

const userControler = require("../controlers/user2");
const router = require("express").Router();
// router.get("/get-header-information", userControler.sendHeaderInformation);
// router.get("/get-director-information", userControler.sendDirectorInformation);
// router.get("/check-user", userControler.checkUser);
router.post("/register", userControler.register);
router.post("/login", userControler.login);    
router.post("/questions", userControler.questions); 
module.exports = router;

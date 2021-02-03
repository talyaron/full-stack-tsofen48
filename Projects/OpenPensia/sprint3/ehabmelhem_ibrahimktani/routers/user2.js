const userControler = require("../controlers/user2");
const router = require("express").Router();
router.get("/get-header-information", userControler.sendHeaderInformation);
router.get("/get-director-information", userControler.sendDirectorInformation);
router.get("/check-user", userControler.checkUser);
module.exports = router;

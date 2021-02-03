const userControler = require("../controlers/user");
const router = require("express").Router();
router.get("/get-user", userControler.sendUser);
router.get("/vote", userControler.sendVote);
module.exports = router;

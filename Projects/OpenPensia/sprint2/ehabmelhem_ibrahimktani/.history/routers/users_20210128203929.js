const userControler = require("../contrlers/user");
const router = require("express").Router();
router.get("/get-user",userControler.se)
module.exports = router;

const voteControler = require("../controlers/vote");
const router = require("express").Router();
router.get("/getUserData", voteControler.getUserData);
router.get("/getVoteData", voteControler.getVoteData);
module.exports = router;

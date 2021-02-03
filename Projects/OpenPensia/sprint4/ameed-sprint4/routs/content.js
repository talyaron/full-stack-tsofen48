const express = require("express");
const router = express.Router();
const contentController = require("../controlers/contentControler");

router.get('/get-voting',contentController.getVoting);



module.exports=router;
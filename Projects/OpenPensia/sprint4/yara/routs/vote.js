const express = require("express");
const router = express.Router();
const vote = require("../controlers/Voting");

router.get('/get-Choises',vote.getChoises);

module.exports=router;
/*
function isPublic(req, res, next) {
    console.log(req.cookies)


    if (req.cookies.public=='public') {
        res.send({ ok: 'not so good' })
    } else {
        next()
    }
    

}
*/

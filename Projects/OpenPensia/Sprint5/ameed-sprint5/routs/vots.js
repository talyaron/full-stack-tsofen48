const express = require("express");
const router = express.Router();
const votsControler = require("../controlers/votsControler");

router.get('/get-vots',isAdmin,votsControler.getVots);

module.exports=router;



function isAdmin(req, res, next) {

    res.cookie('role', 'admin', { maxAge: 9000000, httpOnly: true });

    console.log(req.cookies)

    if (req.cookies.role !== 'admin') {

        res.authorized=false;
        res.send({ ok: false })
    } else {

        res.authorized = true;
        next()
    }

}
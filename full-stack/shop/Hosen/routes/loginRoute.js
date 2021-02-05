const express = require("express");
const router = express.Router();
// const CompanyController = require("../controlers/companyContoler");
const loginController = require('../controller/loginController')
router.get('/login',loginController.login);


function isPublic(req, res, next) {
    console.log(req.cookies)


    if (req.cookies.public=='public') {
        res.send({ ok: 'not so good' })
    } else {
        next()
    }
    

}

module.exports=router;

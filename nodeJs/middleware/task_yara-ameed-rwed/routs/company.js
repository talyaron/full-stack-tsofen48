const express = require("express");
const router = express.Router();
const CompanyController = require("../controlers/companyContoler");

router.get('/get-companies',CompanyController.getCompanies);

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

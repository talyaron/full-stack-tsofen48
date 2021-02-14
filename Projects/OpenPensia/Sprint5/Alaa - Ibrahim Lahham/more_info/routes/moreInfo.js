const moreInfoController = require('../controllers/moreInfo');
const router = require('express').Router();


router.get('/get-Articles',isPublic, moreInfoController.getArticles);
router.get('/get-NavTabs', isPublic,moreInfoController.getNavTabs);
router.get('/get-CandidateInfo',isPublic, moreInfoController.getCandidateInfo);

module.exports = router;

function isPublic(req, res, next) {
try{
    if ((req.cookies.role == 'public')||(req.cookies.role == 'admin')) {
        
        next();
    } else {
        res.send({ success: false,err:"You Must be Logged in",info:null });
    }
}catch(e) {
    console.log(e)
}

}

function isAdmin(req, res, next) {

    if (req.cookies.role !== 'admin') {
        res.send({ success: false,err:"Your not able to see the content",info:null });
    } else {
        next();
    }

}
const userControler = require('../controlers/users');
const router = require('express').Router();


//router.get('/get-users',isAdmin, userControler.getUsers);
// router.get('/get-users',isAdmin, userControler.sendUser);
// router.get('/get-director',isAdmin, userControler.sendDirectorInfo);
// router.get('/get-news',isAdmin, userControler.sendRecentNews);
router.get('/get-users', userControler.getUsers);
router.get('/get-director', userControler.sendDirectorInfo);
router.get('/get-news', userControler.sendRecentNews);
router.get('/get-summary', userControler.sendSummary);
module.exports = router;

function isAdmin(req, res, next) {
    console.log(req.cookies)

    if (req.cookies.role !== 'admin') {
        res.send({ ok: 'not so good' })
    } else {
        next()
    }
    //return false;

}
const userControler = require('../controlers/users');
const router = require('express').Router();


//router.get('/get-users',isAdmin, userControler.getUsers);
// router.get('/get-tracking',isAdmin, userControler.sendTracking);
router.get('/get-users', userControler.getUsers);
router.get('/get-tracking', userControler.sendTracking);
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
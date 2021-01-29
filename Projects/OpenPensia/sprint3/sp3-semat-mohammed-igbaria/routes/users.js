const userControler = require('../controlers/users');
const router = require('express').Router();


router.get('/get-users',isAdmin, userControler.getUsers);

module.exports = router;

function isAdmin(req, res, next) {
    console.log(req.cookies)

    if (req.cookies.role !== 'admin') {
        res.send({ ok: 'not so good' })
    } else {
        next()
    }

}
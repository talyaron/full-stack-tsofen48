const parliamentaryToolsController = require('../controllers/parliamentaryTools');
const router = require('express').Router();


router.get('/parliamentaryTools',isAdmin, parliamentaryToolsController.getParliamentaryTools);

module.exports = router;

function isAdmin(req, res, next) {
    console.log(req.cookies);

    // if (req.cookies.role !== 'admin') {
    //     res.send({ ok: 'not so good' });
    // } else {
        next();
    // }

}
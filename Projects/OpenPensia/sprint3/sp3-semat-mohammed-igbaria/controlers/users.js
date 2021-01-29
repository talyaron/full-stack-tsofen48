const express = require('express');
const app = express();

const users = [{name:'Mohamad', role:'admin'}, {name:'Tal', role:'public'}]

exports.getUsers =  (req, res) => {

    // res.cookie('role', 'admin', { maxAge: 90000000000, httpOnly: true });


    res.send({ ok: true, users });


};


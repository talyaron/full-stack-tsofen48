const express = require('express');
const app = express();


exports.login =  (req, res) => {
    res.send({ ok: true,login:true });
};

exports.signUp =  (req, res) => {
    res.send({ ok: true,login:true });
};
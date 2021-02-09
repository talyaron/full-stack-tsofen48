const express = require('express');
const app = express();




  exports.getLogin =  (req, res) => {


    res.send({ ok: true, login:true });


};


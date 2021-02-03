const express = require('express');
const app = express();

const header = [
    {
     bank: 'בנק הפועלים',
     img: 'https://static.zman.co.il/www/uploads/2019/06/F141230TN15-1024x640.jpg' ,
     name: 'עיסאווי פריג'
    }
    
  ]

  exports.getHeader =  (req, res) => {

    res.send({ ok: true, header });


};
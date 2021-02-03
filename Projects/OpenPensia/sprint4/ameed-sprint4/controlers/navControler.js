const express = require('express');
const app = express();

const nav = [
    {
     summariesLink: 'סיכום פרטים',
     moreInfoLink: ' עוד מידע', 
    voteDetailesLink: 'נתוני הצבעה' 
    }
    
  ]

  exports.getNav =  (req, res) => {

    res.send({ ok: true, nav });


};
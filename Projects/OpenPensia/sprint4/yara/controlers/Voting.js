const express = require('express');
const app = express();

const vote = [
  {
    logo: "https://inst.eecs.berkeley.edu/~cs194-26/fa18/upload/files/proj4/cs194-26-aaj/web/morph/boy.png",
    name: "רונית אברמזון רוקח",
    dislike:"https://cdn1.iconfinder.com/data/icons/business-finance-121/64/business_finance-05-512.png",
    like:"https://www.pinclipart.com/picdir/middle/373-3739835_10-like-thanks-pogchamp-agree-disagree-green-thumbs.png"
  },
  {
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0jpOl_RLs7h6Y5_nCR5RDFtTxXvsMq9Oi1Q&usqp=CAU",
    name: "עיסאווי פריג’",
    dislike:"https://www.clker.com/cliparts/5/2/5/8/13476359851958638477thumbs-down-icon-red-hi-md.png",
    like:"https://www.vhv.rs/dpng/d/405-4053187_youtube-like-hd-png-transparent-background-like-logo.png"
  }
]


  exports.getChoises =  (req, res) => {

   


    res.send({ ok: true, vote });


};
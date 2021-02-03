const express = require('express');
const app = express();

const users = [{name:'Mohamad', role:'public'}, {name:'Tal', role:'public'}]

exports.getUsers =  (req, res) => {

    // res.cookie('role', 'admin', { maxAge: 90000000000, httpOnly: true });


    res.send({ ok: true, users });


};
 //////////////////////
 const trackingBorderList=[
  {trackDate:'21.11.20',trackerName:'נאום בן דקה',trackTitle:'סגירת מרכולים בבני ברק'},
  {trackDate:'22.11.20',trackerName:'דיון בעת פגרה',trackTitle:'מענק לעסקים הקורסים'}

]

exports.sendTracking = (req, res, next) => {
  
  if (req.cookies.role === "public") {
    res.send({ trackingBorderList: trackingBorderList, index: 1 });
  } else {
    res.send({ trackingBorderList: trackingBorderList, index: -1 });
  }
};
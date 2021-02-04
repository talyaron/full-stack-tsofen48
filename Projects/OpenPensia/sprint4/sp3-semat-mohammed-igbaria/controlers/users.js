const express = require('express');
const app = express();

const users = [{name:'Mohamad', role:'public'}, {name:'Tal', role:'public'}]

exports.getUsers =  (req, res) => {

    // res.cookie('role', 'admin', { maxAge: 90000000000, httpOnly: true });


    res.send({ ok: true, users });


};
/////////////////////////////////////////
const directorInfo=[
    {organization:'בנק הפועלים',
    img:'https://images.globes.co.il/images/NewGlobes/big_image_800/2019/f800x392.2019213T094727.jpg',
    directorName:'עיסאווי פריג'},
  
  ]

  
  exports.sendDirectorInfo = (req, res, next) => {
    if (req.cookies.role === "public") {
      res.send({ directorInfo: directorInfo, index: 1 });
    } else {
      res.send({ directorInfo: directorInfo, index: -1 });
    }
  };


  const recentNews=[
    {newsTitle:'ynet - כתבה ב',newsText:'כתבה על שיפור מכירות ובמחסני חשמך',newsUrl:''},
    {newsTitle:'ynet - כתבה ב',newsText:'כתבה על שיפור מכירות ובמחסני חשמך',newsUrl:''},
    // {newsTitle:'ynet - כתבה ב',newsText:'כתבה על שיפור מכירות ובמחסני חשמך',newsUrl:''},
    // {newsTitle:'ynet - כתבה ב',newsText:'כתבה על שיפור מכירות ובמחסני חשמך',newsUrl:''},
    {newsTitle:'ynet - כתבה ב',newsText:'כתבה על שיפור מכירות ובמחסני חשמך',newsUrl:''}
  ]

  
  exports.sendRecentNews = (req, res, next) => {
  
    if (req.cookies.role === "public") {
      res.send({ recentNews: recentNews, index: 1 });
    } else {
      res.send({ recentNews: recentNews, index: -1 });
    }
  };

  const summaryDetailes = [
    { sumTitle: 'ניסיון תעסוקתי', sumText: ['מנכ"ל פוקס', 'דירקטור קן השקעות', 'סמנכ"ל כספים מחסני חשמל', '  אלוף משנה 2008'] }
  
  ]
  exports.sendSummary = (req, res, next) => {
  
    if (req.cookies.role === "public") {
      res.send({ summaryDetailes: summaryDetailes, index: 1 });
    } else {
      res.send({ summaryDetailes: summaryDetailes, index: -1 });
    }
  };

 
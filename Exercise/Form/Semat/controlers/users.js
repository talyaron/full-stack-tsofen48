const express = require('express');
const app = express();
const users = [{name:'Mohamad', role:'public'}, {name:'Tal', role:'public'}]

//DB
const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://Semat:cacWBcNOZTuu1pEB@cluster0.7w7pv.mongodb.net/test', { useNewUrlParser: true, useUnifiedTopology: true });

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open',  ()=> {
   console.log('we are connected to DB')
});

const LogInUsersSchema = new mongoose.Schema({
  userName: String,
  password: String
}); 

const LogInUsers = mongoose.model('LogInUsersSchema', LogInUsersSchema); 

// const new1 = new PenciaNews({newsTitle:'ynet - כתבה ב',newsText:'כתבה על שיפור מכירות ובמחסני חשמך',newsUrl:''});
// const new2 = new PenciaNews({newsTitle:'ynet - כתבה ב',newsText:'כתבה על שיפור מכירות ובמחסני חשמך',newsUrl:''});
// const new3 = new PenciaNews({newsTitle:'ynet - כתבה ב',newsText:'כתבה על שיפור מכירות ובמחסני חשמך',newsUrl:''});

// new1.save().then(()=>console.log('News1 saved to DB'));
// new2.save().then(()=>console.log('News2 saved to DB'));
// new3.save().then(()=>console.log('News3 saved to DB'));

exports.sendRecentNews = (req, res, next) => {
  
  try {
    //get from DB
    PenciaNews.find({}).then((docs) => {
      res.send({ recentNews: docs, index: 1  });
    });
  } catch (e) {
    res.send({ error: e });
  }
};
//////////////////////////////////////////////////
// const DirectorInfoSchema = new mongoose.Schema({
//   organization: String,
//   img: String,
//   directorName: String
// }); 
// const DirectorInfo = mongoose.model('DirectorInfoSchema', DirectorInfoSchema); 

// const dirNews1 = new DirectorInfo(
//   {organization:'בנק הפועלים',
//   img:'https://images.globes.co.il/images/NewGlobes/big_image_800/2019/f800x392.2019213T094727.jpg',
//   directorName:'עיסאווי פריג'});

// dirNews1.save().then(()=>console.log('dirNews1 saved to DB'));

// exports.sendDirectorInfo = (req, res, next) => {
  
//   try {
//     //get from DB
//     DirectorInfo.find({}).then((docs) => {
//       res.send({ directorInfo: docs, index: 1  });
//     });
//   } catch (e) {
//     res.send({ error: e });
//   }
// };
/////////////////////////////////////////////////


/////////////////////////////////////////////////
//Routers
exports.getUsers =  (req, res) => {

    // res.cookie('role', 'admin', { maxAge: 90000000000, httpOnly: true });


    res.send({ ok: true, users });


};

const express = require('express');
const app = express();

const users = [{name:'Mohamad', role:'public'}, {name:'Tal', role:'public'}]

exports.getUsers =  (req, res) => {

    // res.cookie('role', 'admin', { maxAge: 90000000000, httpOnly: true });
    res.send({ ok: true, users });
};
 //////////////////////
 const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://Semat:cacWBcNOZTuu1pEB@cluster0.7w7pv.mongodb.net/test', { useNewUrlParser: true, useUnifiedTopology: true });

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open',  ()=> {
   console.log('we are connected to DB')
});

const TrackingSchema = new mongoose.Schema({
  trackDate: String,
  trackerName: String,
  trackTitle: String
}); 

const Tracking = mongoose.model('TrackingSchema', TrackingSchema); 

const track1 = new Tracking({trackDate:'21.11.20',trackerName:'נאום בן דקה',trackTitle:'סגירת מרכולים בבני ברק'});
const track2 = new Tracking({trackDate:'22.11.20',trackerName:'דיון בעת פגרה',trackTitle:'מענק לעסקים הקורסים'});

track1.save().then(()=>console.log('track1 saved to DB'));
track2.save().then(()=>console.log('track2 saved to DB'));

exports.sendTracking = (req, res, next) => {
  
  try {
    //get from DB
    Tracking.find({}).then((docs) => {
      res.send({ trackingBorderList: docs, index: 1  });
    });
  } catch (e) {
    res.send({ error: e });
  }
};

 ///////////////////////
//  const trackingBorderList=[
//   {trackDate:'21.11.20',trackerName:'נאום בן דקה',trackTitle:'סגירת מרכולים בבני ברק'},
//   {trackDate:'22.11.20',trackerName:'דיון בעת פגרה',trackTitle:'מענק לעסקים הקורסים'}

// ]

// exports.sendTracking = (req, res, next) => {
  
//   if (req.cookies.role === "public") {
//     res.send({ trackingBorderList: trackingBorderList, index: 1 });
//   } else {
//     res.send({ trackingBorderList: trackingBorderList, index: -1 });
//   }
// };
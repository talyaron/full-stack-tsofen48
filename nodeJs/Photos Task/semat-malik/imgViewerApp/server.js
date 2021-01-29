const express = require('express');
const app = express();
var bodyParser = require('body-parser')


app.use(express.static('React/build'));
app.use(bodyParser.json())
////////////////////////////////////////////////
const imagesList = [{imgId:230,
   url:'https://images.pexels.com/photos/1067333/pexels-photo-1067333.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
    score:25,
    rate:2},
    {imgId:230,
      url:'https://images.pexels.com/photos/1067333/pexels-photo-1067333.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
       score:25,
       rate:4},
       {imgId:230,
        url:'https://images.pexels.com/photos/286305/pexels-photo-286305.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
         score:45,
         rate:5}
  
  ];

app.post('/addNewImg', (req, res) => {
  
  let imgId = Math.floor(Math.random() * 100);
  const url= req.body.newImgUrl;
  let score = 0;
  imagesList.push({imgId:imgId, url:url, score:score, rate:0});
  console.log(imagesList);
})

app.get('/get-display', (req, res) => {
  res.send(imagesList);
})


const imagesRating = [
  {imgId:230,
  url:'https://images.pexels.com/photos/1067333/pexels-photo-1067333.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
   score:25,
   rate:2},
   {imgId:230,
    url:'https://images.pexels.com/photos/1067333/pexels-photo-1067333.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
     score:75,
     rate:2},
     {imgId:230,
      url:'https://images.pexels.com/photos/1067333/pexels-photo-1067333.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
       score:20,
       rate:2},
       {imgId:230,
        url:'https://images.pexels.com/photos/1067333/pexels-photo-1067333.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
         score:31,
         rate:2},
         {imgId:230,
          url:'https://images.pexels.com/photos/1067333/pexels-photo-1067333.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
           score:5,
           rate:2},
  
  
  ];

  app.get('/get-sorted', (req, res) => {
    const imagesRatingRorted = [...imagesRating];
    imagesRatingRorted.sort((a, b) => parseFloat(b.score) - parseFloat(a.score));
    console.log(imagesRatingRorted);
    res.send(imagesRatingRorted);
  })
///////////////////////////////////////////////
const port = process.env.PORT || 3002;

app.listen(port, function () {
  console.log('listening', port)
})

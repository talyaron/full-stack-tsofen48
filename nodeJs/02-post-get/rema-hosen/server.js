const express = require('express');
const app = express();
var bodyParser = require('body-parser')


app.use(express.static('public'));
app.use(bodyParser.json())

const images = [
  ]


  function uniqueId(){
    return "id" + Math.random().toString(16).slice(2)
  }

//routes
app.get('/get-images', (req, res) => {

  res.send(images)
})

function compare( a, b ) {
    if ( a.score < b.score ){
      return 1;
    }
    if ( a.score > b.score ){
      return -1;
    }
    return 0;
  }

app.get('/get-sorted-images', (req, res) => {
    let sortedImages = images.slice();
    sortedImages = sortedImages.sort(compare);
    res.send(sortedImages);
  })

app.post('/addImg', (req, res) => {
    const url= req.body;
    let id = uniqueId();
    let score =0;
    const index = images.findIndex(img => img.id === id);
    if (index < 0 ) {
    images.push({id:id,url:url.img,score:score});
    }
})

app.post('/ImagesAfterRating', (req, res) => {

    const imagesToUpdate = req.body.Copyimages;
    imagesToUpdate.forEach(element => {
        const index = images.findIndex(img => img.id === element.id);
        if(index > -1)
        images[index].score = element.score;
    });

})

const port = process.env.PORT || 3002;

app.listen(port, function () {
  console.log('listening', port)
})
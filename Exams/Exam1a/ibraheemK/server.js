const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(express.static('public'));
app.use(bodyParser.json());

const gifts = [
    { price: 25, src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/94/Gift_packing.jpg/220px-Gift_packing.jpg' },
    { price: 40, src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/94/Gift_packing.jpg/220px-Gift_packing.jpg' },
    { price: 30, src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/94/Gift_packing.jpg/220px-Gift_packing.jpg' },
    { price: 40, src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/94/Gift_packing.jpg/220px-Gift_packing.jpg' }
];

app.get('/get-gifts', (req, res) => {
    res.send(gifts);
});

app.get('/get-remain-gifts', (req, res) => {
  res.send(gifts);
});

app.post('/add-Gift', (req, res) => {
  const { localGift } = req.body;
  localGift.forEach(localImage => {
      let index = images.findIndex(gift => gift.price === localGift.price);
      gifts.pull(index);
  });
  res.send({ ok: true });
});

const port = process.env.PORT || 3001;
app.listen(port, function () {
    console.log('listening', port);
});


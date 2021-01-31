const express = require('express');
const app = express();
var bodyParser = require('body-parser');


app.use(express.static('public'));
app.use(bodyParser.json());
//helpping functions
function generateRandomId() {
  return '_' + Math.random().toString(36).substr(2, 9);
  // return 1;
}

const gifts = [
  { id: generateRandomId(), price: 78, src: 'https://image.freepik.com/free-photo/white-gift-box-with-red-ribbon-bow-white-background_1357-337.jpg' },
  { id: generateRandomId(), price: 55, src: 'https://image.freepik.com/free-photo/white-gift-box-with-red-ribbon-bow-white-background_1357-337.jpg' },
  { id: generateRandomId(), price: 20, src: 'https://image.freepik.com/free-photo/white-gift-box-with-red-ribbon-bow-white-background_1357-337.jpg' },
  { id: generateRandomId(), price: 39, src: 'https://image.freepik.com/free-photo/white-gift-box-with-red-ribbon-bow-white-background_1357-337.jpg' },
  { id: generateRandomId(), price: 5, src: 'https://image.freepik.com/free-photo/white-gift-box-with-red-ribbon-bow-white-background_1357-337.jpg' },
];

console.log('server ')
app.get('/gifts', (req, res) => {
  console.log('server gifts')
  res.send(gifts);
})

// Server run
const port = process.env.PORT || 3000;
app.listen(port, () => { console.log(`\x1b[36m Server running on port ${port}  🔥`) });
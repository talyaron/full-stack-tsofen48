const express = require('express');
const app = express();
app.use(express.json());
app.use(express.static('public'));

const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://alaa:Hqd4WuQHYcpIfsLszXVr@cluster0.wvoxj.mongodb.net/test', { useNewUrlParser: true, useUnifiedTopology: true });

// const cookieParser = require('cookie-parser');
// applicationCache.use(cookieParser);

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
    console.log('we are connected to DB')
});



// Server run
const port = process.env.PORT || 3001;
app.listen(port, () => { console.log(`\x1b[36m Server running on port ${port}  🔥`) });
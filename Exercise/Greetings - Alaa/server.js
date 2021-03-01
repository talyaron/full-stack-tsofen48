// const { json } = require('body-parser');
const express = require('express');
const app = express();
app.use(express.json());
app.use(express.static('public'));

const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://alaa:Hqd4WuQHYcpIfsLszXVr@cluster0.wvoxj.mongodb.net/greetings', { useNewUrlParser: true, useUnifiedTopology: true });

// const cookieParser = require('cookie-parser');
// applicationCache.use(cookieParser);

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
    console.log('we are connected to DB')
});


const greetingSchema = new mongoose.Schema({
    text: String,
    src: String
});
const Greeting = mongoose.model('greetingSchema', greetingSchema);

app.post('/add-greeting', (req, res) => {
    try {
        let { greetingText, greetingImageSrc } = req.body;
        Greeting.find({ text: greetingText, src: greetingImageSrc })
            .then(greetings => {
                if (greetings.length > 0) {
                    res.send({ err: 'Greeting already Exists' });
                    return;
                }
                const newGreeting = new Greeting({ text: greetingText, src: greetingImageSrc });
                newGreeting.save().then(() => console.log("Greeting added successfully!"));
                res.send({ success: true, err: '', data: { greetingImageSrc, greetingText } });
            });

    } catch (e) {
        res.send({ err: e });
    }
});




// Server run
const port = process.env.PORT || 3001;
app.listen(port, () => { console.log(`\x1b[36m Server running on port ${port}  🔥`) });
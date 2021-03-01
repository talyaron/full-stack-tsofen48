// const { json } = require('body-parser');
const express = require('express');
const app = express();
app.use(express.json());
app.use(express.static('public'));
//for bonus
var random = require('mongoose-simple-random');

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
// for bonus
greetingSchema.plugin(random);

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

//original solution
app.get('/get-random-greeting', (req, res) => {
    try {
        Greeting.find({})
            .then(greetings => {
                if (greetings.length == 0) {
                    res.send({ err: 'No Greetings Found!' });
                    return;
                }
                let randomIndex = randomNumberFromInterval(0, greetings.length - 1);
                let randomGreeting = { greetingText: greetings[randomIndex].text, greetingImageSrc: greetings[randomIndex].src };
                res.send({ success: true, err: '', data: randomGreeting });
            });
    } catch (e) {
        res.send({ err: e });
    }
})

//bonus solution
app.get('/get-one-random-greeting', (req, res) => {
    try {

        Greeting.findOneRandom(function (err, element) {
            if (err) res.send({ err });
            else res.send({ success: true, err: '', data: element });
        });

        // .then(greeting => {
        //     console.log(greeting)
        //     if (greeting.length == 0) {
        //         res.send({ err: 'No Greetings Found!' });
        //         return;
        //     }

        //     let randomGreeting = { greetingText: greeting.text, greetingImageSrc: greeting.src };
        //     res.send({ success: true, err: '', data: randomGreeting });
        // });
    } catch (e) {
        res.send({ err: e });
    }
})

function randomNumberFromInterval(min, max) { // min and max included 
    return Math.floor(Math.random() * (max - min + 1) + min);
}

// Server run
const port = process.env.PORT || 3001;
app.listen(port, () => { console.log(`\x1b[36m Server running on port ${port}  🔥`) });
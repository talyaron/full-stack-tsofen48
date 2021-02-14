const express = require('express');
const mongoose = require('mongoose');
var bodyParser = require('body-parser');
var cors = require('cors')
const app = express();
app.use(cors())
app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies

// DB Connection
mongoose.connect('mongodb+srv://khaleal:HelloAgain123@cluster0.glmjg.mongodb.net/test', { useNewUrlParser: true, useUnifiedTopology: true });
const User = mongoose.model('User', { username: String, password: String }); //schema

// const user = new User({ username: 'Kitti', password: '123' }); //instance
// user.save().then(() => console.log('User was saved to DB')); //save


// Dummy data for debugging
const userDetails = { user: "skhaleal", pass: "123" }

app.post("/login", (req, res) => {
    const { username, password } = req.body;
    console.log('Login:\nReceived => Username: ', username, ', Password: ', password);

    User.count({ username: username, password: password }, function (err, count) {
        if (count > 0) {
            console.log("Login Successful!")
            res.send({ message: true });
        } else {
            console.log("Login Failed!")
            res.send({ message: false });
        }
    });
});

app.post("/signup", (req, res) => {
    const { username, password } = req.body;
    console.log('Signup:\nReceived => Username: ', username, ', Password: ', password);

    User.count({ username: username}, function (err, count) {
        if (count > 0) {
            console.log("User already exists")
            res.send({ message: false });
        } else {
            console.log("Registration successful!");
            const user = new User({ username: username, password: password });
            user.save().then(() => console.log('User was saved to DB'));
            res.send({ message: true });
        }
    });
});



app.listen(3000, () => { console.log('listen on port 3000') });
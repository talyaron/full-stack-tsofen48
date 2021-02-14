const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://tal3:lqPlF8vfOm7Vd2Qt@tal-test1.m39if.mongodb.net/tsofn48', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => { console.log('connected to DB') });


const User = mongoose.model('User', {
    username: {
        type: String,
        unique: true
    },
    password: String
}); //schema


module.exports = User;
const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://tal3:lqPlF8vfOm7Vd2Qt@tal-test1.m39if.mongodb.net/tsofn48', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => { console.log('connected to DB') });


const Question = mongoose.model('Question', {
    questions:Array
});


module.exports = Question;
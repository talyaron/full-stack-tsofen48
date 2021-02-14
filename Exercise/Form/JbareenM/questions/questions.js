const { mongoose } = require('../server');
const Question = require('./questionSchemas');
const User = require('./questionSchemas');


exports.add = async (req, res) => {
    const { all } = req.body;

    const newQues = new Question({ all });
    newQues.save().then(() => { console.log('question saved') })
    //check if user exists
    // all.forEach(element => {
    //     console.log("elem: ", element.question);
    //     const ques =  Question.findOne({ question: element.question });


    //     if (ques !== null) {
    //         console.log({ ok: false, message: 'ques with such user name already exists' })
    //     } else {
    //         const newQues = new Question({ question: element.question });
    //         newQues.save().then(() => { console.log('question saved') })
    //     }
    // });
    res.send({ ok: true });
}
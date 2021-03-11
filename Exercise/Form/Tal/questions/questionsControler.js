const { mongoose } = require('../server');
const Question = require('./questionsSchema');

exports.add = async (req, res) => {
    const {questions } = req.body;
    console.log(questions)

    // const newUser = new User({username, password});
    // newUser.save().then(()=>{console.log('user saved')})

    const savedQuestions = new Question({questions:questions})
    console.log('questions:', savedQuestions)

    let savedQuestionsResult = await savedQuestions.save();
    
    res.send({ok:true, questions,savedQuestions,savedQuestionsResult})

}
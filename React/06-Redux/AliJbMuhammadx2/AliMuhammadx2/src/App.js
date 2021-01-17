import './App.css';
import React, { useState } from 'react';
import { addTodo } from './redux/actions';

import { useSelector, useDispatch } from 'react-redux';
//components
import Question from './components/Question';





function App() {


  const [score, setScore] = useState(0);
  // const [questions, setQuestions] = useState([]);

  const dispatch = useDispatch();
  const state = useSelector(state=>state);
  console.log(state)


  function handleAdd(e) {
    e.preventDefault();


    const question =
    {
      innerText: e.target[1].value,
      answers: [
        {
          innerText: e.target[2].value,
          rightAnswer: true
        },
        {
          innerText: e.target[3].value,
          rightAnswer: false
        },
        {
          innerText: e.target[4].value,
          rightAnswer: false
        },
        {
          innerText: e.target[5].value,
          rightAnswer: false
        }
      ]
    }
   
    console.log(question);
    dispatch(addTodo(question));
    e.target.reset();
  }
  let a ='test'
  return (
    <div className="App">
      <header className="App-header">
        <div className="quiz-header">
          <h2>Quiz App</h2>
          <hr/>
          <div>
          <form onSubmit={handleAdd}>
        <button type='submit'>Add Question</button>
        <input type='text' name='question' defaultValue={a} placeholder='question' />
        <input type='text'  name='answer1' defaultValue={a} placeholder='answer1' />
        <input type='text'  name='answer2' defaultValue={a} placeholder='answer2' />
        <input type='text'  name='answer3' defaultValue={a} placeholder='answer3' />
        <input type='text'  name='answer4' defaultValue={a} placeholder='answer4' />
        <input type='text'  name='trueAnswer' placeholder='trueAnswer' />
      </form>
          </div>
        </div>
        {/* {questions.map((question, index) => {

          return (
            <Question
              innerText={question.innerText}
              answers={question.answers}
              key={index}
              appState={{score, setScore}}
            />
          );
        })
        } */}

        {
          state['todos'].todos.map((question, index) => {

            return (
              <Question
                innerText={question.innerText}
                answers={question.answers}
                key={index}
                appState={{score, setScore}}
              />
            );
            })
        }




        <div className="score">
          score: {score}
        </div>

      </header>
    </div>
  );
}

export default App;



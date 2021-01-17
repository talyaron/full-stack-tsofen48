import './App.css';
import React, { useState } from 'react';
import { useSelector } from 'react-redux';

//components
import Question from './components/Question';
import CreateQuestion from './components/CreateQuestion/CreateQuestion'

function App() {
 

  let questions = useSelector(state => state.questions)
  
  let counter = useSelector(state=>state.counter.counter);
 


  return (
    <div className="App">
      <header className="App-header">
        <div className="quiz-header">
          <h2>Quiz App</h2>
          <hr />
          <p> are you ready?</p>
        </div>
        <CreateQuestion />
        {questions.map((question, index) => {

          return (
            <Question
              question={question}
              key={index}
              index={index}
            />
          );
        })
        }
        <div className="score">
          score: {counter}
        </div>

      </header>
    </div>
  );
}

export default App;


const questions = [
  {
    innerText: "q1",
    answers: [
      {
        innerText: 'a',
        rightAnswer: true
      },
      {
        innerText: 'b',
        rightAnswer: false
      },
      {
        innerText: 'c',
        rightAnswer: false
      },
      {
        innerText: 'd',
        rightAnswer: false
      }
    ]
  },
  {
    innerText: "q2",
    answers: [
      {
        innerText: 'a',
        rightAnswer: true
      },
      {
        innerText: 'b',
        rightAnswer: false
      },
      {
        innerText: 'c',
        rightAnswer: false
      },
      {
        innerText: 'd',
        rightAnswer: false
      }
    ]
  },
  {
    innerText: "q3",
    answers: [
      {
        innerText: 'a',
        rightAnswer: true
      },
      {
        innerText: 'b',
        rightAnswer: false
      },
      {
        innerText: 'c',
        rightAnswer: false
      },
      {
        innerText: 'd',
        rightAnswer: false
      }
    ]
  },
  {
    innerText: "q4",
    answers: [
      {
        innerText: 'a',
        rightAnswer: true
      },
      {
        innerText: 'b',
        rightAnswer: false
      },
      {
        innerText: 'c',
        rightAnswer: false
      },
      {
        innerText: 'd',
        rightAnswer: false
      }
    ]
  },
  {
    innerText: "q5",
    answers: [
      {
        innerText: 'a',
        rightAnswer: true
      },
      {
        innerText: 'b',
        rightAnswer: false
      },
      {
        innerText: 'c',
        rightAnswer: false
      },
      {
        innerText: 'd',
        rightAnswer: false
      }
    ]
  }
];
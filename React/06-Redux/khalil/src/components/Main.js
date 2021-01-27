import './Main.css';
import React from 'react';
import { Provider, useSelector } from "react-redux";
import store from "../store";

//components
import Question from './Question';

function Main() {
  const count = useSelector(state => state.count.counter);

  return (
    <Provider store={store}>
      <div className="App">
        <header className="App-header">
          <div className="quiz-header">
            <h2>Quiz App</h2>
            <hr />
            <p> are you ready?</p>
          </div>
          {questions.map((question, index) => {

            return (
              <Question
                innerText={question.innerText}
                answers={question.answers}
                key={index}
                // appState={{ score, setScore }}
              />
            );
          })
          }
          <div className="score">
            score: {count}
          </div>

        </header>
      </div>
    </Provider>
  );
}

export default Main;


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
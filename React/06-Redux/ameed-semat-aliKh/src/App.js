// import './App.css';
// // import { ADD_TODO } from './redux/actionTypes';
// import { addTodo } from './redux/actions';
// import { useState } from 'react';

// import { useSelector, useDispatch } from 'react-redux';

// //components
// import Cards from './components/Cards/Cards';



// function App() {

//   const [taskTxt, setTaskTxt] = useState('')

//   const dispatch = useDispatch();
  
 
//   const state = useSelector(state=>state);
//   console.log(state)


//   function handleAdd(e) {
//     e.preventDefault();
//     dispatch(addTodo(taskTxt));
//     setTaskTxt('');
//     e.target.reset();
//   }

//   function handleInput(e) {
//     setTaskTxt(e.target.value)
//   }

//   return (
//     <div className="App">
//       <form onSubmit={handleAdd}>
//         <button type='submit'>Add Task</button>
//         <input type='text' placeholder='משימה' defaultValue={taskTxt} onKeyUp={handleInput} />
//       </form>
     
//       <Cards />
//     </div>
//   );
// }

// export default App;


import './App.css';
import React, { useState } from 'react';

//components
import Question from './components/Question';

function App() {
  const [score, setScore] = useState(0);

  return (
    <div className="App">
      <header className="App-header">
        <div className="quiz-header">
          <h2>Quiz App</h2>
          <hr/>
          <p> are you ready?</p>
        </div>
        {questions.map((question, index) => {

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
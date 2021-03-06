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
import { useSelector, useDispatch } from 'react-redux';
// import { addTodo } from './redux/actions';
import './App.css';
import React, { useState } from 'react';
import { ADD_TODO } from './redux/actionTypes';
//components
import Question from './components/Question';

function App() {

  // const [taskTxt, setTaskTxt] = useState('')
  // const dispatch = useDispatch();
  const [score, setScore] = useState(0);
  // const state = useSelector(state=>state);
  // console.log(state)

  // function handleAdd(e) {
  //   e.preventDefault();
  //   dispatch(addTodo(questionObj));
  //   setTaskTxt('');
  //   e.target.reset();
  // }





  function addQuestion(quetion){

    // cahnge questionObj to quetion

    // imp comm.
    // dispatch(addQuestion(questionObj));
  }

// onSubmit - to add a new Question
// function handleSubmit(e){

//   // e.preventDefault();
//   console.log
//   // TODO
// }
const handleSubmit = event => {

  event.preventDefault();
  
};


function onTestClick(e) {
  e.preventDefault();
  alert('here');
};




  // main App Body
  return (
    <div className="App">
      <header className="App-header">
        <div className="quiz-header">
          <h2>Quiz App</h2>
          <hr/>
          <p> are you ready?</p>
        </div>

        {/* onSubmit={handleSubmit()} */}
        <br></br>
    <div className="qForm" >
      <form className="questionForm" 
      // onSubmit={e => e.preventDefault()}
      onSubmit={e => this.onTestClick(e)}

      >


          {/* ///////////////////////////////////////////////////////////////////////////// */}
        <input placeholder="Enter a Question" class="newQuestion" type="text" />
        <div className="formAnswers">
        <input placeholder="a. first answer" className="questionA" type="text" />
        <input placeholder="b. second answer" className="questionB" type="text" />
        <input placeholder="c. third answer" className="questionC" type="text" />
        <input placeholder="d. fourth answer" className="questionD" type="text" />
        <input placeholder="Right answer:(a,b,c,d)" class="" type="text" />
        </div>
      <button type="submit">Add a New Question</button>
     
      </form>



    </div>
      {/*get question info from user by inputs .... */}
        
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


 var questionObj =
 {
  questionText: "q",
  answers: [
    {
      answerText: 'a',
      rightAnswer: false
    },
    {
      answerText: 'b',
      rightAnswer: false
    },
    {
      answerText: 'c',
      rightAnswer: false
    },
    {
      answerText: 'd',
      rightAnswer: false
    }
  ]
}


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
  }
 
];
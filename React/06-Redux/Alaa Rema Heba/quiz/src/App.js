import './App.css';
import { addQuestion } from './redux/actions';
import { useDispatch } from 'react-redux';
//components
import Questions from './components/Questions';
import { useSelector } from 'react-redux';

function App() {
  let score = 0;
  const dispatch = useDispatch();
  score = useSelector(state => state.score);


  function handleAdd(e) {
    e.preventDefault();
    // validate the input
    let questionValues = getQuestionValues();
    dispatch(addQuestion(questionValues));

  }
  return (
    <div className="App">
      <header className="App-header">
        <div className="quiz-header">
          <h2>Quiz App</h2>
          <hr />
          <p> are you ready?</p>
        </div>

        <form onSubmit={handleAdd}>

          <input id='question' type='text' placeholder='your Qusetion' />
          <input id='right_answer' type='text' placeholder='First Answer (the right answer)' />
          <input id='answer2' type='text' placeholder='Second Answer' />
          <input id='answer3' type='text' placeholder='Third Answer' />
          <input id='answer4' type='text' placeholder='Fourth Answer' />
          <button type='submit'>Add Question</button>
        </form>
        <div className="score">
          score: {score}
        </div>

      </header>
      <Questions></Questions>
    </div>
  );
}

export default App;

function getQuestionValues() {
  let question = document.getElementById("question").value;
  let rightAnswer = document.getElementById("right_answer").value;
  let answer2 = document.getElementById("answer2").value;
  let answer3 = document.getElementById("answer3").value;
  let answer4 = document.getElementById("answer4").value;
  let Answers=[rightAnswer,answer2,answer3,answer4]
  let questionToAdd={question:question,Answers:Answers};
  return questionToAdd;
}
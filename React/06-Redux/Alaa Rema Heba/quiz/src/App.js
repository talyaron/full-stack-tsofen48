import './App.css';
import { addQuestion } from './redux/actions';
import { useDispatch } from 'react-redux';
//components
import Questions from './components/Questions';


function App() {
  let score = 0;
  const dispatch = useDispatch();

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
  let question = document.querySelector('#question');
  let rightAnswer = document.querySelector('#question');
  let answer2 = document.querySelector('#answer2');
  let answer3 = document.querySelector('#answer3');
  let answer4 = document.querySelector('#answer4');
  return [question, rightAnswer, answer2, answer3, answer4];
}
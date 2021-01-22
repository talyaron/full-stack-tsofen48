import "./App.css";
import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";

//components
import Question from "./components/Question";
import { addQuestion } from "./redux/action";

function App() {
  const [score, setScore] = useState(0);
  const [input, setInput] = useState("");
  const [answer1, setAnswer1] = useState("");
  const [answer2, setAnswer2] = useState("");
  const [answer3, setAnswer3] = useState("");
  const [answer4, setAnswer4] = useState("");

  const [quest, setQuest] = useState({});
  const [flag1, setFlag1] = useState(false);
  const [flag2, setFlag2] = useState(false);
  const [flag3, setFlag3] = useState(false);
  const [flag4, setFlag4] = useState(false);

  const dispatch = useDispatch();
  const state = useSelector((state) => state);
  const stam = useSelector((state) => state.question.question);
<<<<<<< Updated upstream
  console.log(state.score.score);
=======
  console.log(state.question.question);
>>>>>>> Stashed changes
  return (
    <div className="App">
      <header className="App-header">
        <div className="quiz-header">
          <h2>Quiz App</h2>
          <hr />
          <p> are you ready?</p>
<<<<<<< Updated upstream
          <div className="final-score">score: {state.score.score}</div>
=======
>>>>>>> Stashed changes
        </div>
        <form className="q-component">
          <p>
            add the question article and after that insert the question and
            after that check the right answer
          </p>
          <label>Question article</label>
          <input
            value={input}
            onChange={(e) => {
              setInput(e.target.value);
            }}
            type="text"
          />
          <div className="add_compent">
            <div className="answers">
              <input
                value={answer1}
                onChange={(e) => {
                  setAnswer1(e.target.value);
                }}
                type="text"
              />
              <label>first answer</label>
              <input
                checked={flag1}
                onChange={(e) => {
                  setFlag1(!flag1);
                  setFlag2(false);
                  setFlag3(false);
                  setFlag4(false);
                }}
                type="checkbox"
              />
              <input
                value={answer2}
                onChange={(e) => {
                  setAnswer2(e.target.value);
                }}
                type="text"
              />
              <label>second answer</label>

              <input
                checked={flag2}
                onChange={(e) => {
                  setFlag2(!flag2);
                  setFlag1(false);
                  setFlag3(false);
                  setFlag4(false);
                }}
                type="checkbox"
              />
              <input
                value={answer3}
                onChange={(e) => {
                  setAnswer3(e.target.value);
                }}
                type="text"
              />
              <label>third answer</label>

              <input
                onChange={(e) => {
                  setFlag3(!flag3);
                  setFlag1(false);
                  setFlag4(false);
                  setFlag2(false);
                }}
                checked={flag3}
                type="checkbox"
              />
              <input
                value={answer4}
                onChange={(e) => {
                  setAnswer4(e.target.value);
                }}
                type="text"
              />
              <label>last answer</label>
              <input
                onChange={(e) => {
                  setFlag4(!flag4);
                  setFlag1(false);
                  setFlag2(false);
                  setFlag3(false);
                }}
                checked={flag4}
                type="checkbox"
              />
            </div>
          </div>

          <button
            type="submit"
            onClick={(e) => {
              e.preventDefault();
              let content = {
                innerText: input,
                answers: [
                  { innerText: answer1, rightAnswer: flag1 },
                  { innerText: answer2, rightAnswer: flag2 },
                  { innerText: answer3, rightAnswer: flag3 },
                  { innerText: answer4, rightAnswer: flag4 },
                ],
              };
              dispatch(addQuestion(content));
            }}
          >
            Add Question
          </button>
        </form>
        {stam.map((question, index) => {
          return (
            <Question
              innerText={question.innerText}
              answers={question.answers}
              key={index}
              appState={{ score, setScore }}
            />
          );
        })}
<<<<<<< Updated upstream
=======
        <div className="final-score">score: {score}</div>
>>>>>>> Stashed changes
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
        innerText: "a",
        rightAnswer: true,
      },
      {
        innerText: "b",
        rightAnswer: false,
      },
      {
        innerText: "c",
        rightAnswer: false,
      },
      {
        innerText: "d",
        rightAnswer: false,
      },
    ],
  },
  {
    innerText: "q2",
    answers: [
      {
        innerText: "a",
        rightAnswer: true,
      },
      {
        innerText: "b",
        rightAnswer: false,
      },
      {
        innerText: "c",
        rightAnswer: false,
      },
      {
        innerText: "d",
        rightAnswer: false,
      },
    ],
  },
  {
    innerText: "q3",
    answers: [
      {
        innerText: "a",
        rightAnswer: true,
      },
      {
        innerText: "b",
        rightAnswer: false,
      },
      {
        innerText: "c",
        rightAnswer: false,
      },
      {
        innerText: "d",
        rightAnswer: false,
      },
    ],
  },
  {
    innerText: "q4",
    answers: [
      {
        innerText: "a",
        rightAnswer: true,
      },
      {
        innerText: "b",
        rightAnswer: false,
      },
      {
        innerText: "c",
        rightAnswer: false,
      },
      {
        innerText: "d",
        rightAnswer: false,
      },
    ],
  },
  {
    innerText: "q5",
    answers: [
      {
        innerText: "a",
        rightAnswer: true,
      },
      {
        innerText: "b",
        rightAnswer: false,
      },
      {
        innerText: "c",
        rightAnswer: false,
      },
      {
        innerText: "d",
        rightAnswer: false,
      },
    ],
  },
];

// import './Signup.css';


// function Signup(props)  {
//   return (
//     <div className="container">
//       <div className="block">
//         <label>:שם פרטי *</label>
//         <input type="text" />
//       </div>
//       <div className="block">
//         <label>:שם משפחה *</label>
//         <input type="text" />
//       </div>
//       <div className="block">
//         <label>:דוא״ל *</label>
//         <input type="text" />
//       </div>
//       <div className="block">
//         <label>אירגון/חברה:</label>
//         <input type="text" />
//       </div>
//       <div className="block">
//         <label>טלפון: *</label>
//         <input type="text" />
//       </div>

//       <h6>חובה למלא פרטים המסומנים בכוכבית *</h6>
//       <button>sumbit</button>
//     </div>
//   );
// }
// export default Signup;


import './Signup.css';
import Label from './Label'


function Signup(props)  {
  return (
      <div className={`q-component ${isAnsweCorrect}`}>
            <div className="question-text">
                {props.innerText}
            </div>
            <div className="all-answers">
                {props.answers.map((answer, index) => {
                    return (
                        <Label
                            innerText={answer.innerText}
                            rightAnswer={answer.rightAnswer}
                            key={index}
                            appState={{score, setScore}}
                            isAnswerCorrect={{isCorrect, setIsCorrect}}
                        />
                    );
                })}
            </div>
        </div>
  );
}
export default Signup;
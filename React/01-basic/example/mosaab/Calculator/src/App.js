import React,{useState} from 'react';


function App() {
  let [firstNumber, setFirstNumber] = useState(0);
  let [secondNumber, setSecondNumber] = useState(0);
  let [text, setText] = useState("");
  let [Operator, setOperator] = useState(0);
  let [imageloading , setImg ] = useState();
  
   function changeFirstNumber(e){
   setFirstNumber(e.target.value);
}

function changeSecondNumber(e){
  setSecondNumber(e.target.value);
}

function changeOperator(e){
if(e.target.value === "1")
{
  setOperator('/')
}
 else if(e.target.value === "2"){
   setOperator('*')
 }   
 else if(e.target.value === "3"){
  setOperator('+')
 }  
 else if(e.target.value === "4"){
  setOperator('-')
 }  
 else if(e.target.value === "Operator"){
  setOperator('nullIt')
 }
}


   function totalIt(){
     let toFastit = 0;
    switch(Operator){
      case '/':
        toFastit = firstNumber / secondNumber;
        break;
  
        case '*':
          toFastit = firstNumber * secondNumber;
          break;
  
          case '+':
            toFastit = parseInt(firstNumber) + parseInt(secondNumber);
            break;
  
            case '-':
              toFastit = firstNumber - secondNumber;
              break;

              default:
                break;
    }
    
    setImg(<img alt="img" style={{width:"50px",height:"50px"}} src="https://i0.wp.com/hpscans.com/wp-content/uploads/2020/10/loading.gif"/>);
  
  console.log(firstNumber)
    setTimeout(function(){
      setImg("")
      if(Operator !== "nullIt" && firstNumber !== 0 && secondNumber !== 0 && firstNumber !== '' && secondNumber !== ''){
       setText(` ${firstNumber} ${Operator}  ${secondNumber} = ${toFastit}`) 
      }
     else{
      setText('Something Wrong !! fill all');
     }
    },2000)

  }

  return (
<div className="container">
  <h1>Calculate</h1>
 <input className="form-control" placeholder="First Number"  onChange={changeFirstNumber} type="number"  />
 <br/>
 <input className="form-control" placeholder="Second Number"  onChange={changeSecondNumber} type="number"  />
 <br/>
 <label  htmlFor="list">Choose operator:</label>
  <select className="form-control" onChange={changeOperator} name="list" id="list">
  <option value="Operator">Operator</option>
    <option value="1">/</option>
    <option value="2">*</option>
    <option value="3">+</option>
    <option value="4">-</option>
  </select>
  <br/>
 <button className="btn btn-primary" onClick={totalIt}>Calculator {imageloading}</button>
<div>

<h1>{text}</h1>
</div>
</div>
  )
  
}

export default App;
import logo from './logo.svg';
import './App.css';

//components
import Card from './view/components/Card/Card';
function uniqueId() {
  return "id" + Math.random().toString(16).slice(2)
}

const icons = [
 { id: uniqueId(), img: 'https://upload.wikimedia.org/wikipedia/commons/9/9c/Onelogo.png'},
  { id: uniqueId(), img: 'https://upload.wikimedia.org/wikipedia/commons/8/85/Twologo.png'},
  { id: uniqueId(), img: 'https://upload.wikimedia.org/wikipedia/commons/a/a7/Threelogo.png'},
  { id: uniqueId(), img: 'https://upload.wikimedia.org/wikipedia/commons/5/51/Fourlogo.png'},
  { id: uniqueId(), img: 'https://upload.wikimedia.org/wikipedia/commons/3/35/Fivelogo.png'},
  { id: uniqueId(), img: 'https://upload.wikimedia.org/wikipedia/commons/9/97/Sixlogo.png'},
  { id: uniqueId(), img: 'https://upload.wikimedia.org/wikipedia/commons/8/87/Sevenl.png' },
  { id: uniqueId(), img: 'https://upload.wikimedia.org/wikipedia/commons/b/bd/Eightlogo.png'},
  { id: uniqueId(), img: 'https://upload.wikimedia.org/wikipedia/commons/d/d6/Ninelogo.png'},
]
let c=0;
let sum=0;
let op="add";
function reply_click(clicked_id)
  {
      alert(clicked_id);
  }
const handleClick =  e => {


//console.dir(e.target.innerText)
let x=document.querySelector("input");
let y=document.querySelector("input2");
if(e.target.id=="+"){ }
if(e.target.id=="="){ x.value=(Number(x.value)+(Number(e.target.id)+1));y.value=sum;sum=0;}
else {if (op=="add"){x.value=(Number(x.value)+(Number(e.target.id)+1));sum=sum+Number(e.target.id)+1;}}
//console.log(e.target.id)


}

function App() { //component
  return (
    <div className="App">
      <header className="App-header">
       
        <p>
       <h1> Calculter</h1>
        </p>
        <div className="container">
        {icons.map((icon, index) => {

return (<Card
             id={index} img={icons[index].img} onClick={handleClick} />
               )
})

}
        </div>
        <div className="second">
        <label for="lname">Screen</label>
      <input id="input" type="text" id="lname" name="lname" disabled value="0"/>
      <label for="lname">Result</label>
      <input id="input2" type="text"   disabled value="0"/>
      <img id="+" src="https://upload.wikimedia.org/wikipedia/commons/9/9f/Addlogo.png" onClick={handleClick}></img>
      <img id="=" src="https://upload.wikimedia.org/wikipedia/commons/9/9e/Equallogo.png" onClick={handleClick}></img>
        </div>
   
      </header>
    </div>
  );
}

export default App;

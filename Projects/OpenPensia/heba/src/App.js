import './App.css';


//components
import Head from './components/Head.js';
import Info from './components/Info.js';
/*import Icon from './components/Icon.js';
const myImgSrc = "https://media-exp1.licdn.com/dms/image/C4E03AQFWZrT9WGRmHA/profile-displayphoto-shrink_400_400/0/1516827527497?e=1616025600&v=beta&t=mppJLKNmcZbNq5TzMGravh3TvnK84LgfqipAdFK2Wgc";

function uniqueId() {
  return "id" + Math.random().toString(16).slice(2)
}

const icons = [
  { id: uniqueId(), img: 'https://www.iconfitness.co.il/wp-content/uploads/2020/05/Group-28@2x-1024x237.png', title: 'settings' },
  { id: uniqueId(), img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/Approve_icon.svg/1024px-Approve_icon.svg.png', title: 'v' },
  { id: uniqueId(), img: 'https://terrasafe.co.il/wp-content/uploads/2020/08/pngtree-shield-icon-design-png-image_1017528.jpg', title: 'shield' }
]


function App() {
  const [counter, setCounter] = useState(0)

  const handleClick =  e => {

    const newCounter = counter + 1;
    setCounter(newCounter)

    console.log('click', newCounter)


  }

  return (
    <div className="App">
      <header className="App-header grid-container">
        <div className="grid-item">
        </div>
        <div className="grid-item">
          <img src={myImgSrc} className="my-image" alt="me" />
          <p>
            Alaa Saabni-Mograbi ({counter})
          </p>
        </div>
        
        <button onClick={handleClick}>Add 1</button>
        <div className="grid-item">


          {icons.map((icon, index) => {

            return (<Icon
              key={icon.id}
              title={icon.title}
              img={icon.img} />)
          })
          }

        </div>
      </header>
    </div>
  );
}*/
function App() {
  
  return(

    <div className="App">
        <div>
          <Head/>
        </div>
    
        
         
       {/* <div className ="inside"> */}
      {/* <div className="grid-container">
          <div className="grid-item">1</div>
          <div className="grid-item">2</div>
          <div className="grid-item">3</div>
          </div>*/}
          <Info/>
        {/* </div> */}

     

       


    </div>
  );

}
export default App;

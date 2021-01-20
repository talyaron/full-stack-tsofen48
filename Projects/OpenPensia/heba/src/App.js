import './App.css';


//components
import Head from './components/Head.js';
import Info from './components/Info.js';

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

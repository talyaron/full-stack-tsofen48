import logo from './logo.svg';
import {Animated} from "react-animated-css";
import SwiftSlider from 'react-swift-slider'
import React , {Component} from 'react'

//components
import './view/merc.css'
import Merc from './view/merc';
import Sobhe from './view/sobhe';
import './App.css';
import merc from './view/merc';
import Head from './view/head';



class App extends Component
{
  constructor(){
    super()
    this.state={
      showMe:true
    }
  }

operation()
{
  this.setState({
    showMe: false
  })
}
operation()
{
  this.setState({
    showMe: false
  })
}
operation1()
{
  this.setState({
    showMe: true
  })
}

render()
{
  return ( 

      <div id='con'>
      <Head title='home1'/>
      <Head title='catogory'/>
      <Head title=' about us'/>
      <Head title='contact us'/>
      <Head title='map'/>
      </div>  
  )
}
  

render() { //component
  return ( 

    
    <div>
      <div id='con'>
      <Head title='home'/>
      <Head title='catogory'/>
      <Head title=' about us'/>
      <Head title='contact us'/>
      <Head title='map'/>
      </div>
      <div id='head1'>
      <button onClick={()=>this.operation()}>hide exterior   </button> 
      <button onClick={()=>this.operation1()}>show exterior </button>
    
      {
      this.state.showMe?
      <div>
          <h1>
      <Sobhe title='front'/>
        <Merc img='https://s.aolcdn.com/dims-global/dims3/GLOB/legacy_thumbnail/1049x590/quality/80/https://s.aolcdn.com/os/ab/_cms/2020/09/01165136/20C0359_009.jpg'/>
      </h1>
       
      </div>
      
      :null
      }
      
      {
      this.state.showMe?
      <div>
      <Sobhe title='rear'/>
      <Merc img='https://s.aolcdn.com/dims-global/dims3/GLOB/legacy_thumbnail/1049x590/quality/80/https://s.aolcdn.com/os/ab/_cms/2020/09/01165133/20C0359_008.jpg'/>
      
      </div>
      
      :null
      }
      <Sobhe title='interior'/>
      <Merc img='https://s.aolcdn.com/dims-global/dims3/GLOB/legacy_thumbnail/1049x590/quality/80/https://s.aolcdn.com/os/ab/_cms/2020/09/02124025/20C0404_123.jpg'/>
      <Sobhe title=' rear interior'/>
      <Merc img='https://s.aolcdn.com/dims-global/dims3/GLOB/legacy_thumbnail/1049x590/quality/80/https://s.aolcdn.com/os/ab/_cms/2020/09/02124007/20C0404_118.jpg'/>
      </div>
      </div>
  )


function App() { //component
  return (
    <div className="App">
      <header className="App-header">
      <Animated animationIn="bounceOutDown" animationOut="fadeOut" isVisible={false}>
    <div>
      hello
    </div>
    
</Animated>
        <p>

        </p>
      
      </header>
    </div>
  );
  }
}
}

export default App;

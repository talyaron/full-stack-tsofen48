import './App.css';
import React, { useState } from 'react';

//components
import Icon from './components/Icon.js';

const myImgSrc = "https://d3kqdc25i4tl0t.cloudfront.net/articles/content/143_533728_160122gmailpic_hero.jpg";

function uniqueId() {
  return "id" + Math.random().toString(16).slice(2)
}

const icons = [
  { id: uniqueId(), img: 'https://www.iconfitness.co.il/wp-content/uploads/2020/05/Group-28@2x-1024x237.png', title: 'settings' },
  { id: uniqueId(), img: 'https://terrasafe.co.il/wp-content/uploads/2020/08/pngtree-shield-icon-design-png-image_1017528.jpg', title: 'shield' },
  { id: uniqueId(), img: 'https://terrasafe.co.il/wp-content/uploads/2020/08/pngtree-shield-icon-design-png-image_1017528.jpg', title: 'shield' },
  { id: uniqueId(), img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/Approve_icon.svg/1024px-Approve_icon.svg.png', title: 'v' }

]
const i = [
  { id: uniqueId(), img: 'https://terrasafe.co.il/wp-content/uploads/2020/08/pngtree-shield-icon-design-png-image_1017528.jpg', title: 'shield' }

]

function App() {

  const [counter, setCounter] = useState(0)

  const handleClick = e => {

    const newCounter = counter + 1;
    setCounter(newCounter)

    console.log('click', newCounter)


  }
  const SubtractClick = e => {

    const newCounter = counter - 1;
    setCounter(newCounter)

    console.log('click', newCounter)


  }
  const resetClick = e => {
    const zero = 0;
    const newCounter = counter * zero;
    setCounter(newCounter)

    console.log('click', newCounter)


  }

  //   const picClick = e => {

  //       return(
  // <div className='icon'>
  // <Icon  id={uniqueId()} img={'https://terrasafe.co.il/wp-content/uploads/2020/08/pngtree-shield-icon-design-png-image_1017528.jpg'}
  //  title={'shield'} />
  // </div>
  //       ) 


  //   }




  return (
    <div className="App">
      <header className="App-header grid-container">

        <div className="grid-item">
          <img src={myImgSrc} className="my-image" alt="me" />
          <div className='grid-item-b'>
            <button onClick={handleClick}>Add 1</button>
            <button onClick={SubtractClick}>Sub 1</button>
            <button onClick={resetClick}>reset</button>
          </div>
          <p>
            Ameed Kabha ({counter})
          </p>
        </div>

        <div className="grid-item">

          <div className='icon grid-item-b'>
            {icons.map((icon, index) => {

              return (<Icon
                key={icon.id}
                title={icon.title}
                img={icon.img} />)

            })
            }

          </div>
        </div>


        <div className="grid-item">
          <Example />

        </div>





      </header>
    </div>
  );
}

export default App;


class Example extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0

    };
  }

  render() {
    return (
      <div>
        <p>State Example</p>
        <p>You clicked {this.state.count} times</p>
        <button onClick={() => this.setState({ count: this.state.count + 1 })}>


          Click me to add
        </button>

        <div>

          <button onClick={() => this.setState({ count: this.state.count - 1 })}>
            Click me to sub
        </button>
        </div>
      </div>

    );
  }
}
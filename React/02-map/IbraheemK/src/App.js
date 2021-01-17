import './App.css';
import React, { useState } from 'react';

//components
import Icon from './components/Icon.js';

const myImgSrc = "https://media-exp1.licdn.com/dms/image/C4E03AQFWZrT9WGRmHA/profile-displayphoto-shrink_400_400/0/1516827527497?e=1616025600&v=beta&t=mppJLKNmcZbNq5TzMGravh3TvnK84LgfqipAdFK2Wgc";

function uniqueId() {
  return "id" + Math.random().toString(16).slice(2)
}

const icons = [
  { id: uniqueId(), img: 'https://upload.wikimedia.org/wikipedia/commons/7/73/Lion_waiting_in_Namibia.jpg', title: 'settings' },
  { id: uniqueId(), img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1f/Oryctolagus_cuniculus_Rcdo.jpg/220px-Oryctolagus_cuniculus_Rcdo.jpg', title: 'v' },
  { id: uniqueId(), img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b0/Bengal_tiger_%28Panthera_tigris_tigris%29_female_3_crop.jpg/220px-Bengal_tiger_%28Panthera_tigris_tigris%29_female_3_crop.jpg', title: 'shield' },
  { id: uniqueId(), img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/55/Jaguar-schwarzer-panther-zoologie.de-nk0005.JPG/250px-Jaguar-schwarzer-panther-zoologie.de-nk0005.JPG', title: 'settings' }
]


 function App() {
  const [counter, setCounter] = useState(0)

  const handleClick = e => {
    // let animals = ['lion','rabbit','panter','tiger']
    // animals.forEach(el=> {
    //   const newCounter = el
        
    const newCounter = counter + 1;
    setCounter(newCounter)

    console.log('click', newCounter)
    
  //})

  }
  return (
    <div className="App">
      <header className="App-header">
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>

        <div class="grid-item">
          <div class="article"><Icon
            title={icons[0].title}
            img={icons[0].img} />
            ({counter})</div>
          <div class="article"><Icon
            title={icons[1].title}
            img={icons[1].img} />
            ({counter})</div>
          <div class="article"><Icon
            title={icons[2].title}
            img={icons[2].img} />
            ({counter})</div>
          <div class="article"><Icon
            title={icons[0].title}
            img={icons[0].img} />
            ({counter})</div>
        </div>

        <button onClick={handleClick}>animal Name</button>




        {/* the previous way is :  instead od declaring array of counters you can delare as elements < Card title = ... img = .../> */}


        {/* {icons.map((icon, index) => {

          return (<Icon
            title={icon.title}
            img={icon.img} />)
        })
        } */}
      </header>
    </div>
  );
}


// function App() {
//   const [counter, setCounter] = useState(0)

//   const handleClick = e => {

//     const newCounter = counter + 1;
//     setCounter(newCounter)

//     console.log('click', newCounter)


//   }

//   return (
//     <div className="App">




//       <header className="App-header container">
//         <div className="grid-item">
//         </div>
//         <div className="grid-item">
//           <img src={myImgSrc} className="my-image" alt="me" />
//           <p>
//             Alaa Saabni-Mograbi ({counter})
//           </p>
//         </div>
//         <button onClick={handleClick}>Add 1</button>
//         <div className="grid-item">


//           {icons.map((icon, index) => {

//             return (<Icon
//               key={icon.id}
//               title={icon.title}
//               img={icon.img} />)
//           })
//           }

//         </div>

//        <div class="grid-item">
//            <div class="article">b</div>
//            <div class="article">b</div>
//            <div class="article">b</div>
//            <div class="article">b</div>
//        </div>

//       </header>
//     </div>
//   );
// }

export default App;

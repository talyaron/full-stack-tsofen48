import React from "react";

import Card from "./Card";

import './App.css';



const data = [
  {
    name: 'ali',
    img: 'https://picsum.photos/200?random=1',
    meta: 'student',
    desc: 'Ali is SW Student',
  },
  {
    name: 'Tal',
    img: 'https://picsum.photos/200?random=2',
    meta: 'Lecturer',
    desc: 'Tal is React Developer',
  },
  {
    name: 'Tamar',
    img: 'https://picsum.photos/200?random=3',
    meta: 'Lecturer',
    desc: 'Tamar is Backlog Manager',
  },
  {
    name: 'Sam',
    img: 'https://picsum.photos/200?random=4',
    meta: 'friend',
    desc: 'Sam is QA Tester',
  },
  {
    name: 'Yossi',
    img: 'https://picsum.photos/200?random=5',
    meta: 'friend',
    desc: 'Sam is QA Tester',
  },
  {
    name: 'Adam',
    img: 'https://picsum.photos/200?random=6',
    meta: 'friend',
    desc: 'Sam is QA Tester',
  },
];


const App = () => (
  <div
    style={{ background: `#${((1 << 24) * Math.random() | 0).toString(16)}` }}>
    <div className='container' style={{ background: `#${((1 << 24) * Math.random() | 0).toString(16)}` }}>


      {data.map((card, index) => {
        return (
          <Card
            key={index}
            img={card.img}
            name={card.name}
            meta={card.meta}
            desc={card.desc}
            
          />
        )
      })}

    </div>
  </div>
);

const styleLink = document.createElement("link");
styleLink.rel = "stylesheet";
styleLink.href = "https://cdn.jsdelivr.net/npm/semantic-ui/dist/semantic.min.css";
document.head.appendChild(styleLink);



export default App;




import './App.css';
import React from 'react';

//components
import Icon from './components/Icon.js';

const icons = [
  {
    title: 'https://www.linkedin.com/in/alaasaabni/',
    href: 'https://www.linkedin.com/in/alaasaabni/',
    target: '_blank',
    // img: '',
    // innerHTML: 'linkedin'
  },
  {
    title: 'https://github.com/Alaa-S-M',
    href: 'https://github.com/Alaa-S-M',
    target: '_blank',
    // img: '',
    // innerHTML: 'GitHub'
  },
];

const myImgSrc = "https://media-exp1.licdn.com/dms/image/C4E03AQFWZrT9WGRmHA/profile-displayphoto-shrink_400_400/0/1516827527497?e=1616025600&v=beta&t=mppJLKNmcZbNq5TzMGravh3TvnK84LgfqipAdFK2Wgc";

function App() {
  return (
    <div className="App">
      <header className="App-header grid-container">

        <div className="grid-item profile-info">
          <div className='box' style={{backgroundImage:`url(https://www.aviv-flower.co.il/images/2019/03/03/home_a-3.jpg)`}}/>
          <p>
            Alaa Saabni-Mograbi
        </p>
        </div>
        {icons.map((icon, index) => {
          return (
            <Icon
              title={icon.title}
              href={icon.href}
              // innerHTML={icon.innerHTML}
              target={icon.target}
              // img={icon.img}
            />
          );
        })}


      </header>
    </div>
  );
}

export default App;

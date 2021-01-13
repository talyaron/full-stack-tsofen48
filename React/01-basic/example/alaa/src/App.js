import './App.css';
import React from 'react';

//components
import Icon from './components/Icon.js';

const myImgSrc = "https://media-exp1.licdn.com/dms/image/C4E03AQFWZrT9WGRmHA/profile-displayphoto-shrink_400_400/0/1516827527497?e=1616025600&v=beta&t=mppJLKNmcZbNq5TzMGravh3TvnK84LgfqipAdFK2Wgc";
const linkedinLink = "https://www.linkedin.com/in/alaasaabni/";

function App() {
  return (
    <div className="App">
      <header className="App-header grid-container">
        <div className="grid-item">
        </div>
        <div className="grid-item">
          <img src={myImgSrc} className="my-image" alt="me" />
          <p>
            Alaa Saabni-Mograbi
        </p>
        </div>
        <div className="grid-item">
        </div>

        {/* <a
          className="linkedin-link"
          href={linkedinLink}
          target="_blank"
          rel="noreferrer"
          title={linkedinLink}
        >
          linkedin
        </a> */}
        <Icon title="GitHub" className="grid-item"
          img="https://ddo0fzhfvians.cloudfront.net/uploads/icons/png/11294940381579518946-512.png" />
        <Icon title="GitHub" className="grid-item"
          img="https://ddo0fzhfvians.cloudfront.net/uploads/icons/png/11294940381579518946-512.png" />
        <Icon title="GitHub" className="grid-item"
          img="https://ddo0fzhfvians.cloudfront.net/uploads/icons/png/11294940381579518946-512.png" />

      </header>
    </div>
  );
}

export default App;

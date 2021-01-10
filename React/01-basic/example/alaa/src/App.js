// import myImg from './logo.svg';
import './App.css';

const myImgSrc = "https://media-exp1.licdn.com/dms/image/C4E03AQFWZrT9WGRmHA/profile-displayphoto-shrink_400_400/0/1516827527497?e=1616025600&v=beta&t=mppJLKNmcZbNq5TzMGravh3TvnK84LgfqipAdFK2Wgc";
const linkedinLink = "https://www.linkedin.com/in/alaasaabni/";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={myImgSrc} className="my-image" alt="me" />
        <p>
          Alaa Saabni-Mograbi
        </p>
        <a
          className="linkedin-link"
          href={linkedinLink}
          target="_blank"
          rel="noreferrer"
          title={linkedinLink}
        >
          linkedin
        </a>
      </header>
    </div>
  );
}

export default App;

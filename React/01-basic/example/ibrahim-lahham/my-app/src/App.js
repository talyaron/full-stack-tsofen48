import logo from './logo.svg';
import './App.css';

//components
import Card from './view/components/Card/Card';

const name = 'Mhmd';

function App() { //component
  return (
    <div className="App">
      <header className="App-header">
       
        <p>
       <h1> Iris (plant)</h1>
        </p>
        <div className="container">
        <Card title='Blue Magic flower' img='https://www.homestratosphere.com/wp-content/uploads/2018/05/iris-hollandica-052918-min.jpg' value="These flowers are deep purple and have bright yellow blotches on its falls. Best when grown in full sun and in medium moisture, the Blue Magic grows up to 26 inches tall and is deer and rabbit resistant." />
        <Card title='Casablanca' img='https://www.homestratosphere.com/wp-content/uploads/2018/05/casablanca-iris-052918-min.jpg' value="With clump-forming, bright violet blue petals, deep purple veins, and pale yellow bases, they can grow up to three feet tall and two feet wide."/>
        <Card title='Professor Blaauw flower' img='https://www.homestratosphere.com/wp-content/uploads/2018/05/variegata-iris-052918-min.jpg' value="This flower has lavender blooms with dark purple veins and yellow throats, and they bloom in early- to mid-summer. " />
        <Card title='ba' img='https://isteam.wsimg.com/ip/363b4a4a-9dc4-11e4-89cd-14feb5d9f2e6/ols/32_original/:/rs=w:600,h:600' value="With white petals and bright yellow falls, they bloom in late spring to early summer and have won several international flower awards"/>

        </div>
        <h2>Learn to code</h2>
      </header>
    </div>
  );
}

export default App;

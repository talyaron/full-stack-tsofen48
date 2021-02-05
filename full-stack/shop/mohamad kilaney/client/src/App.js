import logo from './logo.svg';
import './App.css';
import { useState, useEffect } from 'react';

function App() {
  const [product , setProduct] = useState([]);

  useEffect(() => {
    fetch('/get-product')
      .then(r => r.json())
      .then(data => {
        setProduct(data);
      })
  }, [])

  function handler(e){
    const pri = document.getElementById("aa").innerHTML;
    console.log(pri);
  }
  
  return (
    <div className="App">
      {product.map((list , index)=>{
        return(<div  key={index}><h1 id='aa'>{list.productId}</h1><button onClick={handler}>bay</button></div>)
      })}
    </div>
  );
}

export default App;

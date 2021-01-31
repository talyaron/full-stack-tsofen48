import "./App.css";
import Gift from "./components/Gift";
import { useEffect, useState } from "react";

function App() {
  const [gift, setGift] = useState([]);

  // i have problem with the server and didnt have a time to solve this problem , but i did the functions but didnt be able to check the application with the server becuase there is no time
  useEffect(() => {
        fetch('/get-gifts')
            .then(r => r.json())
            .then(data => {
              setGift(data.gifts);
            });

  }, []);
 
  function handleCartClick(){
    if (localStorage.getItem('user_already_baught')) {
            fetch('/get-remain-gifts')
            .then(r => r.json())
            .then(data => {
              setGift(data.gifts);
            });
  };
  localStorage.setItem('user_already_baught', true);
}
          
  return (
    <body>
    <div className="container">
      <h1 id="gift_select">available gifts</h1>
      
      {gift.map(gift => {
        return(
        <Gift img={gift.src}
          price={gift.price} 
          />)
      })}
      <button className='goto_cart' onClick={handleCartClick()}>got to cart</button>


    </div>
    </body>

  );
}



export default App;

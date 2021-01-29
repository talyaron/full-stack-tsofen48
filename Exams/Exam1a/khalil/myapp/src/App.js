import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [credit, setCredit] = useState();

  let products = [{ id: 1, price: 30, image: 'https://icons-for-free.com/iconfiles/png/512/christmas+gift+gift+box+present+icon-1320184382640199846.png', status: false },
  { id: 2, price: 20, image: 'https://icons-for-free.com/iconfiles/png/512/christmas+gift+gift+box+present+icon-1320184382640199846.png', status: true },
  { id: 3, price: 10, image: 'https://icons-for-free.com/iconfiles/png/512/christmas+gift+gift+box+present+icon-1320184382640199846.png', status: false }]

  // useEffect(() => {
  //   fetch('/get-credit')
  //     .then(r => r.json())
  //     .then(data => {
  //       console.log(data);
  //       setCredit(data);
  //     })
  // }, [])


  function handleSubmit(price) {
    // const requestOptions = {
    //   method: 'POST',
    //   headers: { 'Content-Type': 'application/json' },
    //   body: JSON.stringify({credit: '30'})
    // };
    // fetch('/set-credit', requestOptions)
    // .then(response => response.json())
    // .then(data => this.setState({ postId: data.id }));
    console.log(price);
    useEffect(() => {
      setCredit(price);
    });
    //setCredit(price);
  }

  return (
    <div className="Home">
      <div className='Credit'>
        <p>Credit: {credit}</p>
      </div>
      <div className="ProductsList">
        {products.map((product, index) => (
          <div className='Product' key={product.id}>
            <p>{product.price} </p>
            <img src={product.image} alt=''></img>
            <button onClick={() => handleSubmit(30)}>Add</button>
          </div>
        ))}
      </div>

      <div className="Cart">
        {products.filter(product => product.status === true).map((product, index) => (
          <div className='Product' key={product.id}>
            <p>{product.price}</p>
            <img src={product.image} alt=''></img>
            <button onClick={handleSubmit(30)}>Add</button>
          </div>
        ))}
        <div>
        <button onClick={() => handleSubmit(30)}>Pay</button>
        </div>
      </div>
      <div className="Pay">
        <p>Total sum available: {credit}</p>
      </div>

    </div>
  );
}

export default App;

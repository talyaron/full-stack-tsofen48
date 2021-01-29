import React, { useState } from "react";
import './Gift.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card, Button } from 'react-bootstrap';

function Gift(props) {




  // Set the initial count state to zero, 0
  const [price, setPrice] = useState(0);
  const [added,setAdded] = useState(false);

  function handleClick(){
    setAdded(true);

  }


  
  const data = props.info;
  return (
    <Card style={{ width: '18rem' }}>
    <Card.Img variant="top" src="https://source.unsplash.com/user/erondu/600x400" />
    <Card.Body>
      <Card.Title>{data.name}</Card.Title>
      <Card.Text>
        Price = {data.price}
        {/* {data.desc}
        {data.img}
        {data.id} */}
      </Card.Text>
     
    </Card.Body>
  </Card>
  );
}

export default Gift;

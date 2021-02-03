import React, { useState } from "react";
import "./CatCard.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Card, Button } from "react-bootstrap";

function CatCard(props) {
  const data = props.info;
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src={data.imgSrc} />
      <Card.Body>
        <Card.Title>{data.name}</Card.Title>
        <Card.Text>
          Age = {data.age}
          {/* {data.desc}
        {data.img}
        {data.id} */}
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

export default CatCard;

import React, { useState } from "react";
import "./UserCard.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Card, Button } from "react-bootstrap";

function UserCard(props) {
  const data = props.info;
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src={data.imgSrc} />
      <Card.Body>
        <Card.Title>{data.name}</Card.Title>
        <Card.Text></Card.Text>
      </Card.Body>
    </Card>
  );
}

export default UserCard;

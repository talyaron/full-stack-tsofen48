import React from "react";
import "./BookCard.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Card } from "react-bootstrap";

function BookCard(props) {
  const data = props.info;

  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src={data.img} />
      <Card.Body>
        <Card.Title>{data.name}</Card.Title>
        <Card.Text>
          author : {data.author}
          <br />
          year : {data.year}
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

export default BookCard;

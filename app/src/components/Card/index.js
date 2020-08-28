import React from "react";
import "./style.css";

function Card(props) {
  return (
    // When a card div is clicked, it calls the userGuess function
    // and passes the card's id as a parameter
    <div className="card" onClick={() => props.userGuess(props.id)}>
      <div className="img-container">
        <img alt={props.name} src={props.image} />
      </div>
    </div>
  );
}

export default Card;
import React from "react";

const Card = (props) => {
  return (
    <div className='card-display'>

      <img src={props.card.image} alt={props.card.name} />

      <h2>{props.card.name}</h2>

      <p>{props.card.full_meaning}</p>

    </div>
  );
};

export default Card;

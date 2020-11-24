import React from "react";

const Card = (props) => {
  console.log(props);
  return (
    <div>
    	<img src="./img/crystal-ball.png" />
      <img src={props.cards.image} />
      <h2>{props.cards.name}</h2>
      <p>lalalalal</p>
    </div>
  );
};

export default Card;

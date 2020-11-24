import React, { useState } from "react";
import { Link } from "react-router-dom";

const FinalReading = (props) => {
  const [cardDetails, setCardDetails] = useState({
    header: "Hover over cards to see their details",
    img: "",
    name: "",
    summary: "",
    index: ''
  });

  const [index, setIndex] = useState(null)

  const showCardDetails = (card, index) => {
    setCardDetails(card);
    setIndex(index)
    console.log('key', index)
  };

  const cardNames = [ 
    'The Heart', 
    'The Crossing',
    'The Conscience',
    'The Subconscience',
    'The Past',
    'The Future'
  ]

  const cardList = props.cardCollection.map((ele, index) => {
    return (
      <img
        src={ele.image}
        alt={ele.name}
        id={`card${index}`}
        key={index}
        className="fr-cards"
        onMouseEnter={() => showCardDetails(ele, index)}
      />
    );
  });

  return (
    <div>
      <h3>Your Reading - Hover over cards to see their details</h3>
      <div id="reading-container">
        <div id="card-container">{cardList}</div>
        <div id="card-details">
          <h2>{cardNames[index]}</h2>
          <h3>{cardDetails.name}</h3>
          <img src={cardDetails.image} alt={cardDetails.name} />
          <p>{cardDetails.full_meaning}</p>
        </div>
      </div>
      <Link to='/'><button id='begin-again-button'>Perform Another Reading</button></Link>
    </div>
  );
};

export default FinalReading;

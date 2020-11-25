import React, { useState } from "react";
import { Link } from "react-router-dom";
import HomeCardDisplay from './HomeCardDisplay'

const FinalReading = (props) => {

  const [cardDetails, setCardDetails] = useState({
    img: "",
    name: "",
    summary: "",
    index: ''
  });

  const [showCard, setShowCard] = useState(false)

  const [index, setIndex] = useState(null)

  const toggleCardDisplay = (set) => {
    
    setShowCard(set)
  }

  const showCardDetails = (card, index) => {

    setCardDetails(card);
    setIndex(index)
    toggleCardDisplay(true)
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
        onClick={() => showCardDetails(ele, index)}
      />
    );
  });

  return (
    <div>
      <h3>Your Reading</h3>
    
      <div id="card-container">{cardList}</div>
        
      <HomeCardDisplay card={cardDetails} show={showCard} toggleCardDisplay={toggleCardDisplay}/>

      <Link to='/'><button id='begin-again-button'>Perform Another Reading</button></Link>
    </div>
    
  );
};

export default FinalReading;

// <div id="card-details">
//           <h2>{cardNames[index]}</h2>
//           <h3>{cardDetails.name}</h3>
//           <img src={cardDetails.image} alt={cardDetails.name} />
//           <p>{cardDetails.full_meaning}</p>
//         </div>
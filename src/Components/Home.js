import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import HomeCardDisplay from './HomeCardDisplay'

const Home = () => {

  const [cardList, setCardList] = useState([])
  const [cardDisplay, setCardDisplay] = useState('')
  const [showCard, setShowCard] = useState(false)
  
  useEffect( () => {
    let cardURL = `https://tarot.howlcode.com/api/v1//spreads/shuffled`;

    const makeApiCall = async () => {
      const res = await fetch(cardURL);
      const json = await res.json();

      setCardList(json);
    }

    makeApiCall();
  }, [])

   const showAllCards = cardList.map((ele, index) => {
    return(

      <img 
        src={ele.image} 
        alt={ele.name} 
        onClick={()=>handleCardClick(ele)}
      />
    )
  })

  const toggleCardDisplay = (set) => {
    setShowCard(set)
  }

  const handleCardClick = (card) => {
    
    setCardDisplay(card)
    toggleCardDisplay(true)
  }

  return (
    <div>
      <h3 id='welcome-text'>
        Welcome... This site will lead you through a self-guided tarot reading.</h3> 
      <h3>The cards are not meant to predict the future. Rather, they are a tool for self-examination. 
      </h3>
      <p>
        In your reading, you will draw 6 cards to comprise a traditional Celtic Cross formation. 
      </p>
      <p>
        Each card depicts a figure or scene that represents a universal concept. By considering the meaning of the card within the concext of our own lives, we  gain insight on issues that matter to us.</p>
      <p>
        It's important that the person who the reading is for clicks the button to draw the cards. In a normal reading, the participant shuffles the cards beforehand - in each case you are imparting an influence that makes the reading uniquely yours. 
        </p>
        <p>It may seem like a small thing, but there is a reason
        that you happen to put the cards in a certain order or click the button
        at a certain moment...
      </p>
      <Link to="/card1">
        <button id='begin-button'>Begin</button>
      </Link>

      <HomeCardDisplay card={cardDisplay} show={showCard} toggleCardDisplay={toggleCardDisplay}/>
      
      <div id='card-container'>
        {showAllCards}
      </div>
    </div>
  );
};

export default Home;



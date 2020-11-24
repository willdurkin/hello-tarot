import React, { useState } from "react";
import CardButton from "./CardButton";
import Card from "./Card";
import { Link } from "react-router-dom";

const Card1 = (props) => {
  const [card, setCard] = useState("");
  const [introText, setIntroText] = useState(true);

  const addToCardCollection = (card) => {
    props.addToCardCollection(card);
  };

  const handleClick = (card) => {
    setCard(card);
    addToCardCollection(card);
    setIntroText(false);
  };

  return (
    <div>
      <h3>The Heart Card</h3>
      <div className={introText === true ? "" : "hide"}>
        <p>
          The first card in the reading represents the "heart" or core of an
          issue or situation you are experiencing.
        </p>
        <p>
          After picking a card, think about what aspects of it resonate with
          you - Does it remind you of a recent experience? A person in your life? Does it represent a quality that you have or perhaps are lacking? 
        </p>
        <p>
          Remember that the description provided is only one person's
          interpretation of the scenario shown on the card. Take note of the figures and the scene's environment. You may find
          yourself drawing a different meaning from the image - trust your intuition...
        </p>
      </div>
      <CardButton handleClick={handleClick} card={card} />
      <Card card={card} />
      <div className={introText === true ? "hide" : "show"}>
        <Link to="/card2">
          <button>Next Card</button>
        </Link>
      </div>
    </div>
  );
};

export default Card1;

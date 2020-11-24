import React, { useState } from "react";
import CardButton from "./CardButton";
import Card from "./Card";
import { Link } from "react-router-dom";

const Card2 = (props) => {
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
      <h3>The Crossing Card</h3>
      <div className={introText === true ? "" : "hide"}>
        <p>
          The second card in a reading represents something that is acting as an influence or blocker on the heart of the matter.
        </p>
      </div>
      <CardButton handleClick={handleClick} card={card} />
      <Card card={card} />
      <div className={introText === true ? "hide" : "show"}>
        <Link to="/card3">
          <button>Next Card</button>
        </Link>
      </div>
    </div>
  );
};

export default Card2;

import React, { useState } from "react";
import CardButton from "./CardButton";
import Card from "./Card";
import { Link } from "react-router-dom";

const Card5 = (props) => {
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
      <h3>The Past</h3>
      <div className={introText === true ? "" : "hide"}>
        <p>The fifth card represents your past state. That which was.</p>
      </div>
      <CardButton handleClick={handleClick} card={card} />
      <Card card={card} />
      <div className={introText === true ? "hide" : "show"}>
        <Link to="/card6">
          <button>Next Card</button>
        </Link>
      </div>
    </div>
  );
};

export default Card5;

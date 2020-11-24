import React, { useState } from "react";
import CardButton from "./CardButton";
import Card from "./Card";
import { Link } from "react-router-dom";

const Card6 = (props) => {
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
      <h3>The Future</h3>
      <div className={introText === true ? "" : "hide"}>
        <p>The sixth card represents your future state. That which could or will be.</p>
      </div>
      <CardButton handleClick={handleClick} card={card} />
      <Card card={card} />
      <div className={introText === true ? "hide" : "show"}>
        <Link to="/final-reading">
          <button>See Your Reading</button>
        </Link>
      </div>
    </div>
  );
};

export default Card6;

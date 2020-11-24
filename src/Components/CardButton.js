import React, { useState } from "react";

const CardButton = (props) => {
  const [clickState, setClickState] = useState(true);

  const handleClick = () => {
    let cardURL = `https://tarot.howlcode.com/api/v1//spreads/random_card`;

    const makeApiCall = async () => {
      const res = await fetch(cardURL);
      const json = await res.json();
      console.log("api call", json);
      props.handleClick(json[0]);
    };

    makeApiCall();
    console.log("after fetch");

    setClickState(false);
  };

  return (
    <button onClick={handleClick} className={clickState === true ? "" : "hide"}>
      Pick a Card
    </button>
  );
};

export default CardButton;

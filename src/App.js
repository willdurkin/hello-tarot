import React, { useState, useEffect } from "react";
import "./styles.css";
import Card from "./Components/Card";

export default function App() {
  const [cards, setCards] = useState("");
  const [click, setClick] = useState({
    count: 0
  });

  useEffect(() => {
    // let cardsURL = `https://rws-cards-api.herokuapp.com/api/v1/cards/random`;
    let cardsURL = `https://tarot.howlcode.com/api/v1//spreads/random_card`;

    const makeApiCall = async () => {
      const res = await fetch(cardsURL);
      const json = await res.json();
      console.log(json);
      setCards(json[0]);
      console.log("cards state", cards);
    };
    makeApiCall();
    console.log("after fetch");
  }, [click]);

  const handleClick = () => {
    setClick(click + 1);
    console.log(click);
  };

  return (
    <div className="App">
      <h1>Hello Tarot</h1>
      <div>
        <button onClick={handleClick}>Pick a Card</button>
      </div>
      <Card cards={cards} />
    </div>
  );
}

import React, { useState, useEffect } from "react";
import "../styles.css";
import Header from "./Header";
import Main from "./Main";

export default function App() {
  return (
    <div className="App">
      <Header />
      <Main />
    </div>
  );
}

///OLD CODE////////////////

// useEffect(() => {
//   // let cardsURL = `https://rws-cards-api.herokuapp.com/api/v1/cards/random`;
//   let cardsURL = `https://tarot.howlcode.com/api/v1//spreads/random_card`;

//   const makeApiCall = async () => {
//     const res = await fetch(cardsURL);
//     const json = await res.json();
//     console.log(json);
//     setCards(json[0]);
//     console.log('cards state', cards);
//   };
//   makeApiCall();
//   console.log("after fetch");
// }, [click]);

  // const [cards, setCards] = useState("");
  // const [click, setClick] = useState({
  //   count: 0
  // });

  // const handleClick = () => {

  //   let cardsURL = `https://tarot.howlcode.com/api/v1//spreads/random_card`;

  //   const makeApiCall = async () => {
  //     const res = await fetch(cardsURL);
  //     const json = await res.json();
  //     console.log(json);
  //     setCards(json[0]);
  //     console.log("cards state", cards);
  //   };
  //   makeApiCall();
  //   console.log("after fetch");
  // };
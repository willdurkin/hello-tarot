import React, { useState } from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./Home";
import Card1 from "./Card1";
import Card2 from "./Card2";
import Card3 from "./Card3";
import Card4 from "./Card4";
import Card5 from "./Card5";
import Card6 from "./Card6";
import FinalReading from "./FinalReading";

const Main = () => {
  const [cardCollection, setCardCollection] = useState([]);

  const addToCardCollection = (card) => {
    console.log("card2222", card);
    setCardCollection([...cardCollection, card]);
  };

  return (
    <main>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route
          path="/card1"
          render={(props) => (
            <Card1 {...props} addToCardCollection={addToCardCollection} />
          )}
        />
        <Route
          path="/card2"
          render={(props) => (
            <Card2 {...props} addToCardCollection={addToCardCollection} />
          )}
        />
        <Route
          path="/card3"
          render={(props) => (
            <Card3 {...props} addToCardCollection={addToCardCollection} />
          )}
        />
        <Route
          path="/card4"
          render={(props) => (
            <Card4 {...props} addToCardCollection={addToCardCollection} />
          )}
        />
        <Route
          path="/card5"
          render={(props) => (
            <Card5 {...props} addToCardCollection={addToCardCollection} />
          )}
        />
        <Route
          path="/card6"
          render={(props) => (
            <Card6 {...props} addToCardCollection={addToCardCollection} />
          )}
        />
        <Route
          path="/final-reading"
          render={(props) => (
            <FinalReading {...props} cardCollection={cardCollection} />
          )}
        />
      </Switch>
    </main>
  );
};

export default Main;

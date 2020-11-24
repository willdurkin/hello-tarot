import React from "react";
import crystalBall from '../img/crystal-ball.png'

const Header = () => {
  return (
  	<div id='header'>
  		<img src={crystalBall} />
  		<h1>Hello Tarot</h1>
  		<img src={crystalBall} />
  	</div>
  )
};

export default Header;

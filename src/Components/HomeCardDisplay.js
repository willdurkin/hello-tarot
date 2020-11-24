import React, { useState } from 'react'

const HomeCardDisplay = (props) => {

	const [display, setDisplay] = useState(props.showCard)

	console.log('home-card-display', props)

	const handleClick = () => {
		props.toggleCardDisplay(false)
	}

	return (
		<div className={`${props.show === false ? "hide-home-card" : "show-home-card"} home-card-display`} >

		  <button onClick={()=>handleClick()} >X</button>

		  <h2>{props.card.name}</h2>

		  <img src={props.card.image} alt={props.card.name} />
		  
		  <p>{props.card.full_meaning}</p>

		</div>
	)
}

export default HomeCardDisplay

// className={display === false ? "hide" : "show"}
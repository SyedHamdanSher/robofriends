import React from 'react';

const Card = (probs) => {
	return (
		<div className = 'bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5'>
			<img alt='robophoto' src={`https://robohash.org/${probs.id}?200x200`} />
			<div>
				<h2>{probs.name}</h2>
				<p>{probs.email}</p>
			</div>
		</div>
	);
}
export default Card;
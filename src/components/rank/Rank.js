import React from 'react';

const Rank = ({name, entries}) =>{

	return(
		<div className="tc">
			<p className="f3 mb1">{`${name} has submitted`}</p>
			<p className="f1 mt1">{`${entries} photos`}</p>
		</div>
	);
}

export default Rank;
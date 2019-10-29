import React from 'react';
import Tilt from 'react-tilt';
import './Logo.css';
import Icon from './eye.png';

const Logo = () => {

	return(
		<div className="ma4 mt0">
			<Tilt className="Tilt shadow-5 flex justify-center items-center" options={{ max : 40 }} style={{ height: 120, width: 120 }} >
 				<div className="Tilt-inner "><img alt="icon" src={Icon}/></div>
			</Tilt>
		</div>
	);
}

export default Logo;
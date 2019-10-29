import React from 'react';
import Logo from '../logo/Logo';

const Navigation = () =>{

	return(
		<nav className="flex justify-between ma3">
			<Logo/>
			<p className="f3 link dim black underline pa3 pointer">{'Sign In'}</p>
		</nav>
	);
}

export default Navigation;
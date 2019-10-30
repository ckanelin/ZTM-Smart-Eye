import React from 'react';
import Logo from '../Logo/Logo';

const Navigation = ({onChangeRoute, route}) =>{

	if(route === 'home'){
		return(
			<nav className="flex justify-between ma3">
			<Logo/>
			<p 
				className="f3 link dim black underline pa3 pointer"
				onClick = {() => onChangeRoute('signIn')}>
			{'Sign Out'}
			</p>
		</nav>
		);
	}else {
		return(
			<nav className="flex justify-between ma3">
				<Logo/>
				<div className="flex">
					<p 
						className="f3 link dim black underline pa3 pointer"
						onClick = {() => onChangeRoute('signIn')}>
					{'Sign In'}
					</p>
					<p 
						className="f3 link dim black underline pa3 pointer"
						onClick = {() => onChangeRoute('register')}>
					{'Register'}
					</p>
				</div>
			</nav>
		);
	}
}

export default Navigation;
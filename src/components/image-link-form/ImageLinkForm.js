import React from 'react';
import './ImageLinkForm.css';

const ImageLinkForm = ({onChangeInput, onPressSubmit}) =>{

	return(
		<div className="flex justify-center">
			<div className="Form flex justify-center pa3 br3 "> 
				<input 
					className="w-80 br3 ba b--white bw mr3 pa1" 
					type='text'	
					onChange={onChangeInput}
				/>
				<button 
					className="f4 br3 white bold ba b--white pa1 bg-light-pink pa1 grow"
					onClick={onPressSubmit}
				>Detect</button>
			</div>
		</div>
	);
}

export default ImageLinkForm;
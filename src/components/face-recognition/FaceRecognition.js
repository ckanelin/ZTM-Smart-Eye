import React from 'react';

const FaceRecognition = ({imageURL}) => {

	return(
		<div className="ma3">
			<img id="faceImage" alt="" src={imageURL} width='500px' height='auto' />
		</div>
	);
}

export default FaceRecognition;
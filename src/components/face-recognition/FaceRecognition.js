import React from 'react';
import './FaceRecognition.css';

const FaceRecognition = ({box, imageURL}) => {

	return(
		<div className="flex justify-center">
			<div className="absolute ma3">
				<img 
					id="faceImage" 
					alt="" 
					src={imageURL} 
					width='500px' 
					height='auto' 
				/>
				<div
					className="bounding-box"
					style={{top: box.topRow, right: box.rightCol, bottom: box.bottomRow, left: box.leftCol}}
				>
				</div>
			</div>
		</div>
	);
}

export default FaceRecognition;
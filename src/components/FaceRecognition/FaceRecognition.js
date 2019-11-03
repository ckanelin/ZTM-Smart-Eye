import React from 'react';
import './FaceRecognition.css';

const FaceRecognition = ({boxes, imageURL}) => {

	const boxRegions = boxes.map(box => {

		return(
			<div 
				key = {boxes.indexOf(box)}
				className="bounding-box"
				style={{top: box.topRow, right: box.rightCol, bottom: box.bottomRow, left: box.leftCol}}
			>
			</div>
		);
	})

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
				{boxRegions}
			</div>
		</div>
	);
}

export default FaceRecognition;
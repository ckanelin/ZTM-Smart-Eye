import React, {Component} from 'react';
import Particles from 'react-particles-js';
import Navigation from './components/navigation/Navigation';
import Rank from './components/rank/Rank';
import ImageLinkForm from './components/image-link-form/ImageLinkForm';
import FaceRecognition from './components/face-recognition/FaceRecognition';

import './App.css';
//Clarifai
import Clarifai from 'clarifai';

const params = 
{
  "particles": {
      "number": {
          "value": 200
      },
      "size": {
          "value": 3
      }
  },
}

const app = new Clarifai.App({
 apiKey: 'a89150d6debf4cfcbb8bbe152e0532de'
});


class App extends Component {

  constructor(){
    super();
    this.state = {
      input: "",
      imageURL: "",
      box: {}
    }

    this.onChangeInput = this.onChangeInput.bind(this);
    this.onPressSubmit = this.onPressSubmit.bind(this);
  }

  calculateBoxes = (data) => {
    const box = data.outputs[0].data.regions[0].region_info.bounding_box;
    const image = document.getElementById('faceImage');
    const width = Number(image.width);
    const height = Number(image.height);

    const leftX = Math.round(width * box.left_col);
    const rightX = Math.round(width * box.right_col);
    const topY = Math.round(height * box.top_row);
    const bottomY = Math.round(height * box.bottom_row);

    return{
      topLeft: {
        x: leftX,
        y: topY
      },
      topRight:{
        x: rightX,
        y: topY
      },
      bottomLeft: {
        x: leftX,
        y: bottomY
      },
      bottomRight: {
        x: rightX,
        y: bottomY
      },
    }

  }

  setBox = (box) => {
    this.setState({box: box});
  }

  onChangeInput = (event) => {
    this.setState({input: event.target.value});

  }

  onPressSubmit = () => {
    const {input} = this.state;

    this.setState({imageURL: input});

    app.models.predict(Clarifai.FACE_DETECT_MODEL, input)
    .then( response => this.setBox(this.calculateBoxes(response)) )
    .catch(err => console.log(err));
  
  }

  render(){
    const {box, imageURL} = this.state;

    return (
      <div className="App">
        <Particles 
          className="particles" 
          params={params}
        />
        <Navigation/>
        <div className="f2 tc">
          <h1>
            {'SMART EYE'}
          </h1>
        </div>
        <Rank/>
        <ImageLinkForm 
          className="tc"
          onChangeInput={this.onChangeInput}
          onPressSubmit={this.onPressSubmit}
        />
        <FaceRecognition box={box} imageURL={imageURL}/>
      </div>
    );
  }
}

export default App;

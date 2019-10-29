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
      imageURL: ""
    }

    this.onChangeInput = this.onChangeInput.bind(this);
    this.onPressSubmit = this.onPressSubmit.bind(this);
  }

  onChangeInput(event){
    this.setState({input: event.target.value});

  }

  onPressSubmit(){
    const {input} = this.state;

    this.setState({imageURL: input});

    app.models.predict(Clarifai.FACE_DETECT_MODEL, input).then(
      function(response) {
        console.log(response.outputs[0].data.regions);
      },
      function(err) {
        // there was an error
      }
    );
  }

  render(){
    const {imageURL} = this.state;

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
        <FaceRecognition imageURL={imageURL}/>
      </div>
    );
  }
}

export default App;

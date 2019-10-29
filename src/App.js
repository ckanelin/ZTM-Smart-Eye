import React from 'react';
import Particles from 'react-particles-js';
import Navigation from './components/navigation/Navigation';
import Rank from './components/rank/Rank';
import ImageLinkForm from './components/image-link-form/ImageLinkForm';

import './App.css';

const params = 
{
  "particles": {
      "number": {
          "value": 60
      },
      "size": {
          "value": 3
      }
  },
}

function App() {
  return (
    <div className="App">
      <Particles className="particles" params={params}/>
      <Navigation/>
      <div className="f2 tc">
        <h1>
          {'SMART EYE'}
        </h1>
      </div>
      <Rank/>
      <ImageLinkForm className="tc"/>
      {/*
        <Rank/>
        <ImageRecognization/>
        */
      }
    </div>
  );
}

export default App;

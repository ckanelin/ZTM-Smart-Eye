import React, {Component} from 'react';
import Particles from 'react-particles-js';
import Navigation from './components/navigation/Navigation';
import Rank from './components/rank/Rank';
import ImageLinkForm from './components/image-link-form/ImageLinkForm';

import './App.css';

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

class App extends Component {

  constructor(){
    super();
    this.state = {
      input: ''
    }
  }

  onChangeInput(event){
    console.log(event.target.value);
  }

  onPressSubmit(){
    console.log('click');
  }

  render(){
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
      </div>
    );
  }
}

export default App;

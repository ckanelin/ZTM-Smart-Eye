import React, {Component} from 'react';
import Particles from 'react-particles-js';
import SignIn from './components/SignIn/SignIn';
import Register from './components/Register/Register';
import Navigation from './components/Navigation/Navigation';
import Rank from './components/Rank/Rank';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm';
import FaceRecognition from './components/FaceRecognition/FaceRecognition';

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
      input: '',
      imageURL: "",
      boxes: [],
      route: 'signIn',
      user:{
        id: '',
        name: '',
        email: '',
        password: '',
        entries: 0,
        date: ''
      }
    }
    this.onChangeInput = this.onChangeInput.bind(this);
    this.onPressSubmit = this.onPressSubmit.bind(this);
  }

//[0].region_info.bounding_box
  calculateBoxes = (data) => {
    const boxes = data.outputs[0].data.regions;
    const image = document.getElementById('faceImage');
    const width = Number(image.width);
    const height = Number(image.height);

    let boxRegions = [];

    for(let i = 0; i < boxes.length; i++){
      let box = boxes[i].region_info.bounding_box;
      boxRegions.push({
        leftCol: Math.round(width * box.left_col),
        rightCol: width - Math.round(width * box.right_col),
        topRow: Math.round(height * box.top_row),
        bottomRow: height - Math.round(height * box.bottom_row)
      })
    }
    return boxRegions

  }

  setBox = (boxes) => {
    this.setState({boxes: boxes});
  }

  onChangeInput = (event) => {
    this.setState({input: event.target.value});

  }

  onPressSubmit = () => {
    const {input} = this.state;

    this.setState({imageURL: input});

    app.models.predict(Clarifai.FACE_DETECT_MODEL, input)
    .then( response => {
      if(response){
        fetch('http://localhost:3000/image',{
          method: 'put',
          headers: {'Content-Type':'application/json'},
          body: JSON.stringify({
            id: this.state.user.id
          })
        })
        .then(response => response.json())
        .then(count => {
          this.setState(Object.assign(this.state.user, {entries:count}))
        })
      }
      this.setBox(this.calculateBoxes(response)) })
    .catch(err => console.log(err));
  
  }

  onChangeRoute = (route) =>{
    this.setState({route: route});
  }

  onUpdateUser = (user) => {
    this.setState({user: 
      {
      id: user.id,
      name: user.name,
      email: user.email,
      password: user.password,
      entries: user.entries,
      date: user.date
      }
    })
  }

  render(){
    const {boxes, imageURL, route} = this.state;
    const {name, entries} = this.state.user;


    return (
      <div className="App">
        <Particles 
          className="particles" 
          params={params}
        />
        <Navigation onChangeRoute={this.onChangeRoute} route={route}/>
        {
          route === 'signIn' ? 
          <SignIn 
            onChangeRoute={this.onChangeRoute}
            onUpdateUser={this.onUpdateUser}
          /> :

          route === 'register'?
          <Register 
            onChangeRoute={this.onChangeRoute} 
            onUpdateUser={this.onUpdateUser} 
          /> :

          <div>
            <div className="f2 tc">
              <h1>
                {'SMART EYE'}
              </h1>
            </div>
            <Rank name={name} entries={entries}/>
            <ImageLinkForm 
              className="tc"
              onChangeInput={this.onChangeInput}
              onPressSubmit={this.onPressSubmit}
            />
            <FaceRecognition boxes={boxes} imageURL={imageURL}/>
          </div>
        
        }
      </div>
        
    );
  }
}

export default App;

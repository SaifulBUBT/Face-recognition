import React, { Component } from 'react';
import Navigation from './components/Navigation/Navigation';
import Logo from './components/Logo/Logo';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm';
import Rank from './components/Rank/Rank';
import FaceRecognition from './components/FaceRecognition/FaceRecognition';
import Signin from './components/Signin/Signin';
import './App.css';

import Clarifai from 'clarifai';
import Particles from 'react-particles-js';


const app = new Clarifai.App({
  apiKey: '78e9b2fd09884d77be5420d870c85e6e'
 });
 

const particleOptions = {
  particles: {
    number:{
      value:90,
      density:{
        enable: true,
        value_area:800,
      }

    },
    color:{
      value:'#000',
    },
  },
  interactivity:{
    events:{
      onhover:{
        enable:true,
        mode:'repulse',
      }
    }
  }



  }


class App extends Component {
  constructor(){
    super()
    this.state = {
      input: '',
      imageUrl: '',
      box: {},
    }
  }

  calculateFaceLocation = (data) =>{
    console.log(data.outputs[0].data.regions[0].region_info.bounding_box);
    const clarifaiFace = data.outputs[0].data.regions[0].region_info.bounding_box;
    const image = document.getElementById('inputimage');
    const width = Number(image.width);
    const height = Number(image.height)
    // console.log(width, height);
    return {
      leftCol: clarifaiFace.left_col * width,
      topRow: clarifaiFace.top_row * height,
      rightCol: width - (clarifaiFace.right_col * width),
      bottomRow: height - (clarifaiFace.bottom_row * height)
    }
  }

  displayFaceBox = (box) => {
    console.log(box);
    this.setState({
      box: box
    })
  }

  onInputChange = (event) =>{
    
    this.setState({
      input: event.target.value
    })
  }

  onButtonSubmit = () =>{
     
    this.setState({
      imageUrl: this.state.input
    })
    app.models.predict(
      Clarifai.FACE_DETECT_MODEL, 
      this.state.input)
      .then(response => this.displayFaceBox( this.calculateFaceLocation(response)))
      .catch(err => console.log(err));
  }
  render() {
    return (
      <div className="App">

         <Particles className="particles"
              params={particleOptions}
         />

        <Navigation />
        <Signin />
        <Logo />
        <Rank />
        <ImageLinkForm 
          onInputChange={this.onInputChange.bind(this)} 
          onButtonSubmit={this.onButtonSubmit}
        />
        <FaceRecognition imageUrl={this.state.imageUrl} box={this.state.box}/>
       
      </div>
    );
  }
}

export default App;

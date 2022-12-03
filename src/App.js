import React from 'react';
import { Component } from 'react';
import Navigation from './Components/Navigation/Navigation';
import Logo from './Components/Logo/logo'
import ImageLinkForm from './Components/ImageLinkForm/ImageLinkForm';
import Rank from './Components/Rank/Rank';
import './App.css';

class App extends Component{
  constructor () {
    super();
    this.state = {
      input: '',
    }
  }
  onInputChange = (event) => {
    console.log(event.target.value);
  }
  onButtonSubmit = () => {
    console.log('click');
    //App.models.predict("a403429f2ddf4b49b307e318f00e528b", "https://samples.clarifai.com/face-det.jpg").then(
      //function(response) {
        //do something with response
     // },
    //  function(err) {
       // //there was an error
      //}
   // );
  }
  render(){
    return(
      <div className='App'>
        <Navigation/>
        <Logo/>
        <Rank />
        <ImageLinkForm 
          onInputChange={this.onInputChange} 
          onButtonSubmit= {this.onButtonSubmit}
        />
        {/*<FaceRecognition />*/}
      </div>  
    );
  }
}

export default App;

import React, { Component } from 'react';
import '../styles/App.css';
import PlantTest from '../containers/PlantTest'

class App extends Component {
  render() {
    return (
      <div className="ui container">
        <div className="App-header">
          <h2>Plant Identification Tester</h2>
        </div>
        <p className="App-intro">
          Try and provide the common and Latin names for these plants
        </p>
        <PlantTest />
      </div>
    );
  }
}

export default App;

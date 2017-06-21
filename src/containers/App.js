import React, { Component } from 'react';
import '../styles/App.css';
import PlantTest from '../containers/PlantTest'

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Welcome to RHS Plant Identification Tester</h2>
        </div>
        <p className="App-intro">
          This will test you on plants
        </p>
        <PlantTest />
      </div>
    );
  }
}

export default App;

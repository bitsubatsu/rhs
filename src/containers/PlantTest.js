import React, { Component } from 'react';
import Question from '../components/Question'

class PlantTest extends Component {
  constructor() {
    super();
    this.state = {
      questionArray : 
      [
        {
          id: 1,
          imageUrl: 'https://www.ornamental-trees.co.uk/images/products/zoom/1336491398-44765300.jpg',
          commonName: 'Box',
          latinName: 'Buxus Sempervirens'
        },
        {
          id: 2,
          imageUrl: 'https://www.ornamental-trees.co.uk/images/products/zoom/1336491398-44765300.jpg',
          commonName: 'Hawthorn',
          latinName: 'Cretageous Monogyna'
        }
      ]
    }
  }
  render() {
    return (
      <div>
        <Question questionParts={this.state.questionArray} />
      </div>
    );
  }
}

export default PlantTest;
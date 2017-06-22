import React, { Component } from 'react';
import Question from '../components/Question'

class PlantTest extends Component {
  constructor() {
    super();
    this.state = {
        currentQuestion : 0,
        questions : 
            [
                {
                id: 1,
                imageUrl: 'https://www.ornamental-trees.co.uk/images/products/zoom/1336491398-44765300.jpg',
                commonName: 'Box',
                latinName: 'Buxus Sempervirens'
                },
                {
                id: 2,
                imageUrl: 'https://www.planetherbs.com/images/hawthornfruit-2.jpg',
                commonName: 'Hawthorn',
                latinName: 'Cretageous Monogyna'
                }
            ]
    }
  }

  onNext = () => {
        this.setState({
            currentQuestion : (this.state.currentQuestion + 1) %2
        });
    }

  render() {
    return (
      <div>
        Question: {this.state.questions[this.state.currentQuestion].id}
        <Question onNext = {this.onNext}
                  imageUrl={this.state.questions[this.state.currentQuestion].imageUrl}
                  commonName={this.state.questions[this.state.currentQuestion].commonName}
                  latinName={this.state.questions[this.state.currentQuestion].latinName} />

      </div>
    );
  }
}

export default PlantTest;
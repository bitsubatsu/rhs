import React, { Component } from 'react';
import Question from '../components/Question'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';


import Actions from '../actions';

class PlantTest extends Component {

  onNext = () => {
    console.log('PlantTest::onNext');
    this.props.actions.nextQuestion();
  }

  render() {

    const { current_question } = this.props;
    const { questions } = this.props;

    return (
      <div>
        Question: {questions[current_question].id}
        <Question onNext={this.onNext}
          imageUrl={questions[current_question].imageUrl}
          commonName={questions[current_question].commonName}
          latinName={questions[current_question].latinName} />

      </div>
    );
  }
}

function mapStateToProps(state) {
  return {	//	Listen to changes from your question reducers
    questions: state.questions.questions,
    current_question: state.questions.current_question
  };
}

function mapDispatchToProps(dispatch) {
  return {	//	Use actions
    actions: bindActionCreators(Actions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(PlantTest);

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
    const { name } = this.props;

    return (
      <div>
        Name:{name} Question: {questions[current_question].id}
        <Question 
          onNext={this.onNext}
          //onNext={this.props.actions.nextQuestion}
          imageUrl={questions[current_question].imageUrl}
          commonName={questions[current_question].commonName}
          latinName={questions[current_question].latinName} />

      </div>
    );
  }
}

// Tell React-redux what parts of the application's state this component is 
// interested in i.e. tells redux what parts of the state should to expose as props
// You don;t have to do this (you can call the connect function without this)
// but the advabtage of this approach is that you don't have to pollute your
// "dunb" components with any awareness of redux
function mapStateToProps(state) {
  // given all of the state, this component is only interested in
  // props with 2 sub objects:
  // questions, which somes from the state.questions.questions and
  // current_question, which soems from state.questions.current_question
  // Here is a good place to make sure it is most conveniently shaped as well
  // for use as props - i.e we can dig into the app state tree and just pull out
  // that array of questions and call it questions
  // Each object in here becomes a prop passed to this component
  return {	//	Listen to changes from your question reducers
    testname: state.name,
    questions: state.questions.questions,
    current_question: state.questions.current_question
  };
}

// This function allows us to specify which actions to expose as props to our component

function mapDispatchToProps(dispatch) {
  return {	//	Use actions
    // The react-redux function bindActionCreators 
    // wraps all of the actions passed to it in a dispatch call for us
    // so we can say for example this.props.actions.nextQuestion
    actions: bindActionCreators(Actions, dispatch)
  };
}

// we could have done this by manually wrapping like this:
// function mapDispatchToProps(dispatch) {
//   return {	//	Use actions
//     nextQuestion: () => {
//       Actions.nextQuestion();
//     }
//   };
// }

// So, React-Redux is actually generating this container for us.
// We pass in mapStateToProps() & mapDispatchProps() functions and React-Redux generates 
// a function for us which is immediately called and passed in our PlantTest class.
// This is what connects our component to the redux store and allows us to subscribe to
// changes to the store
export default connect(
  mapStateToProps, 
  mapDispatchToProps
)(PlantTest);

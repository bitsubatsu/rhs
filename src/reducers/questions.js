import * as ActionType from '../actions/questions/actionTypes';
const MAX_QUESTIONS = 3;

function getInitialState() {

    const data = require('../Questions');

    //	Format or normnalise questions data here

    const initialState = {

        questions: data.questions,
        current_question: 0
    };

    return initialState;
}


function nextQuestion(state, action) {
    console.log('NEXT_QUESTION');
    const current = state.current_question;
    let next = current + 1;
    if (next > MAX_QUESTIONS) {
        next = 0;
    }



    const result = {
        ...state,
        current_question: next
    };

    console.log(JSON.stringify(result));

    return result;
}

export default function questions(state = getInitialState(), action) {
    switch (action.type) {

        case ActionType.NEXT_QUESTION:
            return nextQuestion(state, action);
        default:
            return state;
    }
};
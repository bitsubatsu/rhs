import * as ActionType from './actionTypes';

export function nextQuestion() {
    console.log('nextQuestion');
    return function (dispatch) {
        dispatch({
            type: ActionType.NEXT_QUESTION
        });
    }
}
import { combineReducers } from 'redux';
import QuestionReducer from './questions';


const rootReducer = combineReducers({
    questions: QuestionReducer
});

export default rootReducer;
import {combineReducers} from 'redux';
import courses from './courseReducer';

// es6 shorthand property name, throw away course
const rootReducer = combineReducers({
  courses
});

export default rootReducer;
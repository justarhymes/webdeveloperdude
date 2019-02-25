import { combineReducers } from 'redux';
//import singleProjectReducer from './singleProjectReducer';
import projectsReducer from './projectsReducer';

export default combineReducers({
  //project: singleProjectReducer,
  projects: projectsReducer
});

import { combineReducers } from 'redux';
import { reducer as form } from 'redux-form'; 

import headerNavbar from './headernavbarReducer';
import experiences from './experiencesReducer';

const rootReducer = combineReducers({
  form,
  headerNavbar,
  experiences
});

export default rootReducer;
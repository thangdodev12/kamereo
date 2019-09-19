import { combineReducers } from "redux";
import { reducer as form } from "redux-form";

import HomeReducers from  '../reducers/HomeReducer';

const mainReducer = combineReducers({
  HomeReducers,
  form
});

export default mainReducer;
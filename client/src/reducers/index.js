import { combineReducers } from "redux";
import { reducer as reduxForm } from "redux-form";
import authReducer from "./authReducer";
import surveysReducer from "./surveysReducer";

export default combineReducers({
  auth: authReducer,
  // the form key below is unique for reduxForm reducer
  form: reduxForm,
  surveys: surveysReducer,
});

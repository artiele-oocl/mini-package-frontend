import {combineReducers} from "redux";
import bookReducer from "./Book";


const rootReducer = combineReducers({
  bookResource: bookReducer
  // add package reducer later
});

export default rootReducer;

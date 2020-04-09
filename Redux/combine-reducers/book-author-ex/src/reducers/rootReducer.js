import { combineReducers } from "redux";
import authorReducer from "./authorReducer";
import bookReducer from "./bookReducer";

const rootReducer = combineReducers({
  authors: authorReducer,
  books: bookReducer
});

export default rootReducer;

import React from "react";
import ReactDOM from "react-dom";
import { createStore } from "redux";
import { Provider } from "react-redux";
import counterReducer from "./reducers/counterReducer";
import Counter from "./components/Counter";
// import App from "./App";

//Goal is to increment the global state

let store = createStore(
  counterReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

// export default Counter;

ReactDOM.render(
  <Provider store={store}>
    <Counter />
  </Provider>,
  document.getElementById("root")
);

import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App/App";
import {createStore} from "redux";
import {reducer} from "./store/reducer";
import {composeWithDevTools} from 'redux-devtools-extension';
import {Provider} from "react-redux";

const store = createStore(reducer, composeWithDevTools());

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

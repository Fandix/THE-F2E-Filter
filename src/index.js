import React from "react";
import ReactDOM from "react-dom";
import Router from "./Router";
import { createStore } from "redux";
import { Provider } from "react-redux"
import reducers from "./Store/Reducers/ReducerFilter"

let store = createStore(reducers);

ReactDOM.render(
    <Provider store={store}>
        <Router />
    </Provider>,
    document.getElementById("root")
);
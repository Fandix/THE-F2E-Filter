import React from "react";
import ReactDOM from "react-dom";
import App from "./App"
import { createStore } from "redux";
import { Provider } from "react-redux"
import DataFilter from "./Store/Reducers/ReducerFilter"

let store = createStore(DataFilter);

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById("root")
);
import React from "react";
import ReactDOM from "react-dom";
import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";

import "./index.css";
import App from "./App";
import counterReducer from "./store/reducers/counter";
import resultReducer from "./store/reducers/result";

const rootReducer = combineReducers({
    ctr: counterReducer,
    res: resultReducer,
});

/* Middleware */
const logger = (store) => {
    return (next) => {
        return (action) => {
            console.log("[Middleware] Dispatcing", action);
            const result = next(action);
            console.log("[Middleware] next state", store.getState());
            return result;
        };
    };
};

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
    rootReducer,
    /* preloadedState, */ composeEnhancers(applyMiddleware(logger, thunk))
);

store.subscribe(() => {
    console.log("[subscribe]", store.getState());
});

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById("root")
);

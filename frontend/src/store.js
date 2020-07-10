import { createStore, applyMiddleware, combineReducers } from "redux";
import ReduxPromise from "redux-promise";

import linkReducer from "./reducers/LinkReducer";

const reducers = combineReducers({
  link: linkReducer,
});

const store = createStore(reducers, applyMiddleware(ReduxPromise));

export default store;
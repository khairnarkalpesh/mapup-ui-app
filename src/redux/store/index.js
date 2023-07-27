import { createStore, combineReducers, applyMiddleware } from "redux";
import thunkMiddleware from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import {regionReducer, regionInfoReducer} from "../reducers/regionsReducer";
import thunk from "redux-thunk";
// const store2 = createStore(regionsReducer, applyMiddleware(thunkMiddleware));

const reducer = combineReducers({
  regions: regionReducer,
  regionsInfo : regionInfoReducer
});

let initialState = {};

const middleware = [thunk];

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;

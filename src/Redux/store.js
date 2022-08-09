import { createStore, combineReducers, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";

import { dataReducer } from "./Reducers/dataReducer";

const rootReducers = combineReducers({ dataReducer });

const initialState = {};

const store = createStore(
  rootReducers,
  initialState,
  composeWithDevTools(applyMiddleware(thunk))
);

export default store;

import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

import {
  wordsListReducer,
  wordsDetailsReducer,
  wordAddReducer,
} from "./redux/reducers/words";

const reducer = combineReducers({
  wordsList: wordsListReducer,
  wordsDetails: wordsDetailsReducer,
  wordAdd: wordAddReducer,
});

const initialState = {};

const middleware = [thunk];

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;

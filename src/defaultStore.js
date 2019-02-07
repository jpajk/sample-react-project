import { applyMiddleware, createStore } from "redux";
import rootReducer from "./reducers";
import thunk from "redux-thunk";
import logger from 'redux-logger'

const initialState = {
  messages: {
    flashMessages: []
  },
  users: {
    user: null,
    token: null
  }
};

const store = createStore(rootReducer, initialState, applyMiddleware(thunk, logger));

export default store

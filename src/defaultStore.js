import {applyMiddleware, createStore} from "redux";
import rootReducer from "./reducers";
import thunk from "redux-thunk";

const initialState = {
  messages: {
    flashMessages: []
  },
  users: {
    user: null
  }
};

const store = createStore(rootReducer, initialState, applyMiddleware(thunk));

export default store

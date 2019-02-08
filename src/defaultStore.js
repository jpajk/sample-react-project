import { applyMiddleware, createStore } from "redux";
import rootReducer from "./reducers";
import createSagaMiddleware from 'redux-saga'
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

const sagaMiddleWare = createSagaMiddleware()

const store = createStore(rootReducer, initialState, applyMiddleware(sagaMiddleWare, logger));
store.runSaga = sagaMiddleWare.run

export default store

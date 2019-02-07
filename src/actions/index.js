
import Api from '../lib/api/Api'
import history from '../history'

export const LOGIN = 'LOGIN';
export const LOGOUT = 'LOGOUT';

export const SUCCESS = 'SUCCESS';
export const ERROR = 'ERROR';
export const CLEAR_MESSAGE = 'CLEAR_MESSAGE';

export const loginUser = function (token, user) {
  return {
    type: LOGIN, token, user
  }
};

export const clearMessage = function () {
  return {
    type: CLEAR_MESSAGE
  }
};

export const messageSuccess = function (message) {
  return {
    type: SUCCESS,
    message
  }
};

export const messageError = function (message) {
  return {
    type: ERROR,
    message
  }
};

export const apiLoginUser = function (login, password) {
  return dispatch => {
    Api.post('users/login', {
      email: login,
      password: password
    }).then((res) => {
      if (res.data.token && res.user) {
        dispatch(loginUser(res.data.token, res.user))
        history.push('/')
      }
    })
  }
};

export const error = function (message) {
  return dispatch => {
    dispatch(messageError(message))

    setTimeout(() => {
      dispatch(clearMessage())
    }, 4000)
  }
};

export const success = function (message) {
  return dispatch => {
    dispatch(messageSuccess(message))

    setTimeout(() => {
      dispatch(clearMessage())
    }, 4000)
  }
};


export const LOGIN = 'LOGIN';
export const LOGOUT = 'LOGOUT';

export const SUCCESS = 'SUCCESS';
export const ERROR = 'ERROR';
export const CLEAR_MESSAGE = 'CLEAR_MESSAGE';

export const loginUser = function () {
  return {
    type: LOGIN
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

export const apiLoginUser = function () {
  return dispatch => {
    window.console.log('login user async')
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

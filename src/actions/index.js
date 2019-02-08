
import Api from '../lib/api/Api'
import history from '../history'

import { UsersTypes, MessageTypes } from '../constants'

export const loginUser = function (token, user) {
  return {
    type: UsersTypes.LOGIN, token, user
  }
};

export const messageSuccess = function (message) {
  return {
    type: MessageTypes.SUCCESS,
    message
  }
};

export const messageError = function (message) {
  return {
    type: MessageTypes.ERROR,
    message
  }
};

export const attemptLoginUser = function (login, password) {
  return {
    type: UsersTypes.ATTEMPT_LOGIN, login, password
  }
}

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

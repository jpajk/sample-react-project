
import { all, put, takeLatest } from 'redux-saga/effects';
import Api from '../lib/api/Api'
import {MessageTypes, UsersTypes} from '../constants';
import history from '../history'

export function* attemptLoginUser(data) {
  let { login, password } = data;

  try {
    let res = yield Api.post('users/login', {
      email: login,
      password: password
    });

    if (res.data.token && res.user) {
      yield put({
        type: UsersTypes.LOGIN,
        token: res.data.token,
        user: res.user
      })

      yield history.push('/')
    }
  } catch (e) {
    //
  }
}

export default function* users() {
  yield all([
    takeLatest(UsersTypes.ATTEMPT_LOGIN, attemptLoginUser)
  ]);
}

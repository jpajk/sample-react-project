
import { all, takeLatest, delay, put } from 'redux-saga/effects'
import { MessageTypes } from '../constants'

export function* clearMessages() {
  yield delay(4000);

  yield put({
    type: MessageTypes.CLEAR_MESSAGE
  })
}

/**
 * User Sagas
 */
export default function* messages() {
  yield all([
    takeLatest(MessageTypes.ERROR, clearMessages),
    takeLatest(MessageTypes.SUCCESS, clearMessages),
  ]);
}

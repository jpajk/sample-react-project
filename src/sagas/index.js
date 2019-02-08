import { all, fork } from 'redux-saga/effects';

import users from './users';
import messages from './messages';

/**
 * rootSaga
 */
export default function* root() {
  yield all([fork(messages), fork(users)]);
}

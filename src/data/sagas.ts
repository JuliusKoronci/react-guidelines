import { effects } from 'redux-saga';

// worker Saga: will be fired on USER_FETCH_REQUESTED actions
function* testSaga() {
  yield effects.put({ type: 'USER_FETCH_FAILED' });
}

function* mySaga() {
  yield effects.takeLatest('USER_FETCH_REQUESTED', testSaga);
}

export default mySaga;

import { effects } from 'redux-saga';
import { loadContactsSaga } from './contact';

export default function* rootSaga() {
  yield effects.all([effects.call(loadContactsSaga)]);
}

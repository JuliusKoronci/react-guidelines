import { effects } from 'redux-saga';
import { loadContactsSaga } from '../contact';
import rootSaga from '../sagas';

const generator = rootSaga();

describe('rootSaga', () => {
  it('should initialize all sagas', function() {
    expect(generator.next().value).toEqual(
      effects.all([effects.call(loadContactsSaga)]),
    );
    expect(generator.next().done).toEqual(true);
  });
});

import { successReducerKey } from '../../../../common/Redux';
import { actionTypes } from '../../contactConstants';
import listContacts from '../listContacts';

describe('listContacts', () => {
  it('should have a key for contact reducer', function() {
    expect(
      Object.keys(listContacts).some(
        key => key == successReducerKey(actionTypes.GET_CONTACTS),
      ),
    ).toBe(true);
  });
  it('should replace state with new payload', function() {
    expect(
      listContacts[successReducerKey(actionTypes.GET_CONTACTS)]([], {
        payload: [{ test: 'test' }],
      }),
    ).toEqual([{ test: 'test' }]);
  });
});

import { successReducerKey } from '../../../common/Redux';

import { actionTypes } from '../contactConstants';

export default {
  [successReducerKey(actionTypes.GET_CONTACTS)]: (
    state: Contacts,
    action: IAction<Contacts>,
  ): Contacts => action.payload,
};

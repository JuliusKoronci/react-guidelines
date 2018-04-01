import { effects, SagaIterator } from 'redux-saga';
import {
  createActionCreator,
  createActionType,
  ERROR_TYPE,
  LOADING_TYPE,
  SUCCESS_TYPE,
} from '../../common/Redux';
import { actionTypes } from './contactConstants';

// import { getContacts } from './contactService';

function* loadApiContacts() {
  yield effects.put(
    createActionCreator(
      createActionType(actionTypes.GET_CONTACTS, LOADING_TYPE),
    ),
  );

  try {
    // const contacts: Contacts = yield effects.call(getContacts());
    const contacts: any[] = [];
    if (!Array.isArray(contacts)) {
      throw new Error('Not a valid response!');
    }
    yield effects.put(
      createActionCreator(
        createActionType(actionTypes.GET_CONTACTS, SUCCESS_TYPE),
        contacts,
      ),
    );
  } catch (e) {
    yield effects.put(
      createActionCreator(
        createActionType(actionTypes.GET_CONTACTS, ERROR_TYPE),
        { message: e.message },
      ),
    );
  }
}

export function* loadContacts(): SagaIterator {
  yield effects.takeLatest(actionTypes.GET_CONTACTS, loadApiContacts);
}

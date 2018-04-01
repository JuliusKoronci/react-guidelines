import { loadContacts } from './contactActions';
import { contactReducerName } from './contactConstants';
import contactReducer from './contactReducer';
import { loadContactsSaga } from './contactSagas';

const contactActions = {
  loadContacts,
};

export { contactReducer, contactReducerName, loadContactsSaga, contactActions };

import { createReducer } from '../../common/Redux';
import initialState from '../initialState';
import { contactReducerName } from './contactConstants';
import listContacts from './partialReducers/listContacts';

export default createReducer(initialState[contactReducerName], {
  ...listContacts,
});

import { Action } from 'redux';
import { actionTypes } from './contactConstants';

export const loadContacts = (): Action => ({
  type: actionTypes.GET_CONTACTS,
});

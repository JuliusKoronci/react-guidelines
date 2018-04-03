// tslint:disable:no-console
import { createSelector } from 'reselect';
import { IStoreState } from '../../@types/state';
import { contactReducerName } from './contactConstants';

type ContactsSelectorType = (state: IStoreState) => Contacts;
type ContactSelectorType = (
  contactId: string,
) => (state: IStoreState) => IContact | undefined;

const contactDataState = (state: IStoreState): Contacts =>
  state[contactReducerName];

export const selectContactData: ContactsSelectorType = createSelector(
  contactDataState,
  (contacts: Contacts) => contacts,
);

export const selectSingleContact: ContactSelectorType = (contactId: string) =>
  createSelector(contactDataState, (contacts: Contacts) =>
    contacts.find((contact: IContact) => `${contact.id}` === contactId),
  );

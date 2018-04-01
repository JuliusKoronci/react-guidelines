import { RouterState } from 'react-router-redux';
import { contactReducerName } from '../data/contact';

export interface IStoreState {
  [contactReducerName]: Contacts;
  router: RouterState;
}

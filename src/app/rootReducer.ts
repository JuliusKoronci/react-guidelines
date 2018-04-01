import { routerReducer } from 'react-router-redux';
import { combineReducers } from 'redux';
import { IStoreState } from '../@types/state';
import { contactReducer, contactReducerName } from '../data/contact';

const rootReducer = combineReducers<IStoreState>({
  routing: routerReducer,
  [contactReducerName]: contactReducer,
});

export default rootReducer;

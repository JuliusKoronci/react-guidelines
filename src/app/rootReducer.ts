import { routerReducer } from 'react-router-redux';
import { combineReducers } from 'redux';
import { StoreState } from '../@types/state';

const rootReducer = combineReducers<StoreState>({
  routing: routerReducer
});

export default rootReducer;

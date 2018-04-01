import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import { StoreState } from '../@types/state';

const rootReducer = combineReducers<StoreState>({
  routing: routerReducer,
});

export default rootReducer;
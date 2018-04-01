import { Action, Reducer } from 'redux';

export interface IGenericStateObject {
  [key: string]: any;
}

export type IPartialReducer<T extends IGenericStateObject> = (
  state: T,
  action: Action,
) => T;

const createReducer = <T>(
  initialState: T,
  handlers: { [type: string]: IPartialReducer<T> },
): Reducer<T> => {
  return (state: T = initialState, action: Action): T => {
    if (handlers.hasOwnProperty(action.type)) {
      // tslint:disable:prefer-object-spread typescript can't predict object
      // with spread here
      return Object.assign({}, state, handlers[action.type](state, action));
    }

    return state;
  };
};

export default createReducer;

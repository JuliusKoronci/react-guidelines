import {
  createActionCreator,
  createActionType,
  ERROR_TYPE,
  errorReducerKey,
  LOADED_TYPE,
  loadedReducerKey,
  LOADING_TYPE,
  loadingReducerKey,
  SUCCESS_TYPE,
  successReducerKey,
} from '../actionUtils';

const action = 'TEST_ACTION';

const succesKey = `TEST_ACTION_SUCCESS`;
const errorKey = `TEST_ACTION_ERROR`;
const loadingKey = `TEST_ACTION_LOADING`;
const loadedKey = `TEST_ACTION_LOADED`;

describe('actionUtils', () => {
  it('should return success action type', function() {
    expect(successReducerKey(action)).toEqual(succesKey);
  });
  it('should return error action type', function() {
    expect(errorReducerKey(action)).toEqual(errorKey);
  });
  it('should return loading action type', function() {
    expect(loadingReducerKey(action)).toEqual(loadingKey);
  });
  it('should return loaded action type', function() {
    expect(loadedReducerKey(action)).toEqual(loadedKey);
  });
  it('should create an action with payload', function() {
    expect(createActionCreator(action, { test: 'test' })).toEqual({
      type: 'TEST_ACTION',
      payload: { test: 'test' },
    });
  });
  it('should create an action without a payload', function() {
    expect(createActionCreator(action)).toEqual({
      type: 'TEST_ACTION',
    });
  });
  /**
   * Prefer writing out constants rather then using it from params.
   */
  it('should create an event action type from action e.g. ACTION_SUCCESS', function() {
    expect(createActionType(action, SUCCESS_TYPE)).toEqual(
      'TEST_ACTION_SUCCESS',
    );
    expect(createActionType(action, ERROR_TYPE)).toEqual('TEST_ACTION_ERROR');
    expect(createActionType(action, LOADING_TYPE)).toEqual(
      'TEST_ACTION_LOADING',
    );
    expect(createActionType(action, LOADED_TYPE)).toEqual('TEST_ACTION_LOADED');
  });
});

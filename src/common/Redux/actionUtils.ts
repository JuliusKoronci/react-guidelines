export const ERROR_TYPE = '_ERROR';
export const SUCCESS_TYPE = '_SUCCESS';
export const LOADING_TYPE = '_LOADING';
export const LOADED_TYPE = '_LOADED';

export const errorReducerKey = (actionType: string) =>
  `${actionType}${ERROR_TYPE}`;
export const successReducerKey = (actionType: string) =>
  `${actionType}${SUCCESS_TYPE}`;
export const loadingReducerKey = (actionType: string) =>
  `${actionType}${LOADING_TYPE}`;
export const loadedReducerKey = (actionType: string) =>
  `${actionType}${LOADED_TYPE}`;

type AvailableTypes = '_ERROR' | '_SUCCESS' | '_LOADING' | '_LOADED';

export const createActionType = (
  action: string,
  type: AvailableTypes,
): string => `${action}${type}`;

export const createActionCreator = (type: string, payload?: any) => ({
  payload,
  type,
});

import keyMirror from 'fbjs/lib/keyMirror';

export const ActionUsers = keyMirror({
  CREATE_USER: undefined,
  UPDATE_USER: undefined,
  DELETE_USER: undefined,
  LIST_USER: undefined,
  UPDATE_DATA: undefined,
  UPDATE_AUTH: undefined,
  CLEAR_AUTH: undefined,
  LOGIN: undefined,
  LOGOUT: undefined,
  SIGN_UP: undefined,
  SET_VIEW_FILE: undefined,
  FILTER_VIEW_FILE: undefined,
  SORT_VIEW_FILE: undefined,
  SELECT_ITEM: undefined,
});

export const ActionFiles = keyMirror({
  LIST_FILE: undefined,
});

export const DEFAULT_PATH = '/home';
export const PASSWORD_REGEX = /(?!^[0-9]*$)(?!^[a-zA-Z]*$)^([a-zA-Z0-9]{6,})$/;

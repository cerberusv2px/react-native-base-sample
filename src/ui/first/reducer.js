import {
  LOGIN,
  LOGIN_SUCCESS,
  LOGIN_ERROR,
  FIRST_LAUNCH,
  SET_USER,
  LOGOUT,
  LOGOUT_SUCCESS,
  LOGOUT_ERROR,
} from './actions';

const INITIAL_STATE = {
  isLogging: false,
  isFetching: false,
  response: {},
  userResponse: {},
  isLogged: false,
  error: null,
  firstLaunch: true,
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case LOGIN:
      return {
        ...state,
        isLogging: true,
        userResponse: {},
        error: null,
        firstLaunch: false,
      };

    case LOGIN_SUCCESS:
      return {
        ...state,
        isLogging: false,
        userResponse: action.payload,
        error: null,
        isLogged: true,
        firstLaunch: false,
      };

    case LOGIN_ERROR:
      return {
        ...state,
        isLogging: false,
        userResponse: {},
        error: action.error,
        firstLaunch: false,
      };

    case SET_USER:
      return {
        ...state,
        userResponse: action.payload,
      };

    case FIRST_LAUNCH:
      return {
        ...state,
        firstLaunch: false,
      };

    case LOGOUT:
      return {
        ...state,
        isFetching: true,
      };

    case LOGOUT_SUCCESS:
      return {
        ...INITIAL_STATE,
        firstLaunch: false,
      };

    case LOGOUT_ERROR:
      return {
        ...state,
        isFetching: false,
      }

    default:
      return state;
  }
};

import FirstAppAPI from '../../constants/Api';

export const LOGIN = 'LOGIN';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_ERROR = 'LOGIN_ERROR';
export const FIRST_LAUNCH = 'FIRST_LAUNCH';
export const SET_USER = 'SET_USER';
export const LOGOUT = 'LOGOUT';
export const LOGOUT_SUCCESS = 'LOGOUT_SUCCESS';
export const LOGOUT_ERROR = 'LOGOUT_ERROR';

const receptionistApi = new FirstAppAPI();

function loginSuccess(payload) {
  return {
    type: LOGIN_SUCCESS,
    payload,
  };
}

function loginError(error) {
  return {
    type: LOGIN_ERROR,
    error,
  };
}

function logoutSuccess() {
  return {
    type: LOGOUT_SUCCESS,
  };
}

function logoutError(error) {
  return {
    type: LOGOUT_ERROR,
    error,
  };
}

export function firstTimelaunch() {
  return {
    type: FIRST_LAUNCH,
  };
}

export function login(postData) {
  return async dispatch => {
    dispatch({ type: LOGIN });
    try {
      const data = await receptionistApi.login("adf", "adsf");
      const newData = {
        user: data,
      };
      return dispatch(loginSuccess(newData));
    } catch (e) {
      return dispatch(loginError(e));
    }
  };
}

export function logout() {
  return async (dispatch, getState) => {
    // const { userResponse: { user: { data } } } = getState().user;
    dispatch({ type: LOGOUT });
    try {
      return dispatch(logoutSuccess());
    } catch (e) {
      return dispatch(logoutError(e));
    }
  };
}

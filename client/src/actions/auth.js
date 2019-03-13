import request from 'superagent';

export const LOGIN = 'LOGIN';
export const LOGIN_FAILED = 'LOGIN_FAILED'
export const SIGNUP_FAILED = 'SIGNUP_FAILED'
export const SET_CURRENT_USER = 'SET_CURRENT_USER';

const baseUrl = 'https://ohmmmm.herokuapp.com';
// const baseUrl = 'http://localhost:4000';

const loginSuccess = token => ({
  type: LOGIN,
  token
});

const loginFailure = errMessage => ({
  type: LOGIN_FAILED,
  errMessage
});

const signupFailure = errMessage => ({
  type: SIGNUP_FAILED,
  errMessage
});

export const setCurrentUser = currentUser => ({
  type: SET_CURRENT_USER,
  currentUser
});

export const login = (name, password) => dispatch => {
  console.log('dispatch login')
  request
    .post(`${baseUrl}/login`)
    .send({ name, password })
    .then(response => dispatch(loginSuccess(response.body)))
    .then(response =>
      localStorage.setItem(
        'currentUser',
        JSON.stringify({ name: response.token.name, token: response.token.token, userId: response.token.userId })
      )
    )
    .catch(error => {
      if(error.status === 401 || 404) {
      dispatch(loginFailure(error.response.body.message))
      } else {
        console.error(error)
      }
    });
};

export const register = (name, password, avatar) => dispatch => {
  request
    .post(`${baseUrl}/players`)
    .send({ name, password, avatar })
    // .then(res => console.log(res.response))
    .then(() => dispatch(login(name, password)))
    .catch(error => {
      // console.error(error.response)
      if(error.status === 401) {
      dispatch(signupFailure(error.response.body.message))
      } else {
        console.error('error')
      }
    });
};
import request from 'superagent';

export const LOGIN = 'LOGIN';
export const SET_CURRENT_USER = 'SET_CURRENT_USER';

const baseUrl = 'https://ohmmmm.herokuapp.com';
// const baseUrl = 'http://localhost:4000';

const loginSuccess = token => ({
  type: LOGIN,
  token
});

export const setCurrentUser = currentUser => ({
  type: SET_CURRENT_USER,
  currentUser
});

export const login = (name, password) => dispatch => {
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
    .catch(error => error);
};

export const register = (name, password, avatar) => dispatch => {
  request
    .post(`${baseUrl}/players`)
    .send({ name, password, avatar })
    .then(() => dispatch(login(name, password)))
    .catch(error => error);
};

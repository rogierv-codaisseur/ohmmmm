import request from 'superagent';

export const LOGIN = 'LOGIN';

// const baseUrl = 'http://ohmmmm.herokuapp.com';
const baseUrl = 'http://localhost:4000';

const loginSuccess = token => ({
  type: LOGIN,
  token
});

export const login = (name, password) => dispatch => {
  request
    .post(`${baseUrl}/login`)
    .send({ name, password })
    .then(response => dispatch(loginSuccess(response.body.token)))
    .catch(error => error);
};

export const register = (name, password, avatar) => dispatch => {
  request
    .post(`${baseUrl}/players`)
    .send({ name, password, avatar })
    .then(() => dispatch(login(name, password)))
    .catch(error => error);
};

import request from 'superagent';

export const LOGIN = 'LOGIN';

const baseUrl = 'https://ohmmmm.herokuapp.com';
// const baseUrl = 'http://localhost:4000';

const loginSuccess = token => ({
  type: LOGIN,
  token
});

export const addScore = (score, gameTypeId) => (dispatch, getState) => {
  const playerId = getState().currentUser.userId;
  console.log('Score', score);

  request
    .post(`${baseUrl}/scores`)
    .send({ score, playerId, gameTypeId })
    // .then(() => dispatch(login(name, password)))
    .catch(error => error);
};

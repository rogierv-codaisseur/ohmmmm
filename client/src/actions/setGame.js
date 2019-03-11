export const SET_GAME = 'SET_GAME'

export function setGame(time, type) {
  console.log(time);
  
  return {
    type: SET_GAME,
    payload: {
      time: time,
      type: type
    }
  }
}
export const SET_TIME = 'SET_TIME'

export function setTime(time, type) {
  console.log(time);
  
  return {
    type: SET_TIME,
    payload: {
      time: time,
      type: type
    }
  }
}
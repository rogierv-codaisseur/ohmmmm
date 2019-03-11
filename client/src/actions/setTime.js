export const SET_TIME = 'SET_TIME'

export function setTime(time) {
  console.log(time);
  
  return {
    type: SET_TIME,
    time
  }
}
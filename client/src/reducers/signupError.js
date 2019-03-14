import { SIGNUP_FAILED } from '../actions/auth'

export default (state = null, action = {}) => {
	switch (action.type) {
		case SIGNUP_FAILED:
			return action.errMessage

		default:
			return state
	}
}

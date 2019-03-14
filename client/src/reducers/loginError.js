import { LOGIN_FAILED } from '../actions/auth'

export default (state = null, action = {}) => {
	switch (action.type) {
		case LOGIN_FAILED:
			return action.errMessage

		default:
			return state
	}
}

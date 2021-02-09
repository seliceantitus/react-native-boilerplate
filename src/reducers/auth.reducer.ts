import { AuthAction, LOGIN_FAILED, LOGIN_SUCCESS, LOGOUT_FAILED, LOGOUT_SUCCESS } from "_actions";
import { AuthState } from "_store";

const initialState: AuthState = { isAuthenticated: false };

export const authReducer = (state: AuthState = initialState, action: AuthAction): AuthState => {
	switch (action.type) {
		case LOGIN_FAILED:
			return { ...state, isAuthenticated: false, userData: undefined, error: action.payload }
		case LOGIN_SUCCESS:
			return { ...state, isAuthenticated: true, error: undefined }
		case LOGOUT_FAILED:
			return { ...state, isAuthenticated: false, userData: undefined, error: action.payload }
		case LOGOUT_SUCCESS:
			return { ...state, isAuthenticated: false, userData: undefined, error: undefined }
		default:
			return state;
	}
}
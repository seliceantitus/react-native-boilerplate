import { UserCredentials } from "_models"

const LOGIN = 'LOGIN'
const LOGIN_SUCCESS = 'LOGIN_SUCCESS'
const LOGIN_FAILED = 'LOGIN_FAILED'

const LOGOUT = 'LOGOUT'
const LOGOUT_SUCCESS = 'LOGOUT_SUCCESS'
const LOGOUT_FAILED = 'LOGOUT_FAILED'

export interface LoginAction {
	type: typeof LOGIN
	payload: UserCredentials
}

interface LoginSuccessAction {
	type: typeof LOGIN_SUCCESS
	payload: UserCredentials
}

interface LoginFailedAction {
	type: typeof LOGIN_FAILED
	payload: string
}

interface LogoutAction {
	type: typeof LOGOUT
}

interface LogoutSuccessAction {
	type: typeof LOGOUT_SUCCESS
}

interface LogoutFailedAction {
	type: typeof LOGOUT_FAILED
	payload: string
}

const login = (UserCredentials: UserCredentials): LoginAction => ({ type: LOGIN, payload: UserCredentials });

export type AuthAction = LoginAction | LoginSuccessAction | LoginFailedAction | LogoutAction | LogoutSuccessAction | LogoutFailedAction;

export { login, LOGIN, LOGIN_SUCCESS, LOGIN_FAILED, LOGOUT, LOGOUT_SUCCESS, LOGOUT_FAILED }


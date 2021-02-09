import { call, put, takeEvery } from 'redux-saga/effects';
import { AuthAction, LOGIN, LOGIN_FAILED, LOGIN_SUCCESS, LOGOUT, LOGOUT_FAILED, LOGOUT_SUCCESS, LoginAction } from '_actions';
import { AuthService } from '_services';

function* handler() {
	yield takeEvery(LOGIN, login)
	yield takeEvery(LOGOUT, logout)
}

function* login(action: LoginAction) {
	try {
		yield call(AuthService.login, action.payload)
		yield put({ type: LOGIN_SUCCESS })
	} catch (error) {
		yield put({ type: LOGIN_FAILED, payload: error.response?.data?.message });
	}
}

function* logout(action: AuthAction) {
	try {
		yield call(AuthService.logout)
		yield put({ type: LOGOUT_SUCCESS })
	} catch (error) {
		yield put({ type: LOGOUT_FAILED, payload: error.response?.data?.message });
	}
}

export { handler as authHandler };


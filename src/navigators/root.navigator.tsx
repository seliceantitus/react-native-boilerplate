import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "_reducers";
import { AppNavigatorStack } from "./app.navigator";
import { AuthNavigatorStack } from "./auth.navigator";

const RootNavigator = () => {
	const isLoggedIn = useSelector<RootState, boolean>(state => state.auth.isAuthenticated);
	return isLoggedIn ? <AppNavigatorStack /> : <AuthNavigatorStack />
}

export { RootNavigator };


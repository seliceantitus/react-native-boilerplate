import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { LoginScreen as LoginScreen } from '_screens';
import { AuthStackParamList } from './types';

const AuthStack = createStackNavigator<AuthStackParamList>();

function AuthNavigatorStack(): JSX.Element {
	return (
		<AuthStack.Navigator initialRouteName={'Login'} headerMode={'none'}>
			<AuthStack.Screen name={'Login'} component={LoginScreen} />
		</AuthStack.Navigator>
	)
}

export { AuthNavigatorStack };


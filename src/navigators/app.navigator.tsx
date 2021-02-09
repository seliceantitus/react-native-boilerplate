import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { HomeScreen } from '_screens';
import { AppStackParamList } from './types';

const AppStack = createStackNavigator<AppStackParamList>();

function AppNavigatorStack(): JSX.Element {
	return (
		<AppStack.Navigator initialRouteName={'Home'}>
			<AppStack.Screen name={'Home'} component={HomeScreen} />
		</AppStack.Navigator>
	)
}

export { AppNavigatorStack };


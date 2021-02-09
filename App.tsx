import { NavigationContainer } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import { withTranslation, WithTranslation } from 'react-i18next';
import { ActivityIndicator, SafeAreaView, StatusBar, StyleSheet, View } from 'react-native';
import { Provider } from 'react-redux';
import { RootNavigator } from '_navigators';
import { store } from '_store';
import { Colors } from '_theme';
import './src/config/i18n.config';

const App = (props: WithTranslation) => {

	const { i18n } = props;

	const [loading, setLoading] = useState(true);

	useEffect(() => {
		if (i18n.isInitialized) {
			setLoading(false);
		}
	}, [])

	return (
		<Provider store={store}>
			<StatusBar />
			<SafeAreaView style={styles.appContainer}>
				{loading
					? <View style={styles.activityIndicatorContainer}>
						<ActivityIndicator size='large' color={Colors.BLACK} />
					</View>
					: <NavigationContainer>
						<RootNavigator />
					</NavigationContainer>
				}
			</SafeAreaView>
		</Provider>
	);
};

const styles = StyleSheet.create({
	appContainer: {
		flex: 1
	},
	activityIndicatorContainer: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center'
	}
})

export default withTranslation()(App);

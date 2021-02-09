import React from 'react';
import { useTranslation } from 'react-i18next';
import { Button, ScrollView, Text, View } from 'react-native';
import { useDispatch } from 'react-redux';
import { LOGOUT } from '_actions';
import { ALIGN_CENTER, FONT_16, HEADER, MARGIN_8, PADDING_8, SUB_HEADER } from '_theme';

const HomeScreen = () => {

	const libraries: string[] = [
		'React Native',
		'React Navigation',
		'Axios',
		'i18next & React i18next',
		'Lodash',
		'Redux & React-redux',
		'Redux-Saga',
		'React-hook-form',
		'Yup'
	]

	const dispatch = useDispatch();

	const { t, i18n } = useTranslation();

	return (
		<View style={[PADDING_8, { flex: 1 }]}>
			<Text style={[MARGIN_8, HEADER, ALIGN_CENTER]}>{t('homeScreen.title')}</Text>
			<Text style={[MARGIN_8, SUB_HEADER, ALIGN_CENTER]}>{t('homeScreen.subTitle')}</Text>
			<Text style={[MARGIN_8, FONT_16, ALIGN_CENTER]}>{t('homeScreen.libraries')}</Text>
			<ScrollView>
				{libraries.map((library, index) =>
					<Text key={index} style={[MARGIN_8, FONT_16]}>{library}</Text>
				)}
			</ScrollView>
			<Button title={t('shared.logout')} onPress={() => dispatch({ type: LOGOUT })} />
		</View>
	)
}

export { HomeScreen };


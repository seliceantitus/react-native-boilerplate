import { RouteProp } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import React from 'react';
import { Controller, useForm } from "react-hook-form";
import { useTranslation } from 'react-i18next';
import { Button, Text, TextInput, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { login } from '_actions';
import { UserCredentials } from '_models';
import { AuthStackParamList } from '_navigators';
import { RootState } from '_reducers';
import { AuthState } from '_store';
import { ALIGN_CENTER, FONT_18, MARGIN_8 } from '_theme';


type LoginProps = {
	navigation: StackNavigationProp<AuthStackParamList, 'Login'>,
	route: RouteProp<AuthStackParamList, 'Login'>
}

const LoginScreen: React.FC<LoginProps> = (props: LoginProps) => {

	const dispatch = useDispatch();
	const authState = useSelector<RootState, AuthState>(state => state.auth);

	const { t, i18n } = useTranslation();

	const { control, handleSubmit, errors } = useForm<UserCredentials>();

	const onSubmit = (data: UserCredentials) => {
		dispatch(login(data));
	}

	return <View style={{ flex: 1 }}>
		<Text style={[MARGIN_8, ALIGN_CENTER, FONT_18]}>{t('shared.login')}</Text>

		<Text>{t('loginScreen.username')}</Text>
		<Controller
			control={control}
			render={({ onChange, onBlur, value }) =>
				<TextInput
					style={{ borderWidth: 1 }}
					onChangeText={value => onChange(value)}
					onBlur={onBlur}
					value={value}
					placeholder={t('loginScreen.username')}
				/>
			}
			name="email"
			rules={{ required: true, validate: value => !!value.trim() }}
			defaultValue=""
		/>
		{errors.email && <Text>This is required.</Text>}

		<Text>{t('loginScreen.password')}</Text>
		<Controller
			control={control}
			render={({ onChange, onBlur, value }) =>
				<TextInput
					style={{ borderWidth: 1 }}
					onChangeText={value => onChange(value)}
					onBlur={onBlur}
					value={value}
					secureTextEntry
					placeholder={t('loginScreen.password')}
				/>
			}
			name="password"
			rules={{ required: true, validate: value => !!value.trim() }}
			defaultValue=""
		/>
		{errors.password && <Text>This is required.</Text>}

		<Button title={t('shared.login')} onPress={handleSubmit(onSubmit)} />

		{authState.error &&
			<View><Text>{authState.error}</Text></View>
		}
	</View>
}

export { LoginScreen };


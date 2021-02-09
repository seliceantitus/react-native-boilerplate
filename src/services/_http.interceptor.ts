import { AxiosError, AxiosRequestConfig, AxiosResponse } from 'axios';
import { isNull } from 'lodash';
import { AsyncStorageKeys } from '_utils';
import AsyncStorageService from './async.storage.service';

export const requestHandler = async (config: AxiosRequestConfig) => {
	const token = await AsyncStorageService.getItem(AsyncStorageKeys.TOKEN);

	if (!isNull(token)) {
		config.headers.Authorization = token;
	}

	config.url = "http://ec2-63-33-9-207.eu-west-1.compute.amazonaws.com:8090/has-api-1.0.0/api/v1/" + config.url

	return config;
}

export const responseHandler = (response: AxiosResponse): AxiosResponse => {
	return response;
}

export const errorResponseHandler = async (error: AxiosError): Promise<any> => {
	const { response } = error;
	if (response) {
		switch (response.status) {
			case 400:
			case 401:
			case 403:
			case 404:
			default:
				console.error(response.data?.message);
		}
	}
	return Promise.reject(error);
}
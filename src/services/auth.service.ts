import { AxiosResponse } from "axios";
import { httpClient } from "./_http.client";
import { UserCredentials } from "_models";

class AuthService {
	login = (userCredentials: UserCredentials): Promise<AxiosResponse<any>> => {
		return httpClient.post('login', { ...userCredentials });
	}

	logout = (): Promise<AxiosResponse<any>> => {
		return httpClient.post('logout')
	}
}

export default new AuthService();
import AsyncStorage from "@react-native-community/async-storage";
import { isNull } from "lodash";

class AsyncStorageService {
	async getItem(key: string): Promise<string | null> {
		try {
			const data = await AsyncStorage.getItem(key)
			if (isNull(data)) {
				return null
			} else {
				return data
			}
		} catch (error) {
			return null
		}
	}

	async setItem(key: string, value: string): Promise<boolean> {
		try {
			await AsyncStorage.setItem(key, value);
			return true;
		} catch (error) {
			return false;
		}
	}
}

export default new AsyncStorageService();
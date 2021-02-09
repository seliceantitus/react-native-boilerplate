import { i18n, TFunction } from "i18next";
import { User } from "_models";

export interface AuthState {
	isAuthenticated: boolean,
	userData?: User,
	error?: string,
}
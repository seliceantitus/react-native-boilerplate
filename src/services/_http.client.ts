import axios from "axios";
import { requestHandler, responseHandler, errorResponseHandler } from "./_http.interceptor";

export const httpClient = axios.create();
httpClient.interceptors.request.use((config) => requestHandler(config));
httpClient.interceptors.response.use((config) => responseHandler(config), (error) => errorResponseHandler(error));
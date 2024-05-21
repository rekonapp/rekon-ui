import axios from 'axios';
import { get } from 'lodash';

const TokenInterceptor = config => {
	config.headers['company-id'] = localStorage.log_in;
	config.headers.Authorization = `Bearer ${localStorage.token}`;

	return config;
};

const ResponseInterceptor = response => Promise.resolve({ data: response.data.data });

const ErrorInterceptor = error => Promise.reject(get(error, 'response.data.message', error.message));

const client = axios.create({
    baseURL: import.meta.env.REACT_APP_API_URL
});

client.interceptors.request.use(TokenInterceptor);
client.interceptors.response.use(ResponseInterceptor, ErrorInterceptor);

export {
	client
};

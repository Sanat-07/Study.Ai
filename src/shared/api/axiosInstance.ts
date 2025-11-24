import axios from 'axios';
import Cookies from 'js-cookie';
import errorHandler from '../util/errorHandler';

const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:8080/';

const axiosInstance = axios.create({
    baseURL: API_BASE_URL,
    headers: {
        'Content-Type': 'application/json'
    },
    withCredentials: true
});

axiosInstance.interceptors.request.use(
    config => {
        const token = Cookies.get('token');
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }

        return config;
    },
    error => {
        errorHandler.handleApiError(error);
        return Promise.reject(error);
    }
);

axiosInstance.interceptors.response.use(
    response => {
        return response;
    },
    error => {
        const apiError = errorHandler.handleApiError(error);

        if (error.response?.status === 401) {
            Cookies.remove('token');
            Cookies.remove('user');

            if (
                window.location.pathname !== '/' &&
                !window.location.pathname.startsWith('/event/')
            ) {
                window.location.href = '/';
            }
        }

        if (apiError) {
            if (error.response?.status === 403) {
                errorHandler.showNotification(
                    'You do not have permission to perform this action.',
                    'warning'
                );
            }

            if (error.response?.status === 404) {
                errorHandler.showNotification(
                    'The requested resource was not found.',
                    'warning'
                );
            }

            if (error.response?.status >= 500) {
                errorHandler.showNotification(
                    'Server error. Please try again later.',
                    'error'
                );
            }

            if (!error.response) {
                errorHandler.showNotification(
                    'Network error. Please check your connection.',
                    'error'
                );
            }

            return Promise.reject(apiError);
        }

        return Promise.reject(error);
    }
);

export const setAuthToken = (token: string | null) => {
    if (token) {
        axiosInstance.defaults.headers.common['Authorization'] = `Bearer ${token}`;
    } else {
        delete axiosInstance.defaults.headers.common['Authorization'];
    }
};

export default axiosInstance;

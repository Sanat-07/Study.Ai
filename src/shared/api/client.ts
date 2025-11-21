import { AxiosRequestConfig } from 'axios';
import axiosInstance from './axiosInstance';

export const httpClient = {
    get: async <T>(
        url: string,
        data?: any,
        config?: AxiosRequestConfig
    ): Promise<T> => {
        const response = await httpClient.safeRequest<T>('get', url, data, config);
        return response?.data;
    },

    post: async <T>(
        url: string,
        data?: any,
        config?: AxiosRequestConfig
    ): Promise<T> => {
        const response = await httpClient.safeRequest<T>('post', url, data, config);
        return response?.data;
    },

    safeRequest: async <T>(
        method: 'get' | 'post' | 'put' | 'delete',
        url: string,
        data?: any,
        config?: AxiosRequestConfig
    ): Promise<any> => {
        try {
            return await axiosInstance[method]<any>(url, data, config);
        } catch (error) {
            throw error;
        }
    },

    put: async <T>(
        url: string,
        data?: any,
        config?: AxiosRequestConfig
    ): Promise<T> => {
        const response = await httpClient.safeRequest<T>('put', url, data, config);
        return response?.data;
    },

    delete: async <T>(url: string, config?: AxiosRequestConfig): Promise<T> => {
        const response = await httpClient.safeRequest<T>(
            'delete',
            url,
            undefined,
            config
        );
        return response?.data;
    }
};

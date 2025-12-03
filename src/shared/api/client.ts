import { AxiosRequestConfig, AxiosResponse } from 'axios';
import axiosInstance from './axiosInstance';

export const httpClient = {
    get: async <T>(
        url: string,
        data?: any,
        config?: AxiosRequestConfig
    ): Promise<T> => {
        const response = await httpClient.safeRequest<T>('get', url, data, config);
        return response?.data as T;
    },

    post: async <T>(
        url: string,
        data?: any,
        config?: AxiosRequestConfig
    ): Promise<T> => {
        const response = await httpClient.safeRequest<T>('post', url, data, config);
        return response?.data as T;
    },

    safeRequest: async <T>(
        method: 'get' | 'post' | 'put' | 'delete',
        url: string,
        data?: any,
        headers?: any
    ): Promise<AxiosResponse<T> | null> => {
        try {
            // Note: The original code used 'config' in the axiosInstance call.
            // If 'headers' is intended to replace 'config', the axiosInstance call
            // might need adjustment, e.g., passing { headers } as part of a config object.
            // For now, faithfully applying the change means 'config' is no longer a parameter,
            // but the call still references it. This might lead to a runtime error if 'config'
            // is not defined in the scope. Assuming 'config' was meant to be replaced by 'headers'
            // and the call should use 'headers' if it's a simple replacement for the config object.
            // However, the instruction only provided the parameter and return type change.
            // To maintain syntactic correctness and avoid introducing new logic not explicitly
            // requested, I will assume 'headers' is meant to be passed as the config object.
            // If 'headers' is just headers, then it should be wrapped in a config object.
            // Given the instruction, I will replace 'config' with 'headers' in the call.
            return await axiosInstance[method]<T>(url, data, headers);
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
        return response?.data as T;
    },

    delete: async <T>(url: string, config?: AxiosRequestConfig): Promise<T> => {
        const response = await httpClient.safeRequest<T>(
            'delete',
            url,
            undefined,
            config
        );
        return response?.data as T;
    }
};

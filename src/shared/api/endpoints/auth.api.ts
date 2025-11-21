import Cookies from 'js-cookie';
import { GoogleLoginResponse, LoginCredentials, LoginResponse, PhoneLoginResponse } from '../../types/auth';
import { setAuthToken } from '../axiosInstance';
import { httpClient } from '../client';

export const login = async (
    credentials: LoginCredentials
): Promise<LoginResponse> => {
    return await httpClient.post<LoginResponse>('/auth/login', credentials);
};

export const logout = (): void => {
    Cookies.remove('token');
    Cookies.remove('user');
    setAuthToken(null);

    window.dispatchEvent(new CustomEvent('authStatusChanged', {
        detail: { isAuthenticated: false }
    }));
};

export const getCurrentUser = () => {
    const userStr = Cookies.get('user');
    return userStr ? JSON.parse(userStr) : null;
};

export const isAuthenticated = (): boolean => {
    return !!Cookies.get('token');
};

export const getToken = (): string | null => {
    return Cookies.get('token') || null;
};

export const googleLogin = async (idToken: string): Promise<GoogleLoginResponse> => await httpClient.post<GoogleLoginResponse>('/Auth/google', { idToken });

export const phoneLogin = async (idToken: string): Promise<PhoneLoginResponse> => await httpClient.post<PhoneLoginResponse>('/Auth/phone-login', { idToken });
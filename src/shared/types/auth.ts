export interface LoginCredentials {
    email: string;
    password: string;
}

export interface SignUpCredentials {
    email: string;
    fullName: string;
    password: string;
}

export interface TokenResponse {
    accessToken: string;
    refreshToken: string;
    message?: string;
}

export class ApiError {
    constructor(public message: string, public status?: number) {}
}

export interface User {
    id: string;
    fullName: string;
    email: string;
}


export interface UserSettings {
    userId: string;
    theme: string;
    language: string;
    notificationsEnabled: boolean;
}

export interface GoogleLoginResponse extends TokenResponse {}

export interface PhoneLoginResponse extends TokenResponse {}
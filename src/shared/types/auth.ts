export interface LoginCredentials {
    email: string;
    password: string;
}

export interface LoginResponse {
    accessToken: string;
    refreshToken: string;
    message?: string;
}

export class ApiError {
    constructor(public message: string, public status?: number) {}
}

export interface User {
    id: string;
    phone: string;
    name?: string;
    email?: string;
    balance?: number;
    avatarId?: string | null;
}

export interface Sender {
    senderName: string;
    senderPhone: string;
    totalAmount: number;
    totalCount: number;
}




export interface UserSettings {
    userId: string;
    theme: string;
    language: string;
    notificationsEnabled: boolean;
}

export interface GoogleLoginResponse extends LoginResponse {}

export interface PhoneLoginResponse extends LoginResponse {}
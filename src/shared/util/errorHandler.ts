export interface ErrorInfo {
    message: string;
    stack?: string;
    componentStack?: string;
    timestamp: number;
    url?: string;
    userAgent?: string;
}

export interface ApiError {
    status: number;
    message: string;
    data?: any;
    url?: string;
}

class ErrorHandler {
    private static instance: ErrorHandler;
    private errorLog: ErrorInfo[] = [];
    private maxLogSize = 100;

    private constructor() { }

    static getInstance(): ErrorHandler {
        if (!ErrorHandler.instance) {
            ErrorHandler.instance = new ErrorHandler();
        }
        return ErrorHandler.instance;
    }

    handleError(error: Error, errorInfo?: React.ErrorInfo): void {
        const errorData: ErrorInfo = {
            message: error.message,
            stack: error.stack,
            componentStack: errorInfo?.componentStack || undefined,
            timestamp: Date.now(),
            url: window.location.href,
            userAgent: navigator.userAgent
        };

        this.logError(errorData);
        this.notifyUser(error);
        this.reportToServer(errorData);
    }

    handleApiError(error: any): ApiError | undefined {
        const apiError: ApiError = {
            status: error.response?.status || 0,
            message:
                error.response?.data?.message ||
                error.message ||
                'An unexpected error occurred',
            data: error.response?.data,
            url: error.config?.url
        };

        if (apiError.status === 401) {
            this.logApiError(apiError);
            return undefined;
        }

        this.logApiError(apiError);
        this.notifyUser(new Error(apiError.message));
        this.reportToServer({
            message: apiError.message,
            timestamp: Date.now(),
            url: apiError.url,
            userAgent: navigator.userAgent
        });

        return apiError;
    }

    private logError(error: ErrorInfo): void {
        this.errorLog.push(error);

        if (this.errorLog.length > this.maxLogSize) {
            this.errorLog.shift();
        }

        if (process.env.NODE_ENV === 'development') {
            console.error('Error logged:', error);
        }
    }

    private logApiError(error: ApiError): void {
        if (process.env.NODE_ENV === 'development') {
            console.error('API Error:', error);
        }
    }

    private notifyUser(error: Error): void {
        const isNetworkError =
            error.message.includes('Network Error') ||
            error.message.includes('Failed to fetch');

        // const isAuthError =
        error.message.includes('401') || error.message.includes('Unauthorized');

        if (isNetworkError) {
            this.showNotification(
                'Network error. Please check your connection.',
                'error'
            );
        } else {
            console.log('error', error);
            this.showNotification('Something went wrong. Please try again.', 'error');
        }
    }

    showNotification(
        message: string,
        type: 'error' | 'warning' | 'info' = 'error'
    ): void {
        const notification = document.createElement('div');
        notification.className = `global-notification global-notification-${type}`;
        notification.textContent = message;

        Object.assign(notification.style, {
            position: 'fixed',
            top: '20px',
            right: '20px',
            padding: '12px 20px',
            borderRadius: '8px',
            color: 'white',
            fontWeight: '500',
            zIndex: '9999',
            maxWidth: '400px',
            wordWrap: 'break-word',
            boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)',
            transform: 'translateX(100%)',
            transition: 'transform 0.3s ease-in-out'
        });

        if (type === 'error') {
            notification.style.backgroundColor = '#ef4444';
        } else if (type === 'warning') {
            notification.style.backgroundColor = '#f59e0b';
        } else {
            notification.style.backgroundColor = '#3b82f6';
        }

        document.body.appendChild(notification);

        setTimeout(() => {
            notification.style.transform = 'translateX(0)';
        }, 100);

        setTimeout(() => {
            notification.style.transform = 'translateX(100%)';
            setTimeout(() => {
                if (document.body.contains(notification)) {
                    document.body.removeChild(notification);
                }
            }, 300);
        }, 5000);
    }

    private reportToServer(error: ErrorInfo): void {
        if (process.env.NODE_ENV === 'production') {
            fetch('/api/errors', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(error)
            }).catch(() => {
                console.warn('Failed to report error to server');
            });
        }
    }

    getErrorLog(): ErrorInfo[] {
        return [...this.errorLog];
    }

    clearErrorLog(): void {
        this.errorLog = [];
    }
}

export const errorHandler = ErrorHandler.getInstance();
export default errorHandler;

import axios from 'axios';

export const http = axios.create({
    baseURL: process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8080/',
});

http.interceptors.request.use((request) => {
    // Get token from localStorage (set by OAuth2 callback)
    const token = localStorage.getItem('authToken');
    const tokenType = localStorage.getItem('tokenType') || 'Bearer';

    console.log('HTTP Request Debug:', {
        url: request.url,
        method: request.method,
        hasToken: !!token,
        tokenType,
        tokenPreview: token ? `${token.substring(0, 20)}...` : 'No token'
    });

    if (token) {
        request.headers.Authorization = `${tokenType} ${token}`;
        console.log('Authorization header set:', `${tokenType} ${token.substring(0, 20)}...`);
    } else {
        console.warn('No auth token found in localStorage');
    }

    return request;
});

http.interceptors.response.use(
    (response) => {
        console.log('HTTP Response Success:', {
            url: response.config.url,
            status: response.status
        });
        return response;
    },
    (error) => {
        console.error('HTTP Response Error:', {
            url: error.config?.url,
            status: error.response?.status,
            message: error.response?.data?.message || error.message
        });

        const response = error?.response
        const data = response?.data
        if (!response) {
            return Promise.reject(error);
        } else if (!response.ok) {
            const error = (data && data?.message) || response.statusText || data?.status?.message;
            return Promise.reject({
                message: error,
                status: response.status
            });
        }
    },
);


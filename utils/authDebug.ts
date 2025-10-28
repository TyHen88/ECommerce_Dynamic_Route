/**
 * Authentication Debug Utilities
 * Helper functions to debug OAuth2 authentication issues
 */

/**
 * Check current authentication status
 */
export const checkAuthStatus = () => {
    const token = localStorage.getItem('authToken');
    const tokenType = localStorage.getItem('tokenType');

    console.log('🔍 Authentication Status Check:', {
        hasToken: !!token,
        tokenType,
        tokenLength: token?.length || 0,
        tokenPreview: token ? `${token.substring(0, 20)}...` : 'No token',
        localStorageKeys: Object.keys(localStorage).filter(key => key.includes('auth') || key.includes('token'))
    });

    return {
        isAuthenticated: !!token,
        token,
        tokenType
    };
};

/**
 * Clear authentication data
 */
export const clearAuthData = () => {
    localStorage.removeItem('authToken');
    localStorage.removeItem('tokenType');
    console.log('🧹 Authentication data cleared');
};

/**
 * Test API call with current token
 */
export const testApiCall = async () => {
    const { http } = await import('./http');

    try {
        console.log('🧪 Testing API call...');
        const response = await http.get('/api/test'); // Replace with your actual test endpoint
        console.log('✅ API call successful:', response.data);
        return response.data;
    } catch (error) {
        console.error('❌ API call failed:', error);
        throw error;
    }
};

// Make functions available globally for debugging
if (typeof window !== 'undefined') {
    (window as any).authDebug = {
        checkAuthStatus,
        clearAuthData,
        testApiCall
    };
}

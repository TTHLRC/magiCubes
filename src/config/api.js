export const API_CONFIG = {
    BASE_URL: import.meta.env.VITE_API_BASE_URL || 'https://web-production-6b633.up.railway.app',
    ENDPOINTS: {
        LOGIN: '/login',
        REGISTER: '/register',
        SAVE_CUBE_DATA: '/saveCubeData',
        GET_CUBE_DATA: '/getCubeData'
    }
}

export const getAuthHeader = () => ({
    'Authorization': `Bearer ${localStorage.getItem('token')}`
})

export const getFullUrl = (endpoint) => {
    return `${API_CONFIG.BASE_URL}${endpoint}`
} 
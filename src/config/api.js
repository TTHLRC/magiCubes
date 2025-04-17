export const API_CONFIG = {
    BASE_URL: '/api',
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
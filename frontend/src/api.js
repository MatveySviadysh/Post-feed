// src/api.js
import axios from 'axios';

const API_URL = 'http://localhost:8000/authorization/api';

export const getProfile = async () => {
    try {
        const token = localStorage.getItem('token');
        if (!token) {
            throw new Error('Token not found');
        }
        console.log('Token:', token); // Проверка токена
        const response = await axios.get(`${API_URL}/profile/`, {
            headers: {
                'Authorization': `Bearer ${token}`,
            },
        });
        console.log('API Response:', response.data); // Проверка ответа API
        return response.data;
    } catch (error) {
        console.error('Ошибка при получении профиля:', error);
        throw error;
    }
};

import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Profile() {
    const [user, setUser] = useState(null);
    const [error, setError] = useState('');

    useEffect(() => {
        const fetchProfile = async () => {
            const token = localStorage.getItem('access');
            if (!token) {
                setError('Токен не найден');
                return;
            }

            try {
                const response = await axios.get('http://localhost:8000/auth/profile/', {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                });
                setUser(response.data);
            } catch (err) {
                console.error('Ошибка при получении профиля:', err);
                setError('Не удалось получить профиль пользователя');
            }
        };

        fetchProfile();
    }, []);

    if (error) {
        return <div>{error}</div>;
    }

    if (!user) {
        return <div>Загрузка...</div>;
    }

    return (
        <div>
            <h1>Профиль</h1>
            <p>Имя пользователя: {user.username}</p>
            <p>Email: {user.email}</p>
        </div>
    );
}

export default Profile;

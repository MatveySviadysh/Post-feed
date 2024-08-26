import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Profile.scss';

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
        <div className="profile-container">
            <div className="profile-card">
                <h2 className="profile-title">User Profile</h2>
                {/* <img src={user.avatar} alt="User Avatar" className="profile-avatar" /> */}
                <div className="profile-info">
                    <p><strong>Name:</strong> {user.username}</p>
                    <p><strong>Email:</strong> {user.email}</p>
                </div>
                <button className="change-user-button">edit acount</button>
            </div>
        </div>
    );

}

export default Profile;

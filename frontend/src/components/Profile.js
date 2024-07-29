// src/components/Profile.js
import React, { useEffect, useState } from 'react';
import { getProfile } from '../api';

const Profile = () => {
    const [profile, setProfile] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchProfile = async () => {
            try {
                const token = localStorage.getItem('token'); // Убедитесь, что токен сохранен
                console.log('Token:', token); // Проверка токена
                if (token) {
                    const profileData = await getProfile(token);
                    setProfile(profileData);
                } else {
                    setError(new Error('Token not found'));
                }
            } catch (error) {
                setError(error);
            }
        };

        fetchProfile();
    }, []);

    if (error) {
        return <div>Ошибка: {error.message}</div>;
    }

    if (!profile) {
        return <div>Загрузка...</div>;
    }

    return (
        <div>
            <h1>Welcome, {profile.username}!</h1>
            <p>Email: {profile.email}</p>
            <p>First Name: {profile.first_name}</p>
            <p>Last Name: {profile.last_name}</p>
        </div>
    );
};

export default Profile;

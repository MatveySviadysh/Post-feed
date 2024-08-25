import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Notifications = () => {
    const [notifications, setNotifications] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [ws, setWs] = useState(null);

    useEffect(() => {
        // Функция для получения уведомлений через API
        const fetchNotifications = async () => {
            try {
                const response = await axios.get('http://127.0.0.1:8001/api/notifications/');
                setNotifications(response.data);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchNotifications();

        // Подключение к WebSocket
        const socket = new WebSocket('ws://localhost:8001/ws/notifications/');

        socket.onopen = () => {
            console.log('WebSocket connection established');
        };

        socket.onmessage = (event) => {
            const notification = JSON.parse(event.data);
            setNotifications((prevNotifications) => [notification, ...prevNotifications]);
        };

        socket.onerror = (error) => {
            console.error('WebSocket error:', error);
        };

        socket.onclose = (event) => {
            console.log('WebSocket connection closed:', event);
        };

        // Сохраняем сокет в состоянии компонента
        setWs(socket);

        // Очистка при размонтировании компонента
        return () => {
            if (ws) {
                ws.close();
            }
        };
    }, [ws]);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error}</p>;

    return (
        <div>
            <h1>Notifications</h1>
            <ul>
                {notifications.map(notification => (
                    <li key={notification.id}>
                        <strong>Subject:</strong> {notification.subject} <br />
                        <strong>Body:</strong> {notification.body} <br />
                        <strong>Sent at:</strong> {new Date(notification.sent_at).toLocaleString()} <br />
                        <strong>Read:</strong> {notification.read ? 'Yes' : 'No'} <br />
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Notifications;

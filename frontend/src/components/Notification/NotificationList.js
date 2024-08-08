import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Notifications = () => {
    const [notifications, setNotifications] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
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
    }, []);

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

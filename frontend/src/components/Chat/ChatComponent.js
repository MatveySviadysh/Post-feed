import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ChatComponent = () => {
    const [users, setUsers] = useState([]); // Список всех пользователей
    const [selectedRecipient, setSelectedRecipient] = useState(''); // ID выбранного пользователя
    const [messages, setMessages] = useState([]); // Список сообщений
    const [newMessage, setNewMessage] = useState(''); // Новое сообщение
    const [senderId, setSenderId] = useState(1);  // ID текущего пользователя (замените на реальный ID)

    // Загрузка списка пользователей при монтировании компонента
    useEffect(() => {
        axios.get('http://localhost:8002/api/users/')
            .then(response => {
                console.log(response.data);  // Временно добавьте этот вывод, чтобы посмотреть на ответ
                setUsers(response.data);
            })
            .catch(error => {
                console.error("There was an error fetching the users!", error);
            });
    }, []);
    

    // Загрузка списка сообщений при монтировании компонента
    useEffect(() => {
        axios.get('http://localhost:8002/api/messages/')
            .then(response => {
                setMessages(response.data);
            })
            .catch(error => {
                console.error("There was an error fetching the messages!", error);
            });
    }, []);

    // Обработчик отправки нового сообщения
    const handleSendMessage = () => {
        const messageData = {
            sender: senderId,
            recipient: selectedRecipient,
            content: newMessage,
        };

        axios.post('http://localhost:8002/api/messages/', messageData)
            .then(response => {
                setMessages([...messages, response.data]);  // Обновляем список сообщений
                setNewMessage('');  // Очищаем поле ввода
            })
            .catch(error => {
                console.error("There was an error sending the message!", error);
            });
    };

    return (
        <div>
            <h2>Send a Message</h2>
            <select 
                value={selectedRecipient} 
                onChange={(e) => setSelectedRecipient(e.target.value)}
            >
                <option value="">Select a recipient</option>
                {users.map(user => (
                    <option key={user.id} value={user.id}>
                        {user.username}
                    </option>
                ))}
            </select>
            <div>
                <input 
                    type="text" 
                    value={newMessage} 
                    onChange={(e) => setNewMessage(e.target.value)} 
                    placeholder="Type your message..." 
                />
                <button onClick={handleSendMessage} disabled={!selectedRecipient || !newMessage}>
                    Send
                </button>
            </div>

            <h2>All Messages</h2>
            <ul>
                {messages.map((message) => (
                    <li key={message.id}>
                        <strong>From {message.sender} to {message.recipient}</strong>: {message.content} <em>{message.timestamp}</em>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ChatComponent;

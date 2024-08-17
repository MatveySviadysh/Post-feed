import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'; 

const Login = ({ onLogin }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();  

    const handleLogin = async (e) => {
        e.preventDefault(); 
        
        console.log("Submitting form with POST request..."); 

        try {
            const response = await axios.post('http://localhost:8000/auth/login/', {
                username,
                password,
            });

            const { access, refresh } = response.data;
            localStorage.setItem('access', access);
            localStorage.setItem('refresh', refresh);

            console.log("Login successful! Tokens saved."); 
            
            //onLogin(); 
            navigate('/profile'); 
        } catch (err) {
            console.error("Login failed: ", err.response ? err.response.data : err.message); 
            setError('Invalid credentials'); 
        }
    };

    return (
        <form onSubmit={handleLogin}>
            <div>
                <label>Username:</label>
                <input 
                    type="text" 
                    value={username} 
                    onChange={(e) => setUsername(e.target.value)} 
                    required
                />
            </div>
            <div>
                <label>Password:</label>
                <input 
                    type="password" 
                    value={password} 
                    onChange={(e) => setPassword(e.target.value)} 
                    required
                />
            </div>
            {error && <div>{error}</div>}
            <button type="submit">Login</button>
        </form>
    );
};

export default Login;

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Register from './components/Register';
import Login from './components/Login';
import Main from './components/Main';
import Profile from './components/Profile';
import CookieForm from './components/CookieForm';

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/register" element={<Register />} />
                <Route path="/login" element={<Login />} />
                <Route path="/main" element={<Main />} />
                <Route path="/profile" element={<Profile />} />
                <Route path="/cookie" element={<CookieForm />} />
            </Routes>
        </Router>
    );
}

export default App;

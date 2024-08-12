import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Register from '../components/Auth/Register';
import Login from '../components/Auth/Login';

const AuthRoutes = () => (
    <Routes>
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
    </Routes>
);

export default AuthRoutes;

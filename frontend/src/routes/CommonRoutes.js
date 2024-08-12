import React from 'react';
import { Route } from 'react-router-dom';
import Main from '../components/Main';
import Profile from '../components/Profile';
import CookieForm from '../components/Common/CookieForm';
import About from '../components/About';

const CommonRoutes = () => (
    <>
        <Route path="main" element={<Main />} />
        <Route path="profile" element={<Profile />} />
        <Route path="cookie" element={<CookieForm />} />
        <Route path="about" element={<About />} />
    </>
);

export default CommonRoutes;

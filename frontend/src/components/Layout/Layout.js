import React from 'react';
import { Outlet } from 'react-router-dom';
import NavBar from '../Common/NavBar';

const Layout = () => (
    <div>
        <NavBar />
        <main>
            <Outlet />
        </main>
    </div>
);

export default Layout;

import React from 'react';
import { Outlet } from 'react-router-dom';
import NavBar from '../Common/NavBar';
import styled from 'styled-components';

const PageContainer = styled.div`
    display: flex;
    flex-direction: column;
    min-height: 100vh; /* Гарантирует, что контейнер занимает всю высоту страницы */
`;

const MainContent = styled.main`
    flex: 1; /* Занимает оставшееся пространство */
    display: flex;
    justify-content: center;
    align-items: center; /* Центрирование по вертикали и горизонтали */
    padding: 20px; /* Отступы вокруг контента */
`;

const Layout = ({ onLogin, onLogout, isAuthenticated }) => (
    <PageContainer>
        <NavBar onLogin={onLogin} onLogout={onLogout} isAuthenticated={isAuthenticated} />
        <MainContent>
            <Outlet />
        </MainContent>
    </PageContainer>
);

export default Layout;

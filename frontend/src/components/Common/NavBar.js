//import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Nav = styled.nav`
    background-color: #333; /* Темный фон */
    padding: 1rem;
    position: fixed; /* Закрепить сверху */
    top: 0;
    width: 100%;
    z-index: 1000; /* Чтобы всегда было на переднем плане */
`;

const Ul = styled.ul`
    list-style: none;
    display: flex;
    gap: 1rem;
    justify-content: center; /* Центрировать кнопки */
    margin: 0;
    padding: 0;
`;

const StyledLink = styled(Link)`
    color: white; /* Белый текст */
    text-decoration: none; /* Убрать подчеркивание */
    font-weight: bold;

    &:hover {
        color: #ddd; /* Светлее при наведении */
    }
`;

const NavBar = () => {
    //const [setIsLoggedIn] = useState(false);

    // useEffect(() => {
    //     const checkLoginStatus = () => {
    //         const loggedIn = Boolean(localStorage.getItem('access'));
    //         setIsLoggedIn(loggedIn);
    //     };

    //     checkLoginStatus();
    // }, );

    return (
        <Nav>
            <Ul>
                <li><StyledLink to="/register">Register</StyledLink></li>
                <li><StyledLink to="/login">Login</StyledLink></li>
                <li><StyledLink to="/main">Main</StyledLink></li>
                <li><StyledLink to="/profile">Profile</StyledLink></li>
                <li><StyledLink to="/post_create">Post Create</StyledLink></li>
                <li><StyledLink to="/posts">Posts</StyledLink></li>
                <li><StyledLink to="/about">About</StyledLink></li>
                {/* <li><Link to="/cookie">Cookie</Link></li> */}
                {/* <li><Link to="/notification">Notification</Link></li>
                <li><Link to="/chat">Chat</Link></li> */}
            </Ul>
        </Nav>
    );
};

export default NavBar;

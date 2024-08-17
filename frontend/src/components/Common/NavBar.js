import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Nav = styled.nav`
    background-color: #333;
    padding: 1rem;
    position: fixed;
    top: 0;
    width: 100%;
    z-index: 1000;
`;

const Ul = styled.ul`
    list-style: none;
    display: flex;
    gap: 1rem;
    justify-content: center;
    margin: 0;
    padding: 0;
`;

const StyledLink = styled(Link)`
    color: white;
    text-decoration: none;
    font-weight: bold;

    &:hover {
        color: #ddd;
    }
`;

const NavBar = ({ onLogout, isAuthenticated }) => {
    return (
        <Nav>
            <Ul>
                {!isAuthenticated && (
                    <>
                        <li><StyledLink to="/register">Register</StyledLink></li>
                        <li><StyledLink to="/login">Login</StyledLink></li>
                    </>
                )}
                <li><StyledLink to="/main">Main</StyledLink></li>
                {isAuthenticated && (
                    <>
                        <li><StyledLink to="/profile">Profile</StyledLink></li>
                        <li><StyledLink to="/post_create">Post Create</StyledLink></li>
                        <li><button onClick={onLogout}>Logout</button></li>
                    </>
                )}
                <li><StyledLink to="/posts">Posts</StyledLink></li>
                <li><StyledLink to="/about">About</StyledLink></li>
            </Ul>
        </Nav>
    );
};

export default NavBar;

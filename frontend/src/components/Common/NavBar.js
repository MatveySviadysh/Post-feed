import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
const Nav = styled.nav`
    padding: 1rem;
`;

const Ul = styled.ul`
    list-style: none;
    display: flex;
    gap: 1rem;
`;

const NavBar = () => (
    <Nav>
        <Ul>
            <li><Link to="/register">Register</Link></li>
            <li><Link to="/login">Login</Link></li>
            <li><Link to="/main">Main</Link></li>
            <li><Link to="/profile">Profile</Link></li>
            <li><Link to="/cookie">Cookie</Link></li>
            <li><Link to="/post_create">Post Create</Link></li>
            <li><Link to="/posts">Posts</Link></li>
            <li><Link to="/about">About</Link></li>
        </Ul>
    </Nav>
);

export default NavBar;

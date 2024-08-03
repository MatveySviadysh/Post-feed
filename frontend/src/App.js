import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Register from './components/Register';
import Login from './components/Login';
import Main from './components/Main';
import Profile from './components/Profile';
import CookieForm from './components/CookieForm';
import PostCreate from './components/PostCreate';
import PostList from './components/PostList';
import About from './components/About';

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/register" element={<Register />} />
                <Route path="/login" element={<Login />} />
                <Route path="/main" element={<Main />} />
                <Route path="/profile" element={<Profile />} />
                <Route path="/cookie" element={<CookieForm />} />
                <Route path="/post_create" element={<PostCreate />} />
                <Route path="/posts" element={<PostList />} />
                <Route path="/about" element={<About />} />
            </Routes>
        </Router>
    );
}

export default App;

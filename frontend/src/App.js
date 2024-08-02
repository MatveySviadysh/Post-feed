import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Register from './components/Register';
import Login from './components/Login';
import Main from './components/Main';
import Profile from './components/Profile';
import CookieForm from './components/CookieForm';
import PostList from './components/PostList';
import CreatePost from './components/CreatePost';
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
                <Route path="/postCreate" element={<CreatePost />} />
                <Route path="/postList" element={<PostList />} />
                <Route path="/about" element={<About />} />
            </Routes>
        </Router>
    );
}

export default App;

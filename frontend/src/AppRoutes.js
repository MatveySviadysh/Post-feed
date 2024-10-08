import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Register from './components/Auth/Register';
import Login from './components/Auth/Login';
import Main from './components/Main';
import Profile from './components/Profile';
// import CookieForm from './components/Common/CookieForm';
import PostCreate from './components/Posts/PostCreate';
import PostList from './components/Posts/PostList';
import About from './components/About';
import Layout from './components/Layout/Layout';
//import Multiply from './Multiply';
import NotificationList from './components/Notification/NotificationList';
import PostDetail from './components/Posts/PostDetail';
//import ChatComponent from './components/Chat/ChatComponent';
import PostLine from './components/Posts/PostsLine'


const AppRoutes = ({ onLogin, onLogout, isAuthenticated }) => {
    return (
        <Routes>
            <Route path="/" element={<Layout onLogin={onLogin} onLogout={onLogout} isAuthenticated={isAuthenticated} />}>
                {/* <Route path="/multiply" component={Multiply} /> */}
                <Route path="/register" element={<Register />} />
                <Route path="/login" element={<Login />} />
                <Route path="/main" element={<Main />} />
                <Route path="/profile" element={<Profile />} />
                {/* <Route path="/cookie" element={<CookieForm />} /> */}
                <Route path="/post_create" element={<PostCreate />} />
                <Route path="/posts" element={<PostList />} />
                <Route path="/posts_line" element={<PostLine />} />
                <Route path="/about" element={<About />} />
                <Route path="/notification" element={<NotificationList />} /> 
                <Route path="/posts/:postId" element={<PostDetail />} />
                {/* <Route path="/chat"element={<ChatComponent />} /> */}
            </Route>
        </Routes>
    );
};

export default AppRoutes;

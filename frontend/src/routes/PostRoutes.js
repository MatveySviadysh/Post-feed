import React from 'react';
import { Route } from 'react-router-dom';
import PostCreate from '../components/Posts/PostCreate';
import PostList from '../components/Posts/PostList';

const PostRoutes = () => (
    <>
        <Route path="post_create" element={<PostCreate />} />
        <Route path="posts" element={<PostList />} />
    </>
);

export default PostRoutes;

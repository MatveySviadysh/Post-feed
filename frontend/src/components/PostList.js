// components/PostList.js

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import PostCreate from './PostCreate';

const PostList = () => {
    const [posts, setPosts] = useState([]);

    const fetchPosts = async () => {
        try {
            const response = await axios.get('http://localhost:8000/posts/');
            setPosts(response.data);
        } catch (error) {
            console.error("There was an error retrieving the posts!", error);
        }
    };

    useEffect(() => {
        fetchPosts();
    }, []);

    return (
        <div>
            <h1>Posts</h1>
            <PostCreate onPostCreated={fetchPosts} />
            <ul>
                {posts.map(post => (
                    <li key={post.id}>
                        <h2>{post.title}</h2>
                        <p>{post.content}</p>
                        {post.image && <img src={`http://localhost:8000${post.image}`} alt={post.title} />}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default PostList;

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Post from './components/posts';

const PostLine = () => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        const fetchPosts = async () => {
            try {
                const response = await axios.get('http://localhost:8000/posts/');
                setPosts(response.data);
            } catch (error) {
                console.error("There was an error fetching the posts!", error);
            }
        };

        fetchPosts();
    }, []);

    return (
        <div className="post-line">
            {posts.map(post => (
                <Post key={post.id} post={post} />
            ))}
        </div>
    );
};

export default PostLine;

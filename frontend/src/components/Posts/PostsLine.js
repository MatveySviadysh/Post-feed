import React, { useEffect, useState } from 'react';
import axios from 'axios';

const PostList = () => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:8000/posts/posts_line/')
            .then(response => {
                setPosts(response.data);
            })
            .catch(error => {
                console.error('There was an error fetching the posts!', error);
            });
    }, []);

    return (
        <div>
            {posts.map(post => (
                <div key={post.id} className="post">
                    <h2>{post.title}</h2>
                    <p>{post.content}</p>
                    {post.image && <img src={post.image} alt={post.title} width={100} height={100} />}
                    <p><strong>Author:</strong> {post.author}</p>
                    <p><small>{new Date(post.created_at).toLocaleString()}</small></p>
                </div>
            ))}
        </div>
    );
};

export default PostList;

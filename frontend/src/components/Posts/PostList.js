import React, { useEffect, useState } from 'react';
import axios from 'axios';

const PostList = () => {
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

    const handleDelete = async (postId) => {
        console.log("Deleting post with ID:", postId); // Добавьте логирование здесь
        try {
            await axios.delete(`http://localhost:8000/posts/${postId}/`);
            setPosts(posts.filter(post => post.id !== postId));
        } catch (error) {
            console.error("There was an error deleting the post!", error);
        }
    };

    return (
        <div>
            <h1>Posts</h1>
            <ul>
                {posts.map(post => (
                    <li key={post.id}>
                        <h2>{post.title}</h2>
                        <p>{post.content}</p>
                        {post.image && <img src={post.image} alt={post.title} />}
                        <button onClick={() => handleDelete(post.id)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default PostList;

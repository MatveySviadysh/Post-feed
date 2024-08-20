// PostList.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const PostList = () => {
    const [posts, setPosts] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchPosts = async () => {
            try {
                const response = await axios.get('http://localhost:8000/api/posts/');
                console.log('Fetched posts:', response.data); // Добавлено логирование
                setPosts(response.data);
            } catch (error) {
                console.error("There was an error fetching the posts!", error);
            }
        };

        fetchPosts();
    }, []);

    const handleDelete = async (postId) => {
        console.log("Deleting post with ID:", postId);
        try {
            await axios.delete(`http://localhost:8000/api/posts/${postId}/`);
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
                        {post.image ? (
                            <img src={post.image} alt={post.title} />
                        ) : (
                            <p>Фото нету</p>
                        )}
                        <button onClick={() => handleDelete(post.id)}>Delete</button>
                        <button onClick={() => navigate(`/posts/${post.id}`)}>Перейти к посту</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default PostList;

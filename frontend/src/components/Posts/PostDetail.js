// PostDetail.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';

const PostDetail = () => {
    const { postId } = useParams();
    const [post, setPost] = useState(null);
    const navigate = useNavigate();

    const handleDelete = async (postId) => {
        console.log("Deleting post with ID:", postId);
        try {
            await axios.delete(`http://localhost:8000/api/posts/${postId}/`);
            navigate('/posts'); // Перенаправление на главную страницу после удаления
        } catch (error) {
            console.error("There was an error deleting the post!", error);
        }
    };

    useEffect(() => {
        const fetchPost = async () => {
            try {
                const response = await axios.get(`http://localhost:8000/api/posts/${postId}/`);
                setPost(response.data);
            } catch (error) {
                console.error("There was an error fetching the post!", error);
            }
        };

        fetchPost();
    }, [postId]);

    if (!post) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <h1>{post.title}</h1>
            <p>{post.content}</p>
            {post.image ? (
                <img src={post.image} alt={post.title} />
            ) : (
                <p>Фото нету</p>
            )}
            <button onClick={() => handleDelete(post.id)}>Delete</button>
        </div>
    );
};

export default PostDetail;

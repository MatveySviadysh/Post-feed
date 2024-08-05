import React, { useState } from 'react';
import axios from 'axios';

const PostCreate = ({ onPostCreated }) => {
    const [newPost, setNewPost] = useState({ title: '', content: '', image: null });

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const formData = new FormData();
            formData.append('title', newPost.title);
            formData.append('content', newPost.content);
            if (newPost.image) {
                formData.append('image', newPost.image);
            }

            await axios.post('http://localhost:8000/posts/create/', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                }
            });

            setNewPost({ title: '', content: '', image: null });
            if (onPostCreated) {
                onPostCreated();
            }

            // Перенаправление на страницу main
            window.location.href = '/main';
        } catch (error) {
            console.error("There was an error creating the post!", error);
        }
    };

    const handleImageChange = (e) => {
        setNewPost({ ...newPost, image: e.target.files[0] });
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="Title"
                value={newPost.title}
                onChange={(e) => setNewPost({ ...newPost, title: e.target.value })}
            />
            <textarea
                placeholder="Content"
                value={newPost.content}
                onChange={(e) => setNewPost({ ...newPost, content: e.target.value })}
            />
            <input
                type="file"
                accept="image/*"
                onChange={handleImageChange}
            />
            <button type="submit">Create Post</button>
        </form>
    );
};

export default PostCreate;

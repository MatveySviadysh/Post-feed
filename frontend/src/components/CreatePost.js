// src/components/CreatePost.js
import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const CreatePost = () => {
  const [caption, setCaption] = useState('');
  const [image, setImage] = useState(null);
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append('caption', caption);
    formData.append('image', image);

    try {
      await axios.post('http://127.0.0.1:8000/posts/create/', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
          // Добавьте сюда авторизационный токен, если он нужен
        },
      });
      setCaption('');
      setImage(null);
      navigate('/main'); // Перенаправление на главную страницу после успешного создания поста
    } catch (error) {
      console.error('Post creation error', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Create Post</h2>
      <div>
        <label>Caption:</label>
        <input
          type="text"
          value={caption}
          onChange={(e) => setCaption(e.target.value)}
        />
      </div>
      <div>
        <label>Image:</label>
        <input
          type="file"
          onChange={(e) => setImage(e.target.files[0])}
        />
      </div>
      <button type="submit">Create Post</button>
    </form>
  );
};

export default CreatePost;

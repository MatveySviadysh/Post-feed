import React, { useEffect, useState } from 'react';
import axios from 'axios';

const PostList = () => {
    const [posts, setPosts] = useState([]);
    const [user, setUser] = useState(null);  
    const token = localStorage.getItem('access');

    useEffect(() => {

    axios.get('/auth/current_user/', {
        headers: {
            'Authorization': `Bearer ${token}`
        }
    })
    .then(response => {
        setUser(response.data);  // Установите данные пользователя
    })
    .catch(error => {
        console.error('Error fetching user data:', error);
    });

    axios.get('http://localhost:8000/posts/posts_line/')
        .then(response => {
            setPosts(response.data);
        })
        .catch(error => {
            console.error('There was an error fetching the posts!', error);
        });
}, []);


    const handleLike = (postId) => {
        // if (!user) {  
        //     alert('You need to log in to like a post');
        //     return;
        // }

        axios.post(`http://localhost:8000/posts/${postId}/like/`)  // Измените на правильный эндпоинт
            .then(response => {
                setPosts(posts.map(post => 
                    post.id === postId ? { ...post, likes: response.data.likes, liked: true } : post
                ));
            })
            .catch(error => {
                console.error('There was an error liking the post!', error);
            });
    };

    return (
        <div>
            {posts.map(post => (
                <div key={post.id} className="post">
                    <h2>{post.title}</h2>
                    <p>{post.content}</p>
                    {post.image && <img src={post.image} alt={post.title} width={100} height={100} />}
                    <p><strong>Author:</strong> {post.author}</p>
                    <p><small>{new Date(post.created_at).toLocaleString()}</small></p>
                    <p><strong>Likes:</strong> {post.likes}</p>
                    {!post.liked && <button onClick={() => handleLike(post.id)}>Like</button>}
                </div>
            ))}
        </div>
    );
};

export default PostList;

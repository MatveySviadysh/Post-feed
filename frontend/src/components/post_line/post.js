import React from 'react';

const Post = ({ post }) => {
    return (
        <div className="post">
            <h2>{post.title}</h2>
            <p>{post.content}</p>
            {post.image && <img src={post.image} alt={post.title} />}
        </div>
    );
};

export default Post;

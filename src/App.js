import React from 'react';
import './App.css';
import posts from './api/posts';
import Post from './components/Post';

const PostList = () => (
  <div className="posts-list">
  {
    posts.map((post) => <Post postId={ post['id'] } />)
  }
</div>
);

export default PostList;
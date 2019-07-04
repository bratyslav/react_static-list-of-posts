import React from 'react';
import PropTypes from 'prop-types';
import posts from '../api/posts';
import User from './User';
import CommentList from './CommentList';
import users from '../api/users';

const Post = (props) => {
  const post = posts.find((post) => post.id === props.postId);

  return (
    <div>
      <h2 className="post__title">
        {post.title}
      </h2>
      <div className="post__body">
        {post.body}
      </div>
      <User 
        person={users.find((person) => person.id === post.userId)}
      />
      <CommentList 
        postId={props.postId}
      />
    </div>
  );
};

Post.propTypes = {
  postId: PropTypes.number.isRequired
};

export default Post;
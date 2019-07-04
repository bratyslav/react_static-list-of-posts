import React from 'react';
import PropTypes from 'prop-types';
import '../App.css';
import posts from '../api/posts';
import User from './User';
import CommentList from './CommentList';

const Post = (props) => {
  const userId = posts.find((post) => post['id'] === props.postId)['userId'];

  return (
    <div>
      <h2 className="post__title">
        {
          posts
            .find((post) => post['id'] === props.postId)
            ['title']
        }
      </h2>
      <div className="post__body">
        {
          posts
            .find((post) => post['id'] === props.postId)
            ['body']
        }
      </div>
      <User userId={userId} valueType={'name'} />
      <User userId={userId} valueType={'email'} />
      <User userId={userId} valueType={'address'} />
      <CommentList postId={props.postId}/>
    </div>
  );
};

Post.propTypes = {
  postId: PropTypes.number.isRequired
};

export default Post;
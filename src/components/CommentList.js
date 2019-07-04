import React from 'react';
import PropTypes from 'prop-types';
import comments from '../api/comments';
import Comment from './Comment';

const CommentList = (props) => (
  <div className="post__comments-list">
    <div className="post__comments-list-title">
      Comments:
    </div>
    {
      comments
        .filter((comment) => comment.postId === props.postId)
        .map((comment) => <Comment comment={comment} />)
    }
  </div>
);

CommentList.propTypes = {
  postId: PropTypes.number.isRequired
};

export default CommentList;
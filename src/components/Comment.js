import React from 'react';
import PropTypes from 'prop-types';
import '../App.css';
import comments from '../api/comments';

const Comment = (props) => (
  <div className="post__comment">
    <div>
      {
        comments.find((comment) => comment.id === props.commentId)
        ['name']
      }
    </div>
    <div>
      {
        comments.find((comment) => comment.id === props.commentId)
        ['email']
      }
    </div>
    <div className="post__comment-body">
      {
        comments.find((comment) => comment.id === props.commentId)
        ['body']
      }
    </div>
  </div>
);

Comment.propTypes = {
  commentId: PropTypes.number.isRequired
};

export default Comment;
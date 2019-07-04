import React from 'react';
import PropTypes from 'prop-types';
import '../App.css';
import comments from '../api/comments';
import Comment from './Comment';

// DONE

const CommentList = (props) => (
  <div className="post__comments-list">
    <div className="post__comments-list-title">
      Comments:
    </div>
    {
      comments
        .filter((comment) => comment.postId === props.postId)
        .map((comment) => <Comment commentId={comment.id} />)
    }
  </div>
);

CommentList.propTypes = {
  postId: PropTypes.number.isRequired
};

export default CommentList;
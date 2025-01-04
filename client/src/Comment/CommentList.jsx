import axios from 'axios';
import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

const CommentList = ({ postId }) => {
  const [comments, setComments] = useState([]);

  const fetchComments = async () => {
    const response = await axios.get(
      `http://localhost:4001/posts/${postId}/comments`
    );
    setComments(response?.data);
  };

  useEffect(() => {
    fetchComments();
  });

  const renderedComments = comments.map((comment) => {
    return <li key={comment.id}>{comment.content}</li>;
  });

  return <ul>{renderedComments}</ul>;
};

CommentList.propTypes = {
  postId: PropTypes.string.isRequired,
};

export default CommentList;

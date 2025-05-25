import PropTypes from 'prop-types';

const CommentList = ({ comments }) => {
  const renderedComments = comments.map((comment) => {
    let content;
    switch (comment.status) {
      case 'approved':
      content = comment.content;
      break;
      case 'pending':
      content = 'This comment is awaiting moderation';
      break;
      case 'rejected':
      content = 'This comment has been rejected';
      break;
      default:
      content = '';
    }

    return <li key={comment.id}>{content}</li>;
  });

  return <ul>{renderedComments}</ul>;
};

CommentList.propTypes = {
  comments: PropTypes.array.isRequired,
};

export default CommentList;

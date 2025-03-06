import { useState, useEffect } from 'react';

const Comment = ({ comment }) => {
  const [timeAgo, setTimeAgo] = useState('');

  useEffect(() => {
    const calculateTimeAgo = () => {
      if (!comment.created_at) return 'Just now';

      const now = new Date();
      const commentDate = new Date(comment.created_at);
      const diffInSeconds = Math.floor((now - commentDate) / 1000);

      if (diffInSeconds < 60) {
        return 'Just now';
      } else if (diffInSeconds < 3600) {
        const minutes = Math.floor(diffInSeconds / 60);
        return `${minutes} ${minutes === 1 ? 'minute' : 'minutes'} ago`;
      } else if (diffInSeconds < 86400) {
        const hours = Math.floor(diffInSeconds / 3600);
        return `${hours} ${hours === 1 ? 'hour' : 'hours'} ago`;
      } else {
        const days = Math.floor(diffInSeconds / 86400);
        return `${days} ${days === 1 ? 'day' : 'days'} ago`;
      }
    };

    setTimeAgo(calculateTimeAgo());

    // Update time ago every minute
    const intervalId = setInterval(() => {
      setTimeAgo(calculateTimeAgo());
    }, 60000);

    return () => clearInterval(intervalId);
  }, [comment.created_at]);

  return (
    <div className="comment">
      <div className="comment-header">
        <h4>{comment.name}</h4>
        <span className="comment-time">{timeAgo}</span>
      </div>
      <p className="comment-message">{comment.message}</p>
    </div>
  );
};

export default Comment; 
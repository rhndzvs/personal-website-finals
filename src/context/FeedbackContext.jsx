import { createContext, useContext, useState, useEffect } from 'react';
import { getFeedback, addFeedback, subscribeToFeedback } from '../lib/supabase';

const FeedbackContext = createContext();

export const useFeedback = () => {
  const context = useContext(FeedbackContext);
  if (!context) {
    throw new Error('useFeedback must be used within a FeedbackProvider');
  }
  return context;
};

export const FeedbackProvider = ({ children }) => {
  const [comments, setComments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch initial comments
  useEffect(() => {
    const fetchComments = async () => {
      try {
        setLoading(true);
        const data = await getFeedback();
        setComments(data);
      } catch (err) {
        console.error('Error fetching comments:', err);
        setError('Failed to load comments. Please try again later.');
      } finally {
        setLoading(false);
      }
    };

    fetchComments();
  }, []);

  // Subscribe to real-time updates
  useEffect(() => {
    const subscription = subscribeToFeedback((payload) => {
      if (payload.eventType === 'INSERT') {
        setComments((prevComments) => [payload.new, ...prevComments]);
      } else if (payload.eventType === 'DELETE') {
        setComments((prevComments) => 
          prevComments.filter((comment) => comment.id !== payload.old.id)
        );
      } else if (payload.eventType === 'UPDATE') {
        setComments((prevComments) => 
          prevComments.map((comment) => 
            comment.id === payload.new.id ? payload.new : comment
          )
        );
      }
    });

    return () => {
      subscription.unsubscribe();
    };
  }, []);

  // Submit a new comment
  const submitComment = async (name, message) => {
    if (!name.trim() || !message.trim()) {
      setError('Please fill in all fields');
      return null;
    }

    try {
      const newComment = await addFeedback(name, message);
      return newComment;
    } catch (err) {
      console.error('Error submitting comment:', err);
      setError('Failed to submit your comment. Please try again.');
      return null;
    }
  };

  const value = {
    comments,
    loading,
    error,
    submitComment,
  };

  return (
    <FeedbackContext.Provider value={value}>
      {children}
    </FeedbackContext.Provider>
  );
};

export default FeedbackContext; 
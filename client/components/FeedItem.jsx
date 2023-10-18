import React from 'react';
import './../styles/FeedItem.scss';

const FeedItem = props => {
  const { user_id, post_content, user_rating, technology_id } = props.item;

  const populateStars = count => {
    const stars = [];
    while (count > 0) {
      stars.push(<span key={`star${count}`} className='material-symbols-outlined star'>star</span>);
      count--;
    }
    return stars;
  };

  return (
    <div className='feed-item'>
      <h3>User {user_id}</h3>
      <p>{post_content}</p>
      <div className='tech-rating'>
        <div>Tech_ID: {technology_id}</div>
        <div className='stars-container'>{populateStars(user_rating)}</div>
      </div>
    </div>
  );
};

export default FeedItem;

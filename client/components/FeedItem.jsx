import React from 'react';
import './../styles/FeedItem.scss';

const FeedItem = props => {
  const { user_id, post_content, user_rating, technology_id } = props.item;
  const date = new Date('2023-10-18T10:06:27.755Z');

  const humanReadableDate = date.toLocaleString();

  const populateStars = count => {
    const stars = [];
    while (count > 0) {
      stars.push(
        <span key={`star${count}`} className='material-symbols-outlined star'>
          star
        </span>,
      );
      count--;
    }
    return stars;
  };

  return (
    <div className='feed-item'>
      <h3 className='user-name'>{props.item.username}</h3>
      <p>{props.readableDate}</p>
      <p className='text-body'>{post_content}</p>
      <div className='tech-rating'>
        <div>Tech: {props.item.technology_name}</div>
        <div className='stars-container'>{populateStars(user_rating)}</div>
      </div>
    </div>
  );
};

export default FeedItem;

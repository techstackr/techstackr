import React from 'react';
import { FaStar } from 'react-icons/fa';
import './../styles/FeedItem.scss';

const FeedItem = props => {
  const { user_id, post_content, user_rating, icon, technology_id } =
    props.item;
  console.log(props.item);
  const date = new Date('2023-10-18T10:06:27.755Z');

  const humanReadableDate = date.toLocaleString();

  const populateStars = count => {
    const stars = [];
    while (count > 0) {
      stars.push(
        <FaStar className='star' size={20} color={'#ffc107'}></FaStar>,
      );
      count--;
    }
    return stars;
  };

  return (
    <div className='feed-item'>
      <div className='user-container'>
        <img
          className='user-pic'
          src='https://ca.slack-edge.com/T05BNUKN92M-U05HV0RGWGN-707f045c59b4-512'></img>
        <h3 className='username'>{props.item.username}</h3>
        <p className='post-date'>{props.readableDate}</p>
      </div>
      <hr />
      <p className='text-body'>{post_content}</p>
      <div className='tech-rating'>
        <div className='img-container'>
          <img className='feed-item-img' src={icon}></img>
        </div>
        <div className='stars-container'>{populateStars(user_rating)}</div>
      </div>
    </div>
  );
};

export default FeedItem;

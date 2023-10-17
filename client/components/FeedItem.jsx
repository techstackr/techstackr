import { React, useState, useEffect } from 'react';
import './../styles/FeedItem.scss';

const FeedItem = props => {
  const [fetchedFeed, updateFetchedFeed] = useState([]);

  return (
    <div className='feed-item'>
      <h3>Username</h3>
      <p>Comment text goes here</p>
    </div>
  );
};

export default FeedItem;

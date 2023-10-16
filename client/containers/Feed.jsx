import { React, useState, useEffect } from 'react';
import './../styles/Feed.scss';
import FeedItem from '../components/FeedItem.jsx';

const Feed = () => {
  // STATE HOOKS
  const [fetchedFeed, updateFetchedFeed] = useState([]);

  // useEffect
  // fetch posts by most recent and update feedItems state

  const feedItems = fetchedFeed.map(item => <Feed item={item} />);

  return <div id='feed-container'>{feedItems}</div>;
};

export default Feed;

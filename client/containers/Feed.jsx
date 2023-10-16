import { React, useState, useEffect } from 'react';
import './../styles/Nav.scss';

const Feed = () => {
  // STATE HOOKS
  const [fetchedFeed, updateFetchedFeed] = useState([]);

  // useEffect
  // fetch posts by most recent and update feedItems state

  const feedItems = fetchedFeed.map(item => <Feed item={item} />);

  return <div id='feed-container'>{feedItems}</div>;
};

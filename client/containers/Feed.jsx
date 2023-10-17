import React, { useState, useEffect } from 'react';
import './../styles/Feed.scss';
import FeedItem from '../components/FeedItem.jsx';
import FilterBox from './FilterBox';

// test data
const posts = [
  {
    post_id: 1,
    user_id: 1,
    post_content: 'test post here',
    user_rating: 4,
    technology_id: 2,
  },
  {
    post_id: 2,
    user_id: 2,
    post_content: `here's another post`,
    user_rating: 5,
    technology_id: 4,
  },
];

const Feed = () => {
  // STATE HOOKS
  const [fetchedFeed, updateFetchedFeed] = useState(posts);

  // fetch posts and update fetchedFeed
  useEffect(() => {
    fetch('/api/posts')
      .then(response => response.json())
      .then(data => updatedFetchedFeed(data))
      .catch(error => console.log(error));
  }, []);

  // filter posts
  const handleFilter = event => {
    const filter = event.target.id;
    feedItems.filter(feedItem => feedItem.technology_id === filter);
  };

  const feedItems = fetchedFeed.map((item, index) => {
    return <FeedItem key={`FeedItem-${index}`} item={item} />;
  });

  return (
    <div id='feed-container'>
      <FilterBox />
      {feedItems}
    </div>
  );
};

export default Feed;
